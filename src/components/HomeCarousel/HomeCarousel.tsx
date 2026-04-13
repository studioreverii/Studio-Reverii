'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './HomeCarousel.module.css';

export interface CarouselItem {
  slug: string;
  src: string;
  title: string;
}

export default function HomeCarousel({ items }: { items: CarouselItem[] }) {
  const [current, setCurrent] = useState(0);
  const touchStart = useRef<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((i) => (i + 1) % items.length);
    }, 5000);
  }, [items.length]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  function goTo(index: number) {
    setCurrent(index);
    resetTimer();
  }

  function handleTouchStart(e: React.TouchEvent) {
    touchStart.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        goTo((current + 1) % items.length);
      } else {
        goTo((current - 1 + items.length) % items.length);
      }
    }
    touchStart.current = null;
  }

  return (
    <div
      className={styles.wrapper}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.decorativeMauve} />
      <div className={styles.decorativeTaupe} />

      <Link href={`/projects/${items[current].slug}`} className={styles.frame}>
        {items.map((item, i) => (
          <Image
            key={item.src}
            src={item.src}
            alt={item.title}
            fill
            sizes="(max-width: 599px) 100vw, (max-width: 899px) calc(100vw - 40px), 860px"
            priority={i === 0}
            className={`${styles.slide} ${i === current ? styles.slideVisible : styles.slideHidden}`}
          />
        ))}
      </Link>

      <div className={styles.footer}>
        <span className={styles.caption}>{items[current].title}</span>
        <div className={styles.dots}>
          {items.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Show ${items[i].title}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
