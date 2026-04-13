import styles from './page.module.css';

export const metadata = {
  title: 'Contact — Studio Reverii',
};

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Contact</h1>

      <p className={styles.intro}>
        Available for commissions in London and Shanghai.
      </p>

      <dl className={styles.links}>
        <div className={styles.linkRow}>
          <dt className={styles.linkLabel}>Mail</dt>
          <dd>
            <a
              href="mailto:studioreverii.co@gmail.com"
              className={styles.linkValue}
            >
              studioreverii.co@gmail.com
            </a>
          </dd>
        </div>
        <div className={styles.linkRow}>
          <dt className={styles.linkLabel}>WeChat</dt>
          <dd className={styles.linkValue}>studio_reverii</dd>
        </div>
        <div className={styles.linkRow}>
          <dt className={styles.linkLabel}>Rednote</dt>
          <dd className={styles.linkValue}>Studio Reverii</dd>
        </div>
        <div className={styles.linkRow}>
          <dt className={styles.linkLabel}>Weibo</dt>
          <dd className={styles.linkValue}>Studio Reverii</dd>
        </div>
        <div className={styles.linkRow}>
          <dt className={styles.linkLabel}>Instagram</dt>
          <dd className={styles.linkValue}>@studio.reverii</dd>
        </div>
      </dl>

      <p className={styles.tagline}>
        In the year 1850, Miss Dalia waited from summer until winter —
        with what hopes, and in what suspense, it is not easy to express.
      </p>
    </div>
  );
}
