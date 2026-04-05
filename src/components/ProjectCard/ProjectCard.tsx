import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/data/projects';
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
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={project.coverImage}
          alt={project.title}
          width={200}
          height={130}
          className={styles.image}
          unoptimized
        />
      </div>
      <div className={styles.info}>
        <h2 className={styles.title}>{project.title}</h2>
        <span className={styles.year}>{project.year}</span>
        <p className={styles.description}>{project.description}</p>
      </div>
    </Link>
  );
}
