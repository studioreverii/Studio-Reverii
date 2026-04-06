'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Contact</h1>

      {submitted ? (
        <div className={styles.confirmation}>
          <p className={styles.confirmationText}>
            Your message has arrived. We&apos;ll be in touch.
          </p>
        </div>
      ) : (
        <>
          <p className={styles.intro}>&ldquo;Tell us about your world.&rdquo;</p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.fieldGroup}>
              <label htmlFor="name" className={styles.label}>Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className={styles.input}
                autoComplete="name"
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className={styles.input}
                autoComplete="email"
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="projectType" className={styles.label}>Project Type</label>
              <select id="projectType" name="projectType" className={styles.select}>
                <option value="">Select a type</option>
                <option value="editorial">Editorial</option>
                <option value="brand-campaign">Brand Campaign</option>
                <option value="art-direction">Art Direction</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea
                id="message"
                name="message"
                required
                className={styles.textarea}
                rows={6}
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              Send &rarr;
            </button>
          </form>
        </>
      )}
    </div>
  );
}
