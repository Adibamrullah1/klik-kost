"use client";

import React from 'react';
import styles from './history.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineCalendar, HiOutlineReceiptPercent, HiOutlineNoSymbol } from 'react-icons/hi2';

// Data dummy untuk simulasi riwayat
const historyData = [
  {
    id: 1,
    namaKost: 'Kost GKB Millennial',
    gambar: 'https://images.unsplash.com/photo-1594495894542-a4613234502c?w=500',
    tanggal: '1 Juni 2025 - 30 Juni 2025',
    status: 'Selesai',
    icon: <HiOutlineReceiptPercent className={styles.iconSelesai} />
  },
  {
    id: 2,
    namaKost: 'Kost Pondok Permata Suci',
    gambar: 'https://images.unsplash.com/photo-1585672763385-2a43160d2e3f?w=500',
    tanggal: 'Pemesanan 15 Mei 2025',
    status: 'Dibatalkan',
    icon: <HiOutlineNoSymbol className={styles.iconBatal} />
  },
];

export default function HistoryPage() {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1>Riwayat Aktivitas</h1>
        <p>Semua transaksi dan aktivitas Anda yang telah selesai.</p>
      </header>

      {historyData.length > 0 ? (
        <div className={styles.historyList}>
          {historyData.map((item) => (
            <div key={item.id} className={styles.historyCard}>
              <div className={styles.statusIcon}>
                {item.icon}
              </div>
              <div className={styles.historyDetails}>
                <h3 className={styles.kostName}>{item.namaKost}</h3>
                <div className={styles.infoLine}>
                  <HiOutlineCalendar />
                  <span>{item.tanggal}</span>
                </div>
                <span className={`${styles.statusLabel} ${item.status === 'Selesai' ? styles.statusSelesai : styles.statusBatal}`}>
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <h2>Riwayat Anda masih kosong.</h2>
          <p>Aktivitas seperti pemesanan yang selesai atau dibatalkan akan muncul di sini.</p>
          <Link href="/" className={styles.emptyStateButton}>
            Kembali ke Beranda
          </Link>
        </div>
      )}
    </div>
  );
}