import Image from 'next/image';
import { projects } from '@/data/projects';
import styles from './page.module.css';

export const metadata = {
  title: 'Info — Studio Reverii',
};

export default function InfoPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>INFO</h1>

      <div className={styles.layout}>
        <div className={styles.textColumn}>
          <p className={styles.paragraph}>
            Studio Reverii is a creative studio built on the belief that photography is worldbuilding.
            Every project begins with a question: what world does this image belong to? We work backward
            from that question — sculpting atmosphere, narrative, and visual language before a single
            frame is captured.
          </p>
          <p className={styles.paragraph}>
            Our process is narrative-first. We collaborate closely with brands, artists, and individuals
            who understand that the best images are not taken — they are made. Every detail is intentional.
            Every shadow earns its place. We are not a production house; we are a world-building studio
            that happens to speak in photographs.
          </p>
          <p className={styles.paragraph}>
            Based between cities and light sources, Studio Reverii is led by Ki (creative direction)
            and Olivia (photography). We take on a limited number of projects each season to ensure
            the depth each world deserves.
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
          <div className={styles.imageWrapper}>
            <Image
              src={projects[0].coverImage}
              alt="Studio Reverii at work"
              width={380}
              height={500}
              className={styles.image}
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  );
}
