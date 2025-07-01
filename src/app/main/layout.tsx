// src/app/(main)/layout.tsx

"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './layout.module.css';
import { HiOutlineHome, HiOutlineChatBubbleLeftEllipsis, HiOutlineClock, HiOutlineUser } from "react-icons/hi2";

// 1. Impor AuthProvider
import { AuthProvider } from '@/context/AuthContext';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    // 2. Bungkus semua konten dengan AuthProvider
    <AuthProvider>
      <div className={styles.layoutContainer}>
        <main className={styles.mainContent}>
          {children}
        </main>

        <nav className={styles.bottomNav}>
          <Link href="/home" className={`${styles.navItem} ${pathname === '/home' ? styles.active : ''}`}>
            <HiOutlineHome size={28} />
          </Link>
          <Link href="/messages" className={`${styles.navItem} ${pathname === '/messages' ? styles.active : ''}`}>
            <HiOutlineChatBubbleLeftEllipsis size={28} />
          </Link>
          <Link href="/history" className={`${styles.navItem} ${pathname === '/history' ? styles.active : ''}`}>
            <HiOutlineClock size={28} />
          </Link>
          <Link href="/profile" className={`${styles.navItem} ${pathname === '/profile' ? styles.active : ''}`}>
            <HiOutlineUser size={28} />
          </Link>
        </nav>
      </div>
    </AuthProvider>
  );
}
