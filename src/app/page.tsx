
import Image from 'next/image';
import Link from 'next/link';
import styles from './layout.module.css'; // Ganti dengan nama file CSS yang sesuai

export default function Home() {
  return (
    // Container utama tetap sama
    <div className={styles.container}>
      <Image
        src="/image/awal.jpg"
        alt="KlikKost Splash"
        fill
        priority
        style={{ objectFit: 'cover', zIndex: -1 }}
      />

      {/* 1. Ganti <div className={styles.overlay}> menjadi <Link>.
        2. Beri className baru agar bisa kita styling.
        3. Hapus <button> sepenuhnya.
      */}
      <Link href="/onboarding" className={styles.clickableOverlay}>
        <h1 className={styles.logo}>KlikKost</h1>
        <p className={styles.tagline}>Cari Kost Tanpa Ribet, Temukan Nyamannya.</p>
      </Link>
    </div>
  );
}