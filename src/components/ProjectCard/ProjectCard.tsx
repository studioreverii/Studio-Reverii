import Link from 'next/link';
import Image from 'next/image';
import { Project, imgPath } from '@/data/projects';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={styles.card}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className={styles.imageWrapper}>
        <div className={styles.decorativeBlock} />
        <Image
          src={imgPath(project.slug, project.coverImage)}
          alt={project.title}
          width={1920}
          height={1080}
          className={styles.image}
        />
      </div>
      <div className={styles.info}>
        <h2 className={styles.title}>{project.title}</h2>
        {project.credits.brand && (
          <span className={styles.brand}>for {project.credits.brand}</span>
        )}
        <span className={styles.year}>{project.year}</span>
      </div>
    </Link>
  );
}
