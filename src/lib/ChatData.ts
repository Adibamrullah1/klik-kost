// src/lib/ChatData.ts

import { inboxData, InboxMessage } from './InboxData';

export interface Message {
  id: number;
  text: string;
  sender: 'me' | 'other'; // 'me' untuk kita, 'other' untuk lawan bicara
  timestamp: string;
}

export interface ChatThread {
  participants: {
    me: { name: string };
    other: { name: string; avatarUrl: string };
  };
  messages: Message[];
}

// Objek yang berisi semua data chat, dengan key adalah ID dari inboxData
export const chatData: Record<string, ChatThread> = {
  '1': {
    participants: {
      me: { name: 'Anda' },
      other: { name: 'Bapak Agung', avatarUrl: 'https://i.pravatar.cc/150?u=agung' },
    },
    messages: [
      { id: 1, text: 'Selamat siang, Pak. Apakah kost masih tersedia?', sender: 'me', timestamp: '10:25' },
      { id: 2, text: 'Siang. Masih ada satu kamar kosong, Mas.', sender: 'other', timestamp: '10:27' },
      { id: 3, text: 'Baik, kamarnya saya siapkan. Ditunggu kedatangannya ya...', sender: 'other', timestamp: '10:30' },
    ],
  },
  '2': {
    participants: {
      me: { name: 'Anda' },
      other: { name: 'Ibu Susi', avatarUrl: 'https://i.pravatar.cc/150?u=susi' },
    },
    messages: [
      { id: 1, text: 'Halo, apakah masih ada kamar yang tersedia untuk bulan depan?', sender: 'me', timestamp: 'Kemarin' },
    ],
  },
  '3': {
    participants: {
      me: { name: 'Anda' },
      other: { name: 'Admin KlikKost', avatarUrl: 'https://api.iconify.design/solar/shield-user-bold-duotone.svg' },
    },
    messages: [
      { id: 1, text: 'Selamat! Akun Anda telah berhasil diverifikasi oleh tim kami.', sender: 'other', timestamp: '29 Jun' },
    ],
  },
};