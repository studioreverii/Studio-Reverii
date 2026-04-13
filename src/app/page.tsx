import { projects, imgPath } from '@/data/projects';
import HomeCarousel from '@/components/HomeCarousel/HomeCarousel';
import styles from './page.module.css';

export default function Home() {
  const sorted = [...projects].sort((a, b) => a.order - b.order);

  const carouselItems = sorted.map((p) => ({
    slug: p.slug,
    src: imgPath(p.slug, p.coverImage),
    title: p.title,
  }));

  return (
    <div className={styles.page}>
      <h1 className={styles.heroWordmark}>Studio Reverii.</h1>

      <HomeCarousel items={carouselItems} />

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
    </div>
  );
}
