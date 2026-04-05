import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/components/Sidebar/Sidebar';
import Footer from '@/components/Footer/Footer';
import styles from './layout.module.css';

export const metadata: Metadata = {
  title: 'Studio Reverii',
  description: "We don't just take photos. We build worlds.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oxanium:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Sidebar />
        <div className={styles.mainWrapper}>
          <main className={styles.main}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
