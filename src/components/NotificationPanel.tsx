'use client';

import React, { useState, useRef, useEffect } from 'react';

const notificationData = [
  { title: 'Promo Spesial Untukmu!', desc: 'Diskon 25% di kost area GKB.' },
  { title: 'Pemesanan Berhasil', desc: 'Kost GKB Millennial telah dikonfirmasi.' },
];

export default function NotificationPanel() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const togglePanel = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpen(!open);
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) {
      window.addEventListener('click', handleOutsideClick);
    }
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [open]);

  return (
    <div className="relative">
      <img
        src="https://api.iconify.design/solar/bell-bold.svg?color=white"
        className="w-7 h-7 cursor-pointer"
        onClick={togglePanel}
      />
      {open && (
        <div
          className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-lg border border-gray-200 z-50"
          ref={panelRef}
        >
          <div className="px-4 py-3 font-semibold border-b text-gray-800">
            Notifikasi
          </div>
          <ul className="max-h-72 overflow-y-auto">
            {notificationData.map((n, i) => (
              <li key={i} className="px-4 py-3 border-b text-sm">
                <strong>{n.title}</strong>
                <p className="text-gray-500 text-xs mt-1">{n.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
