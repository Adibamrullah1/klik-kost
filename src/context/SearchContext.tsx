// contexts/SearchContext.tsx (REVISI BESAR)
'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Kost, kostData } from '@/lib/KostData';

// Tipe data baru untuk Status dan Pesanan
export type OrderStatus = 'Lunas' | 'Menunggu Pembayaran' | 'Pesanan Dibatalkan';

export interface Order {
  orderId: string;
  kost: Kost;
  namaPenghuni: string;
  noTelepon: string;
  checkinDate: Date;
  status: OrderStatus;
}

// Tipe data untuk state kita
interface AppContextType {
  destination: string;
  setDestination: (dest: string) => void;
  checkinDate: Date | undefined;
  setCheckinDate: (date: Date | undefined) => void;
  namaPenghuni: string;
  setNamaPenghuni: (name: string) => void;
  noTelepon: string;
  setNoTelepon: (phone: string) => void;
  // TAMBAHAN: State dan fungsi untuk pesanan
  orders: Order[];
  addOrder: (kostId: number) => void;
  updateOrderStatus: (orderId: string, status: OrderStatus) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Ganti nama SearchProvider menjadi AppProvider
export function AppProvider({ children }: { children: ReactNode }) {
  const [destination, setDestination] = useState('Gresik, Jawa Timur');
  const [checkinDate, setCheckinDate] = useState<Date | undefined>(new Date());
  const [namaPenghuni, setNamaPenghuni] = useState('');
  const [noTelepon, setNoTelepon] = useState('');
  const [orders, setOrders] = useState<Order[]>([]);

  // Fungsi untuk menambah pesanan baru
  const addOrder = (kostId: number) => {
    const kost = kostData.find(k => k.id === kostId);
    if (!kost || !checkinDate) return;

    const newOrder: Order = {
      orderId: `KLIK-${Date.now()}`, // ID unik sederhana
      kost: kost,
      namaPenghuni: namaPenghuni,
      noTelepon: noTelepon,
      checkinDate: checkinDate,
      status: 'Menunggu Pembayaran',
    };
    setOrders(prevOrders => [newOrder, ...prevOrders]);
  };

  // Fungsi untuk update status
  const updateOrderStatus = (orderId: string, status: OrderStatus) => {
    setOrders(prevOrders => 
      prevOrders.map(order => 
        order.orderId === orderId ? { ...order, status: status } : order
      )
    );
  };

  const value = {
    destination, setDestination,
    checkinDate, setCheckinDate,
    namaPenghuni, setNamaPenghuni,
    noTelepon, setNoTelepon,
    orders, addOrder, updateOrderStatus,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

// Ganti nama hook menjadi useAppContext
export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}