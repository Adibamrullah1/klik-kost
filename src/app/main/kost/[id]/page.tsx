"use client";

import { useRouter, notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./detail.module.css";
import { kostData } from "@/lib/KostData";

export default function DetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const kostId = parseInt(params.id, 10);
  const kost = kostData.find((k) => k.id === kostId);

  if (!kost) {
    notFound();
  }

  const formatHarga = (harga: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(harga);

  return (
    <div className={styles.pageContainer}>
      <header className={styles.pageHeader}>
        <Link href="/home" className={styles.backButton}>
          ←
        </Link>
        <h2 className={styles.pageTitle}>Detail Kost</h2>
      </header>

      <img src={kost.gambar} alt={kost.nama} className={styles.detailImage} />

      <div className={styles.detailContent}>
        <h2 className={styles.detailTitle}>{kost.nama}</h2>
        <p className={styles.detailAddress}>{kost.alamat}</p>

        <div className={styles.detailSection}>
          <h3>Fasilitas</h3>
          <div className={styles.fasilitasGrid}>
            {kost.fasilitas.map((f, idx) => (
              <div key={idx} className={styles.fasilitasItem}>
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.detailSection}>
          <h3>Deskripsi</h3>
          <p>{kost.deskripsi}</p>
        </div>

        <div className={styles.detailSection}>
          <h3>Lokasi</h3>
          <div className={styles.mapContainer}>
            <iframe
              src={`https://maps.google.com/maps?q=${kost.lat},${kost.lng}&hl=es;z=14&output=embed`}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <div className={styles.bookingBar}>
        <div className={styles.bookingPrice}>
          <span className={styles.price}>{formatHarga(kost.hargaDiskon)}</span>
          <span className={styles.perMonth}>/ bulan</span>
        </div>
        <button
          className={styles.pesanButton}
          onClick={() => router.push(`/main/booking/${kost.id}`)}
        >
          Pesan Sekarang
        </button>
      </div>
    </div>
  );
}
