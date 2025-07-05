// src/app/main/home/page.tsx (REVISI)

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

// Import yang diperlukan
import { kostData } from '@/lib/KostData';
import AdsSlider from '@/components/AdsSlider';
import KostCard from '@/components/KostCard';
import Header from '@/components/layout/LayoutHeader';
import styles from './home.module.css';
import { useAppContext } from '@/context/SearchContext';
import DestinationModal from '@/components/DestinationModal';
import DatePickerModal from '@/components/DatePickerModal';

export default function HomePage() {
  const [isDestinationModalOpen, setDestinationModalOpen] = useState(false);
  const [isDateModalOpen, setDateModalOpen] = useState(false);
  const { destination, checkinDate } = useAppContext();

  const formattedCheckinDate = checkinDate
    ? format(checkinDate, 'd MMMM yyyy', { locale: id })
    : 'Pilih Tanggal';

  return (
    <>
      <Header />
      <div className={styles.searchPanel}>
        <button onClick={() => setDestinationModalOpen(true)} className={`${styles.searchField} w-full text-left`}>
          <Image src="https://api.iconify.design/solar/map-point-wave-bold-duotone.svg?color=%236b7388" alt="Destinasi" width={24} height={24} />
          <div className={styles.searchFieldInput}>
            <label>Destinasi</label>
            <span>{destination}</span>
          </div>
        </button>
        <button onClick={() => setDateModalOpen(true)} className={`${styles.searchField} w-full text-left`}>
          <Image src="https://api.iconify.design/solar/calendar-bold-duotone.svg?color=%236b7388" alt="Check-in" width={24} height={24} />
          <div className={styles.searchFieldInput}>
            <label>Check-in</label>
            <span>Hari ini, {formattedCheckinDate}</span>
          </div>
        </button>
        <Link href="/main/search" className={styles.searchButton}>
          Cari Kost
        </Link>
      </div>
      <section className={styles.quickMenu}>
        {[
          { href: '/main/search?type=Putra', icon: 'bed-bold-duotone', label: 'Putra' },
          { href: '/main/search?type=Putri', icon: 'sleeping-bold-duotone', label: 'Putri' },
          { href: '/main/search?fasilitas=AC', icon: 'snowflake-bold-duotone', label: 'Kost AC' },
          { href: '/main/map', icon: 'map-bold-duotone', label: 'Lihat Peta' },
        ].map(({ href, icon, label }) => (
          <Link href={href} key={label} className={styles.menuItem}>
            <div className={styles.menuItemIcon}>
              <Image src={`https://api.iconify.design/solar/${icon}.svg?color=%235392f9`} alt={label} width={24} height={24} />
            </div>
            <span>{label}</span>
          </Link>
        ))}
      </section>

      <AdsSlider />

      {/* --- REVISI UTAMA DI SINI --- */}
      {kostData.length > 0 && (
        <section className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>Penawaran Populer</h2>
          <div className={styles.kostSlider}>
            {kostData.map((kost) => (
              // 1. Tambahkan Link yang membungkus KostCard
              // 2. Arahkan href ke halaman detail dengan id kost yang sesuai
              // 3. Pindahkan 'key' ke komponen terluar (Link)
              <Link href={`/main/detail/${kost.id}`} key={kost.id} className={styles.kostCardLink}>
                <KostCard kost={kost} />
              </Link>
            ))}
          </div>
        </section>
      )}
      {/* --- AKHIR DARI REVISI --- */}

      <DestinationModal isOpen={isDestinationModalOpen} onClose={() => setDestinationModalOpen(false)} />
      <DatePickerModal isOpen={isDateModalOpen} onClose={() => setDateModalOpen(false)} />
    </>
  );
}