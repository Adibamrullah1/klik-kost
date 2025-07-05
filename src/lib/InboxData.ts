// src/lib/InboxData.ts

export interface InboxMessage {
  id: number;
  senderName: string;
  avatarUrl: string;
  kostName: string;
  messagePreview: string;
  timestamp: string;
  unreadCount: number;
}

export const inboxData: InboxMessage[] = [
  {
    id: 1,
    senderName: 'Bapak Agung',
    avatarUrl: 'https://i.pravatar.cc/150?u=agung',
    kostName: 'Kost GKB Millennial',
    messagePreview: 'Baik, kamarnya saya siapkan. Ditunggu kedatangannya ya...',
    timestamp: '10:30',
    unreadCount: 0,
  },
  {
    id: 2,
    senderName: 'Ibu Susi',
    avatarUrl: 'https://i.pravatar.cc/150?u=susi',
    kostName: 'The Randuagung Suite',
    messagePreview: 'Halo, apakah masih ada kamar yang tersedia untuk bulan depan?',
    timestamp: 'Kemarin',
    unreadCount: 2,
  },
  {
    id: 3,
    senderName: 'Admin KlikKost',
    avatarUrl: 'https://api.iconify.design/solar/shield-user-bold-duotone.svg',
    kostName: 'Verifikasi Akun',
    messagePreview: 'Selamat! Akun Anda telah berhasil diverifikasi oleh tim kami.',
    timestamp: '29 Jun',
    unreadCount: 0,
  },
];