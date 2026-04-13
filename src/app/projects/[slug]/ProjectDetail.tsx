'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { Project, imgPath } from '@/data/projects';
import Lightbox from '@/components/Lightbox/Lightbox';
import styles from './page.module.css';

export default function ProjectDetail({ project }: { project: Project }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const imagePaths = project.images.map((f) => imgPath(project.slug, f));

  // Cinematic proportions: match intrinsic hint to actual image dimensions
  const imgDimensions =
    project.aspectRatio === '16/9'
      ? { width: 1920, height: 1080 }
      : project.aspectRatio === '1/1'
      ? { width: 1080, height: 1080 }
      : { width: 1620, height: 1080 }; // mixed: 3:2 landscape baseline

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = useCallback(
    () =>
      setLightboxIndex((i) =>
        i !== null ? (i - 1 + imagePaths.length) % imagePaths.length : null
      ),
    [imagePaths.length]
  );
  const nextImage = useCallback(
    () =>
      setLightboxIndex((i) =>
        i !== null ? (i + 1) % imagePaths.length : null
      ),
    [imagePaths.length]
  );

  const { credits } = project;

  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.title}>{project.title}</h1>
        {credits.brand && (
          <p className={styles.subtitle}>for {credits.brand}</p>
        )}
      </header>

      {/* Narrative */}
      <section className={styles.narrativeSection}>
        {project.narrative.map((para, i) => (
          <p key={i} className={styles.narrativePara}>
            {para}
          </p>
        ))}
      </section>

      {/* Images */}
      <section className={styles.imagesSection}>
        {imagePaths.map((src, i) => (
          <div
            key={i}
            className={styles.imageWrapper}
            onClick={() => openLightbox(i)}
          >
            <Image
              src={src}
              alt={`${project.title} — image ${i + 1}`}
              {...imgDimensions}
              style={{ width: '100%', height: 'auto' }}
              className={styles.image}
            />
          </div>
        ))}
      </section>

      {/* Credits */}
      <section className={styles.credits}>
        <dl className={styles.creditsList}>
          {credits.fashionDesigner && (
            <div className={styles.creditRow}>
              <dt className={styles.creditLabel}>Fashion Designer</dt>
              <dd className={styles.creditValue}>— {credits.fashionDesigner}</dd>
            </div>
          )}
          {credits.collection && (
            <div className={styles.creditRow}>
              <dt className={styles.creditLabel}>Collection</dt>
              <dd className={styles.creditValue}>— {credits.collection}</dd>
            </div>
          )}
          {credits.brand && (
            <div className={styles.creditRow}>
              <dt className={styles.creditLabel}>Brand</dt>
              <dd className={styles.creditValue}>— {credits.brand}</dd>
            </div>
          )}
          {credits.creativeDirection && (
            <div className={styles.creditRow}>
              <dt className={styles.creditLabel}>Creative Direction</dt>
              <dd className={styles.creditValue}>— {credits.creativeDirection}</dd>
            </div>
          )}
          <div className={styles.creditRow}>
            <dt className={styles.creditLabel}>Photography</dt>
            <dd className={styles.creditValue}>— {credits.photography}</dd>
          </div>
          {credits.model && (
            <div className={styles.creditRow}>
              <dt className={styles.creditLabel}>Model</dt>
              <dd className={styles.creditValue}>— {credits.model}</dd>
            </div>
          )}
          {credits.cast && (
            <div className={styles.creditRow}>
              <dt className={styles.creditLabel}>Cast</dt>
              <dd className={styles.creditValue}>— {credits.cast}</dd>
            </div>
          )}
          {credits.wardrobe && (
            <div className={styles.creditRow}>
              <dt className={styles.creditLabel}>Wardrobe</dt>
              <dd className={styles.creditValue}>— {credits.wardrobe}</dd>
            </div>
          )}
          {credits.assistant && (
            <div className={styles.creditRow}>
              <dt className={styles.creditLabel}>Assistant</dt>
              <dd className={styles.creditValue}>— {credits.assistant}</dd>
            </div>
          )}
          <div className={styles.creditRow}>
            <dt className={styles.creditLabel}></dt>
            <dd className={styles.creditValue}>
              — {credits.location}, {credits.date}
            </dd>
          </div>
        </dl>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={imagePaths}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </div>
  );
}
