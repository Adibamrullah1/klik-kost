'use client';

import React, { useState } from 'react';
import { kostData } from '@/lib/KostData';
import Image from 'next/image';
import Link from 'next/link';

export default function SearchPage() {
  const [query, setQuery] = useState('');

  const filteredKosts = kostData.filter((kost) =>
    kost.nama.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <Link href="/main/home" className="text-xl font-semibold">{`←`}</Link>
        <h1 className="text-xl font-bold">Hasil Pencarian</h1>
      </div>

      {/* Search Input */}
      <input
        type="text"
        placeholder="🔍 Cari di hasil ini..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 mb-4 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Daftar Kost */}
      <div className="space-y-4">
        {filteredKosts.map((kost) => (
          <Link
            key={kost.id}
            href={`/main/detail/${kost.id}`} // ✅ Revisi path ke halaman detail
            className="flex items-center gap-4 bg-gray-100 rounded-xl p-3 hover:shadow-md transition"
          >
            <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={kost.gambar}
                alt={kost.nama}
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-base font-bold">{kost.nama}</h3>
              <p className="text-sm text-gray-600">{kost.alamat}</p>
            </div>
          </Link>
        ))}
        {filteredKosts.length === 0 && (
          <p className="text-sm text-gray-500 text-center">Kost tidak ditemukan.</p>
        )}
      </div>
    </div>
  );
}
