import ContactForm from './ContactForm';
import styles from './page.module.css';

export const metadata = {
  title: 'Contact — Studio Reverii',
};

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Contact</h1>

      <p className={styles.intro}>
        Available for commissions. Based in London and Shanghai.
      </p>

      <dl className={styles.links}>
        <div className={styles.linkRow}>
          <dt className={styles.linkLabel}>Mail</dt>
          <dd>
            <a href="mailto:studioreverii.co@gmail.com" className={styles.linkValue}>
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

      <div className={styles.formSection}>
        <p className={styles.formHeading}>Send a message</p>
        <ContactForm />
      </div>
    </div>
  );
}
