'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import { kostData } from '@/lib/KostData';
import { useAppContext } from '@/context/SearchContext';
import styles from './payment.module.css';

const paymentMethods = [
  { id: 'bca_va', name: 'BCA Virtual Account', icon: 'https://api.iconify.design/logos/bca.svg' },
  { id: 'bni_va', name: 'BNI Virtual Account', icon: 'https://api.iconify.design/logos/bni.svg' },
  { id: 'gopay', name: 'GoPay', icon: 'https://api.iconify.design/logos/gopay.svg' },
  { id: 'dana', name: 'DANA', icon: 'https://api.iconify.design/logos/dana.svg' },
];

export default function PaymentPage() {
  const router = useRouter();
  const params = useParams();
  const { namaPenghuni, addOrder } = useAppContext();
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

  const kostId = Number(params.id);
  const kost = kostData.find((item) => item.id === kostId);

  if (!kost) {
    return <p className="p-4 text-center">Kost tidak ditemukan.</p>;
  }
  
  const handleCreateOrder = () => {
    if (!selectedPayment) {
      alert('Harap pilih metode pembayaran.');
      return;
    }
    addOrder(kost.id);
    alert(`Pesanan untuk ${kost.nama} sedang diproses. Silakan cek halaman Pesanan untuk statusnya.`);
    router.push('/main/orders');
  }

  return (
    <div className={styles.pageContainer}>
      <header className={styles.pageHeader}>
        <Link href={`/main/booking/${kost.id}`} className={styles.backButton}>←</Link>
        <h1 className={styles.pageTitle}>Metode Pembayaran</h1>
      </header>

      {/* BAGIAN INI KEMUNGKINAN BESAR HILANG DARI FILE ANDA */}
      <main className={styles.bookingContent}>
        <section className={styles.detailSection}>
          <h3>Ringkasan Pesanan</h3>
          <div className="bg-white p-4 rounded-lg border">
              <h2 className="font-bold text-gray-800">{kost.nama}</h2>
              <p className="text-sm text-gray-500">Pemesan: {namaPenghuni || 'Tamu'}</p>
              <p className="text-lg font-bold text-blue-600 mt-2">
                Total: Rp {kost.hargaDiskon.toLocaleString('id-ID')}
              </p>
          </div>
        </section>

        <section className={styles.detailSection}>
          <h3>Pilih Metode</h3>
          <div className={styles.paymentList}>
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className={`${styles.paymentMethod} ${selectedPayment === method.id ? styles.selected : ''}`}
                onClick={() => setSelectedPayment(method.id)}
              >
                <div className="flex items-center gap-4">
                  <Image src={method.icon} alt={method.name} width={40} height={25} />
                  <span className="font-semibold">{method.name}</span>
                </div>
                <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center">
                  {selectedPayment === method.id && <div className="w-3 h-3 rounded-full bg-blue-500"></div>}
                </div>
              </div>
            ))}
          </div>
        </section>

        <button onClick={handleCreateOrder} className={styles.bayarButton}>
            Buat Pesanan
        </button>
      </main>
      {/* --- BATAS BAGIAN YANG HILANG --- */}

    </div>
  );
}