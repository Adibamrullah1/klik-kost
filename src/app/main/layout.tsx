// src/app/(main)/layout.tsx
import React from 'react';
import Link from 'next/link';
import styles from './layout.module.css';
import { HiOutlineHome, HiOutlineChatBubbleLeftEllipsis, HiOutlineClock, HiOutlineUser } from "react-icons/hi2";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.layoutContainer}>
      {/* Konten halaman akan dirender di sini */}
      <main className={styles.mainContent}>
        {children}
      </main>

      {/* Bottom Navigation Bar */}
      <nav className={styles.bottomNav}>
        <Link href="/home" className={`${styles.navItem} ${styles.active}`}>
          <HiOutlineHome size={28} />
        </Link>
        <Link href="#" className={styles.navItem}>
          <HiOutlineChatBubbleLeftEllipsis size={28} />
        </Link>
        <Link href="#" className={styles.navItem}>
          <HiOutlineClock size={28} />
        </Link>
        <Link href="#" className={styles.navItem}>
          <HiOutlineUser size={28} />
        </Link>
      </nav>
    </div>
  );
}