'use client';

import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { id as localeID } from 'date-fns/locale';
import { useAppContext } from '@/context/SearchContext';
import styles from './orders.module.css';

export default function OrdersPage() {
  const { orders, updateOrderStatus } = useAppContext();

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <Link href="/main/home">←</Link>
        <h1 className={styles.title}>Pesanan Saya</h1>
      </header>

      <main className={styles.content}>
        {orders.length === 0 ? (
          <p className={styles.emptyText}>Anda belum memiliki pesanan.</p>
        ) : (
          <div className={styles.orderList}>
            {orders.map((order) => (
              <div key={order.orderId} className={styles.orderCard}>
                <div className={styles.cardHeader}>
                  <span className={styles.orderId}>ID: {order.orderId}</span>
                  <span className={`${styles.status} ${styles[order.status.replace(/ /g, '')]}`}>
                    {order.status}
                  </span>
                </div>
                <div className={styles.cardBody}>
                  <Image src={order.kost.gambar} alt={order.kost.nama} width={60} height={60} className={styles.kostImage}/>
                  <div>
                    <h3 className={styles.kostName}>{order.kost.nama}</h3>
                    <p className={styles.checkinDate}>
                      Check-in: {format(order.checkinDate, 'd MMM yyyy', { locale: localeID })}
                    </p>
                  </div>
                </div>
                {order.status === 'Menunggu Pembayaran' && (
                  <div className={styles.cardActions}>
                    <button onClick={() => updateOrderStatus(order.orderId, 'Pesanan Dibatalkan')} className={styles.cancelButton}>
                      Batalkan
                    </button>
                    <button onClick={() => updateOrderStatus(order.orderId, 'Lunas')} className={styles.payButton}>
                      Bayar
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}