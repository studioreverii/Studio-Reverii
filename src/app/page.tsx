import Image from 'next/image';
import Link from 'next/link';
import { projects, imgPath } from '@/data/projects';
import styles from './page.module.css';

export default function Home() {
  const sorted = [...projects].sort((a, b) => a.order - b.order);
  const featuredProject = sorted[0];
  const previewProjects = sorted.slice(0, 3);

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <h1 className={styles.heroWordmark}>Studio Reverii</h1>

        <div className={styles.heroImageContainer}>
          <div className={styles.decorativeSquareMauve} />
          <div className={styles.decorativeSquareTaupe} />
          <Image
            src={imgPath(featuredProject.slug, featuredProject.coverImage)}
            alt="Studio Reverii featured work"
            width={500}
            height={360}
            className={styles.heroImage}
            priority
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
                src={imgPath(project.slug, project.coverImage)}
                alt={project.title}
                width={160}
                height={110}
                className={styles.previewImage}
              />
              <span className={styles.previewTitle}>{project.title}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
