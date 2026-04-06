import { notFound } from 'next/navigation';
import { projects, getProjectBySlug } from '@/data/projects';
import ProjectDetail from './ProjectDetail';

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: 'Not Found' };
  return { title: `${project.title} — Studio Reverii` };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();
  return <ProjectDetail project={project!} />;
}
