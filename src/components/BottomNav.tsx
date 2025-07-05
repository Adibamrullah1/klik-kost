'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/main/home', label: 'Beranda', icon: 'solar/home-smile-bold', activeColor: '#5392f9' },
  { href: '/main/orders', label: 'Pesanan', icon: 'solar/bookmark-square-outline', activeColor: '#6b7388' },
  { href: '/main/inbox', label: 'Inbox', icon: 'solar/chat-dots-outline', activeColor: '#6b7388' },
  { href: '/main/profile', label: 'Profil', icon: 'solar/user-circle-outline', activeColor: '#6b7388' },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white flex justify-around border-t border-gray-200 py-2 z-40">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center gap-1 text-xs ${
              isActive ? 'text-blue-500 font-semibold' : 'text-gray-500'
            }`}
          >
            <img
              src={`https://api.iconify.design/${item.icon}.svg?color=${encodeURIComponent(
                isActive ? item.activeColor : '#6b7388'
              )}`}
              alt={item.label}
              className="w-6 h-6"
            />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
