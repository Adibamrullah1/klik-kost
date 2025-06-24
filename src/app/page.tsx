'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Image
        src="/image/awal.jpg" // Gambar dari /public/image
        alt="KlikKost Splash"
        fill
        priority
        style={{ objectFit: 'cover', zIndex: -1 }}
      />

      <div className={styles.overlay}>
        <h1 className={styles.logo}>KlikKost</h1>
        <p className={styles.tagline}>Cari Kost Tanpa Ribet, Temukan Nyamannya.</p>
        <Link href="/onboarding">
          <button className={styles.button}>Lanjut →</button>
        </Link>
      </div>
    </div>
  );
}
