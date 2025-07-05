'use client';

import React from 'react';
import { Kost } from '@/lib/KostData';
import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaRegSnowflake, FaWifi, FaBath } from 'react-icons/fa';

type Props = {
  kost: Kost;
};

export default function SearchResultCard({ kost }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col sm:flex-row gap-4 hover:shadow-lg transition">
      {/* Gambar Kost */}
      <div className="w-full sm:w-40 h-40 relative flex-shrink-0 rounded-lg overflow-hidden">
        <Image
          src={kost.gambar}
          alt={kost.nama}
          fill
          className="object-cover"
        />
      </div>

      {/* Detail Kost */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{kost.nama}</h2>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <FaMapMarkerAlt className="mr-1" />
            {kost.alamat}
          </div>

          <div className="flex flex-wrap gap-2 mt-3 text-xs text-gray-600">
            {kost.fasilitas.includes('AC') && (
              <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
                <FaRegSnowflake />
                <span>AC</span>
              </div>
            )}
            {kost.fasilitas.includes('Wi-Fi') && (
              <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
                <FaWifi />
                <span>Wi-Fi</span>
              </div>
            )}
            {kost.fasilitas.includes('K. Mandi Dalam') && (
              <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
                <FaBath />
                <span>K. Mandi Dalam</span>
              </div>
            )}
          </div>
        </div>

        {/* Harga dan Aksi */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mt-4">
          <div>
            <span className="text-primary font-bold text-base">
              Rp{kost.hargaDiskon.toLocaleString('id-ID')}
            </span>
            <span className="text-sm text-gray-500"> /bulan</span>
            <div className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded-md inline-block mt-1">
              {kost.tipe}
            </div>
          </div>

          <div className="flex gap-2">
            <Link
              href={`/kost/${kost.id}`}
              className="bg-blue-600 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Lihat Detail
            </Link>
            <button
              onClick={() => alert('Fitur pesan akan datang 🚀')}
              className="bg-gray-200 text-gray-800 text-sm px-4 py-2 rounded-md hover:bg-gray-300 transition"
            >
              Pesan Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
