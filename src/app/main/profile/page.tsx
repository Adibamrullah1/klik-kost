// src/app/(main)/profile/page.tsx (REVISI FINAL)

"use client";

import React from 'react';
import styles from './profile.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { 
  HiOutlineUser, 
  HiOutlineCog6Tooth, 
  HiOutlineQuestionMarkCircle, 
  HiOutlineArrowLeftOnRectangle,
  HiOutlineChevronRight
} from 'react-icons/hi2';

export default function ProfilePage() {
  const { user, logout } = useAuth();

  const menuItems = [
    { label: 'Ubah Profil', icon: HiOutlineUser, href: '/profile/edit' },
    { label: 'Pengaturan', icon: HiOutlineCog6Tooth, href: '/settings' },
    { label: 'Pusat Bantuan', icon: HiOutlineQuestionMarkCircle, href: '/help' },
  ];

  if (!user) {
    return (
      <div className={styles.pageContainer}>
        <p>Memuat data pengguna...</p>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <header className={styles.profileHeader}>
        {/* REVISI 1: Ganti 'user.avatar' menjadi 'user.photoURL' */}
        <Image 
          src={user.photoURL || '/default-avatar.png'} // Fallback ke avatar default
          alt="Avatar" 
          width={80} 
          height={80} 
          className={styles.avatar} 
        />
        {/* REVISI 2: Ganti 'user.name' menjadi 'user.displayName' */}
        <h1 className={styles.userName}>{user.displayName || 'Nama Pengguna'}</h1>
        <p className={styles.userEmail}>{user.email}</p>
      </header>

      <section className={styles.menuSection}>
        {menuItems.map((item) => (
          <Link href={item.href} key={item.label} className={styles.menuItem}>
            <item.icon className={styles.menuIcon} />
            <span className={styles.menuLabel}>{item.label}</span>
            <HiOutlineChevronRight className={styles.chevronIcon} />
          </Link>
        ))}
      </section>

      <section className={styles.menuSection}>
        <button onClick={logout} className={`${styles.menuItem} ${styles.logoutButton}`}>
          <HiOutlineArrowLeftOnRectangle className={styles.menuIcon} />
          <span className={styles.menuLabel}>Logout</span>
        </button>
      </section>
    </div>
  );
}