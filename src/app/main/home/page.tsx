// src/app/(main)/home/page.tsx

"use client"; // Pastikan ini adalah client component

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Untuk redirect
import styles from './home.module.css';
import { HiOutlineHeart, HiOutlineBell, HiOutlineSearch } from "react-icons/hi";
import { FaStar } from "react-icons/fa";

// 1. Impor useAuth dan useEffect
import { useAuth } from '@/context/AuthContext';
import { useEffect } from 'react';

// Data dummy (bisa Anda pindahkan ke file lain nanti)
const recommendations = [
    { id: 1, image: '/image/kost1.jpg', title: 'Kost dekat dengan Univ...', location: 'Randuagung', rating: '4,2/5', price: '1.000.000' },
    { id: 2, image: '/image/kost2.jpg', title: 'Kost Kartini den...', location: 'Kartini', rating: '9,5', price: '1.000.000' },
    { id: 3, image: '/image/kost1.jpg', title: 'Kost nyaman dan asri', location: 'Sumbersari', rating: '4,8/5', price: '1.200.000' },
];

const HomePage = () => {
  // 2. Dapatkan data pengguna dan status loading dari context
  const { user, loading } = useAuth();
  const router = useRouter();

  // 3. Lindungi halaman: Jika loading selesai dan tidak ada user, redirect ke login
  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  // 4. Tampilkan pesan loading atau halaman kosong jika belum siap
  if (loading || !user) {
    return <div>Loading...</div>; // Atau tampilkan komponen skeleton/spinner
  }

  // Jika sudah siap, tampilkan halaman Home
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <Image src={user.photoURL || "/image/karakter.png"} alt="User Avatar" width={50} height={50} className={styles.avatar} />
        <div className={styles.headerText}>
          {/* 5. Tampilkan nama pengguna secara dinamis */}
          <h2>Hi, {user.displayName || 'Pengguna Baru'}</h2>
          <p>Mau Cari Kost-kostan?</p>
        </div>
        <div className={styles.headerIcons}>
          <HiOutlineHeart size={26} />
          <HiOutlineBell size={26} />
        </div>
      </header>

      {/* Sisa dari konten halaman Anda... */}
      <div className={styles.searchBar}>
        <HiOutlineSearch className={styles.searchIcon} />
        <input type="text" placeholder="Cari kost anda" />
      </div>
      
      {/* ... dan seterusnya ... */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Rekomendasi Terbaik</h3>
        <div className={styles.recommendationScroll}>
          {recommendations.map(kost => (
            <div key={kost.id} className={styles.recomCard}>
                <Image src={kost.image} alt={kost.title} width={150} height={100} className={styles.recomImage} />
                <div className={styles.recomDetails}>
                    <h4>{kost.title}</h4>
                    <span className={styles.location}>{kost.location}</span>
                    <div className={styles.rating}>
                        <FaStar color="#FFD700" />
                        <span>{kost.rating} (reviewers)</span>
                    </div>
                    <span className={styles.price}>Rp {kost.price}</span>
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
