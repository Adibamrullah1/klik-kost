'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { id as localeID } from 'date-fns/locale';

import { kostData } from '@/lib/KostData';
import { useAppContext } from '@/context/SearchContext';
import styles from './booking.module.css'; // Import file CSS baru

export default function BookingPage() {
  const router = useRouter();
  const params = useParams();
  const { checkinDate, namaPenghuni, setNamaPenghuni, noTelepon, setNoTelepon } = useAppContext();

  const kostId = Number(params.id);
  const kost = kostData.find((item) => item.id === kostId);

  if (!kost) {
    return <p className="p-4 text-center">Kost tidak ditemukan.</p>;
  }

  const handleProceedToPayment = () => {
    if (!namaPenghuni || !noTelepon) {
      alert('Harap isi nama lengkap dan nomor telepon.');
      return;
    }
    router.push(`/main/payment/${kost.id}`);
  };

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <Link href={`/main/detail/${kost.id}`}>
          <Image
            src="https://api.iconify.design/solar/arrow-left-bold.svg?color=%231f2937"
            alt="Kembali"
            width={24}
            height={24}
          />
        </Link>
        <h1 className={styles.headerTitle}>Detail Pesanan</h1>
      </header>

      <main className={styles.content}>
        {/* Kartu Detail Kost */}
        <section className={styles.card}>
          <div className={styles.kostInfo}>
            <Image
              src={kost.gambar}
              alt={kost.nama}
              className={styles.kostImage}
              width={70}
              height={70}
            />
            <div>
              <h2 className={styles.kostName}>{kost.nama}</h2>
              <p className={styles.kostAddress}>{kost.alamat}</p>
            </div>
          </div>
          <div className={styles.checkinInfo}>
            <h3 className={styles.checkinLabel}>Tanggal Check-in</h3>
            <p className={styles.checkinDate}>
              {checkinDate
                ? format(checkinDate, 'eeee, d MMMM yyyy', { locale: localeID })
                : 'Pilih tanggal'}
            </p>
          </div>
        </section>

        {/* Kartu Data Penghuni */}
        <section className={styles.card}>
          <h2 className={styles.sectionTitle}>Data Penghuni</h2>
          <div className={styles.formGroup}>
            <label htmlFor="nama" className={styles.formLabel}>Nama Lengkap</label>
            <input
              type="text"
              id="nama"
              value={namaPenghuni}
              onChange={(e) => setNamaPenghuni(e.target.value)}
              className={styles.formInput}
              placeholder="Masukkan nama sesuai KTP"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="telepon" className={styles.formLabel}>Nomor Telepon</label>
            <input
              type="tel"
              id="telepon"
              value={noTelepon}
              onChange={(e) => setNoTelepon(e.target.value)}
              className={styles.formInput}
              placeholder="Contoh: 081234567890"
            />
          </div>
        </section>

        {/* Kartu Rincian Pembayaran */}
        <section className={styles.card}>
          <h2 className={styles.sectionTitle}>Rincian Pembayaran</h2>
          <div className={styles.paymentDetailRow}>
            <span>Biaya Sewa / Bulan</span>
            <span className="font-semibold">Rp {kost.hargaDiskon.toLocaleString('id-ID')}</span>
          </div>
        </section>
      </main>

      {/* Footer yang pasti terlihat */}
      <footer className={styles.footer}>
        <div className={styles.footerPriceRow}>
          <span className={styles.footerLabel}>Total Pembayaran</span>
          <span className={styles.footerPrice}>
            Rp {kost.hargaDiskon.toLocaleString('id-ID')}
          </span>
        </div>
        <button onClick={handleProceedToPayment} className={styles.confirmButton}>
          Lanjut ke Pembayaran
        </button>
      </footer>
    </div>
  );
}