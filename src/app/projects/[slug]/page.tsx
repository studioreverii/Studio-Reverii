import { notFound } from 'next/navigation';
import Image from 'next/image';
import { projects, getProjectBySlug } from '@/data/projects';
import styles from './page.module.css';

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: 'Not Found' };
  return { title: `${project.title} — Studio Reverii` };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.subtitle}>for {project.client}</p>
      </header>

      {/* Narrative */}
      <section className={styles.narrativeSection}>
        {project.narrative.map((para, i) => (
          <p key={i} className={styles.narrativePara}>{para}</p>
        ))}
      </section>

      {/* Images */}
      <section className={styles.imagesSection}>
        {project.images.map((src, i) => (
          <div key={i} className={styles.imageWrapper}>
            {i === 1 && <div className={styles.decorativeSquare} />}
            <Image
              src={src}
              alt={`${project.title} — image ${i + 1}`}
              width={1200}
              height={800}
              className={styles.image}
              unoptimized
            />
          </div>
        ))}
      </section>

      {/* Credits */}
      <section className={styles.credits}>
        <dl className={styles.creditsList}>
          <div className={styles.creditRow}>
            <dt className={styles.creditLabel}>BRAND:</dt>
            <dd className={styles.creditValue}>{project.credits.brand}</dd>
          </div>
          <div className={styles.creditRow}>
            <dt className={styles.creditLabel}>Creative Direction —</dt>
            <dd className={styles.creditValue}>{project.credits.creativeDirection}</dd>
          </div>
          <div className={styles.creditRow}>
            <dt className={styles.creditLabel}>Photography —</dt>
            <dd className={styles.creditValue}>{project.credits.photography}</dd>
          </div>
          <div className={styles.creditRow}>
            <dt className={styles.creditLabel}>Model —</dt>
            <dd className={styles.creditValue}>{project.credits.model}</dd>
          </div>
          <div className={styles.creditRow}>
            <dt className={styles.creditLabel}></dt>
            <dd className={styles.creditValue}>{project.credits.location}</dd>
          </div>
          <div className={styles.creditRow}>
            <dt className={styles.creditLabel}>SHOT ON:</dt>
            <dd className={styles.creditValue}>{project.credits.date}</dd>
          </div>
        </dl>
      </section>
    </div>
  );
}
