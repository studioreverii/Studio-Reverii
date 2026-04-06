import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import styles from './page.module.css';

export const metadata = {
  title: 'Projects — Studio Reverii',
};

export default function ProjectsPage() {
  const sorted = [...projects].sort((a, b) => a.order - b.order);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.list}>
        {sorted.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
