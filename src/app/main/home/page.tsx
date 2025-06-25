// src/app/(main)/home/page.tsx
import React from 'react';
import Image from 'next/image';
import styles from './home.module.css';
import { HiOutlineHeart, HiOutlineBell, HiOutlineSearch } from "react-icons/hi";
import { FaStar } from "react-icons/fa";

// Data dummy untuk rekomendasi kost
const recommendations = [
  { id: 1, image: '/image/kost1.jpg', title: 'Kost dekat dengan Univ...', location: 'Randuagung', rating: '4,2/5', price: '1.000.000' },
  { id: 2, image: '/image/kost2.jpg', title: 'Kost Kartini den...', location: 'Kartini', rating: '9,5', price: '1.000.000' },
  { id: 3, image: '/image/kost1.jpg', title: 'Kost nyaman dan asri', location: 'Sumbersari', rating: '4,8/5', price: '1.200.000' },
];

const HomePage = () => {
  return (
    <div className={styles.pageContainer}>
      {/* --- Header --- */}
      <header className={styles.header}>
        <Image src="/image/avatar.png" alt="User Avatar" width={50} height={50} className={styles.avatar} />
        <div className={styles.headerText}>
          <h2>Hi, Sarifah Ayu</h2>
          <p>Mau Cari Kost-kostan?</p>
        </div>
        <div className={styles.headerIcons}>
          <HiOutlineHeart size={26} />
          <HiOutlineBell size={26} />
        </div>
      </header>

      {/* --- Search Bar --- */}
      <div className={styles.searchBar}>
        <HiOutlineSearch className={styles.searchIcon} />
        <input type="text" placeholder="Cari kost anda" />
      </div>

      {/* --- Category Filters --- */}
      <div className={styles.categoryContainer}>
        {/* Anda bisa membuat ini menjadi komponen terpisah nanti */}
        <div className={styles.categoryCard}><span>💲</span><p>Termurah</p></div>
        <div className={styles.categoryCard}><span>📅</span><p>Tahunan</p></div>
        <div className={styles.categoryCard}><span>🗓️</span><p>Bulanan</p></div>
        <div className={styles.categoryCard}><span>✨</span><p>Terbersih</p></div>
      </div>

      {/* --- Riwayat Pemesanan --- */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Riwayat Pemesanan</h3>
        <div className={styles.historyCard}>
          <Image src="/image/kost-history.jpg" alt="Kost Aisyah" width={80} height={80} className={styles.historyImage} />
          <div className={styles.historyDetails}>
            <h4>Kost Aisyah Palembang</h4>
            <p>🗓️ 1 Januari 2022 - 1 Januari 2023</p>
            <p>📍 Palembang, Sumatra Selatan</p>
          </div>
        </div>
      </section>

      {/* --- Rekomendasi Terbaik --- */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Rekomendasi Terbaik</h3>
        <div className={styles.recommendationScroll}>
          {recommendations.map(kost => (
            <div key={kost.id} className={styles.recomCard}>
              <Image src={kost.image} alt={kost.title} width={150} height={100} className={styles.recomImage} />
              <div className={styles.recomDetails}>
                <h4>{kost.title}</h4>
                <p className={styles.location}>{kost.location}</p>
                <div className={styles.rating}>
                  <FaStar color="#FFD700" />
                  <span>{kost.rating} (reviewers)</span>
                </div>
                <p className={styles.price}>Rp {kost.price}</p>
              </div>
              <HiOutlineHeart className={styles.recomHeart} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;