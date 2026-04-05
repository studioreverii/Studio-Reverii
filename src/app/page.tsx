import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import styles from './page.module.css';

export default function Home() {
  const featuredProject = projects[0];
  const previewProjects = projects.slice(0, 3);

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <h1 className={styles.heroWordmark}>STUDIO REVERII</h1>

        <div className={styles.heroImageContainer}>
          <div className={styles.decorativeSquarePink} />
          <div className={styles.decorativeSquareSage} />
          <Image
            src={featuredProject.coverImage}
            alt="Studio Reverii featured work"
            width={500}
            height={360}
            className={styles.heroImage}
            priority
            unoptimized
          />
        </div>
      </section>

      {/* Tagline */}
      <section className={styles.taglineSection}>
        <div className={styles.taglineRow}>
          <div className={styles.ruleLeft} />
          <div className={styles.taglineText}>
            <p>We don&apos;t just take photos.</p>
            <p>We build worlds.</p>
          </div>
          <div className={styles.ruleRight} />
        </div>
      </section>

      {/* Projects preview */}
      <section className={styles.preview}>
        <span className={styles.previewLabel}>Projects &rarr;</span>
        <div className={styles.previewGrid}>
          {previewProjects.map((project, i) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={styles.previewItem}
              style={{ marginTop: i === 1 ? '24px' : '0' }}
            >
              <Image
                src={project.coverImage}
                alt={project.title}
                width={160}
                height={110}
                className={styles.previewImage}
                unoptimized
              />
              <span className={styles.previewTitle}>{project.title}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
