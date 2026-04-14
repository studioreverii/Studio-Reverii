'use client';

import { useState } from 'react';
import styles from './page.module.css';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const data = {
      access_key: 'c983bbe7-eeab-49d9-b6fa-8aa7e8a91c70',
      subject: 'New enquiry — Studio Reverii website',
      from_name: 'Studio Reverii Website',
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <p className={styles.confirmation}>
        Your message has arrived. We&apos;ll be in touch.
      </p>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.fieldGroup}>
        <label htmlFor="name" className={styles.label}>Name</label>
        <input id="name" name="name" type="text" required className={styles.input} />
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="email" className={styles.label}>Email</label>
        <input id="email" name="email" type="email" required className={styles.input} />
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="message" className={styles.label}>Message</label>
        <textarea id="message" name="message" required rows={5} className={styles.textarea} />
      </div>

      {status === 'error' && (
        <p className={styles.errorMsg}>Something went wrong. Please email us directly.</p>
      )}

      <button type="submit" className={styles.submitBtn} disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending…' : 'Send →'}
      </button>
    </form>
  );
}
