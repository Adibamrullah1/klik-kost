"use client";

import { useState, useEffect, useRef } from 'react';
import { notificationsData } from '@/lib/notification'; // Pastikan path ini sesuai dengan struktur proyek Anda
import styles from './LayoutHeader.module.css';

export default function Header() {
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const notifRef = useRef<HTMLDivElement>(null);

  // Logika untuk menutup notifikasi saat klik di luar area panel
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setIsNotifOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [notifRef]);

  return (
    <header className={styles.heroHeader}>
      <div className={styles.topBar}>
        <span className={styles.logo}>KlikKost</span>
        <div className={styles.notificationWrapper} ref={notifRef}>
          <img
            src="https://api.iconify.design/solar/bell-bold.svg?color=white"
            className={styles.notificationIcon}
            alt="Notifikasi"
            onClick={() => setIsNotifOpen(prev => !prev)}
          />
          {isNotifOpen && (
            <div className={styles.notificationPanel}>
              <div className={styles.notificationHeader}>Notifikasi</div>
              <ul className={styles.notificationList}>
                {notificationsData.length > 0 ? (
                  notificationsData.map((n, index) => (
                    <li className={styles.notificationItem} key={index}>
                      <strong>{n.title}</strong>
                      <p>{n.desc}</p>
                    </li>
                  ))
                ) : (
                  <li className={styles.notificationItem}>Tidak ada notifikasi</li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}