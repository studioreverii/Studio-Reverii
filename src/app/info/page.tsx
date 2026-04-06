import Image from 'next/image';
import { projects, imgPath } from '@/data/projects';
import styles from './page.module.css';

export const metadata = {
  title: 'Info — Studio Reverii',
};

export default function InfoPage() {
  const featured = projects.find((p) => p.slug === 'bluebird') ?? projects[0];

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Info</h1>

      <div className={styles.layout}>
        <div className={styles.textColumn}>
          <p className={styles.paragraph}>
            Studio Reverii is a creative studio where photography and narrative meet.
            We don&apos;t document moments — we build worlds. Every project begins with
            a story, and every image is a scene within it.
          </p>
          <p className={styles.paragraph}>
            Based between London and Shanghai, we work across fashion editorial,
            brand campaigns, and art direction. Our process is narrative-first —
            sculpting atmosphere and visual language before a single frame is captured.
          </p>
          <p className={styles.paragraph}>
            Studio Reverii is led by Ki (creative direction) and Olivia (photography).
            We take on a limited number of projects each season to ensure the depth
            each world deserves.
          </p>

          <div className={styles.services}>
            <h2 className={styles.servicesTitle}>What we do</h2>
            <ul className={styles.servicesList}>
              <li>Editorial campaigns</li>
              <li>Brand storytelling</li>
              <li>Art direction &amp; concept development</li>
              <li>Lookbook &amp; collection photography</li>
              <li>Collaborative world-building projects</li>
            </ul>
          </div>
        </div>

        <div className={styles.imageColumn}>
          <Image
            src={imgPath(featured.slug, featured.coverImage)}
            alt="Studio Reverii at work"
            width={380}
            height={500}
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
}
