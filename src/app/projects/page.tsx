import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import styles from './page.module.css';

export const metadata = {
  title: 'Projects — Studio Reverii',
};

export default function ProjectsPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>PROJECTS</h1>
      <div className={styles.list}>
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
