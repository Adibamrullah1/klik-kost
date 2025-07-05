'use client';

import React, { useEffect, useState } from 'react';

const adsData = [
  {
    class: 'promo-1',
    title: 'Cari Kost di Surabaya?',
    content: 'Ribuan pilihan kost dekat kampus & kantor menantimu.',
    button: 'Cari Sekarang',
  },
  {
    class: 'promo-2',
    title: 'Kost Eksklusif Pusat Kota!',
    content: 'Nikmati kenyamanan premium dengan fasilitas bintang 5.',
    button: 'Lihat Detail',
  },
  {
    class: 'promo-3',
    title: 'Diskon 20% Penghuni Baru',
    content: 'Pesan kost pertamamu sekarang dan dapatkan diskon!',
    button: 'Klaim Diskon',
  },
];

export default function AdsSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % adsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-5 mb-5 overflow-hidden rounded-xl relative">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {adsData.concat(adsData).map((ad, i) => (
          <div
            key={i}
            className={`flex-none w-full p-5 min-h-[150px] rounded-xl text-white ${
              ad.class === 'promo-1'
                ? 'bg-gradient-to-br from-indigo-400 to-purple-600'
                : ad.class === 'promo-2'
                ? 'bg-gradient-to-br from-pink-400 to-red-400'
                : 'bg-gradient-to-br from-green-300 to-blue-400'
            }`}
          >
            <h3 className="text-lg font-bold mb-1">{ad.title}</h3>
            <p className="text-sm mb-3">{ad.content}</p>
            <button className="bg-white text-gray-800 px-3 py-1 rounded-md text-sm font-semibold">
              {ad.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
