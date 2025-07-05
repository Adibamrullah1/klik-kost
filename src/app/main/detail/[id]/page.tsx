'use client';

import { kostData } from '@/lib/KostData';
import styles from './detail.module.css';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function DetailKostPage() {
  const params = useParams();
  const kostId = Number(params.id);
  const kost = kostData.find((item) => item.id === kostId);

  if (!kost) {
    return <p className="p-4 text-center">Kost tidak ditemukan.</p>;
  }

  // REVISI 1: URL Peta yang benar
  const mapSrc = `https://maps.google.com/maps?q=${kost.lat},${kost.lng}&z=15&output=embed`;

  return (
    <>
      <div className={styles.container}>
        {/* Header Statis di Atas */}
        <header className={styles.header}>
          <Link href="/main/search">
            <Image
              src="https://api.iconify.design/solar/arrow-left-bold.svg?color=%231f2937"
              alt="Kembali"
              width={24}
              height={24}
            />
          </Link>
          <h1 className={styles.title}>Detail Kost</h1>
        </header>

        {/* Konten Utama */}
        <main>
          <Image
            src={kost.gambar}
            alt={kost.nama}
            width={800}
            height={480}
            className={styles.heroImage}
            priority
          />
          <div className={styles.infoWrapper}>
            <h1 className={styles.kostName}>{kost.nama}</h1>
            <p className={styles.kostAddress}>{kost.alamat}</p>

            <h2 className={styles.sectionTitle}>Fasilitas</h2>
            <div className={styles.facilityGrid}>
              {kost.fasilitas.map((fasilitas, i) => (
                <p key={i}>{fasilitas}</p>
              ))}
            </div>

            <h2 className={styles.sectionTitle}>Deskripsi</h2>
            <p className={styles.description}>{kost.deskripsi}</p>

            <h2 className={styles.sectionTitle}>Lokasi</h2>
            <iframe
              title="Peta Lokasi Kost"
              src={mapSrc}
              className={styles.map}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </main>
      </div>
      
      {/* Footer yang posisinya sudah diperbaiki */}
      <footer className={styles.footer}>
        <div className={styles.priceContainer}>
          <span className={styles.priceText}>Rp {kost.hargaDiskon.toLocaleString('id-ID')}</span>
          <span className={styles.priceUnit}>/ bulan</span>
        </div>
        <Link href={`/main/booking/${kost.id}`} className={styles.button}>
          Pesan Sekarang
        </Link>
      </footer>
    </>
  );
}