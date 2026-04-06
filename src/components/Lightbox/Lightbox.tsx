'use client';

import { useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './Lightbox.module.css';

interface LightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  const src = images[currentIndex];

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.controls}>
        <a
          href={`${BASE_PATH}${src}`}
          download
          className={styles.controlBtn}
          onClick={(e) => e.stopPropagation()}
        >
          ↓
        </a>
        <button className={styles.controlBtn} onClick={onClose}>
          ✕
        </button>
      </div>

      <button
        className={`${styles.navBtn} ${styles.prev}`}
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous image"
      >
        ←
      </button>

      <div
        className={styles.imageContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={`Image ${currentIndex + 1}`}
          fill
          style={{ objectFit: 'contain' }}
          className={styles.image}
        />
      </div>

      <button
        className={`${styles.navBtn} ${styles.next}`}
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next image"
      >
        →
      </button>
    </div>
  );
}
