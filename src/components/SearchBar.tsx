'use client';

import React from 'react';

export default function SearchBar() {
  const today = new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="bg-white rounded-xl shadow-md p-5 mx-5 relative -mt-12 z-10">
      <div className="flex items-center gap-3 border-b pb-3 mb-3">
        <img
          src="https://api.iconify.design/solar/map-point-wave-bold-duotone.svg?color=%236b7388"
          className="w-6 h-6"
        />
        <div>
          <label className="text-xs text-gray-500">Destinasi</label>
          <div className="font-semibold text-sm">Gresik, Jawa Timur</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <img
          src="https://api.iconify.design/solar/calendar-bold-duotone.svg?color=%236b7388"
          className="w-6 h-6"
        />
        <div>
          <label className="text-xs text-gray-500">Check-in</label>
          <div className="font-semibold text-sm">{`Hari ini, ${today}`}</div>
        </div>
      </div>
      <button className="w-full bg-pink-500 text-white py-3 rounded-lg font-bold text-sm mt-5">
        Cari Kost
      </button>
    </div>
  );
}
