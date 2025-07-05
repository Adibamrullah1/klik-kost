'use client';

import React from 'react';

type Kost = {
  id: number;
  nama: string;
  alamat: string;
  gambar: string;
  hargaDiskon: number;
};

type Props = {
  kost: Kost;
  onClick?: () => void;
};

export default function KostCard({ kost, onClick }: Props) {
  return (
    <div
      className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm cursor-pointer w-[280px] flex-shrink-0"
      onClick={onClick}
    >
      <img
        src={kost.gambar}
        alt={kost.nama}
        className="w-full h-[180px] object-cover"
      />
      {/* --- REVISI UTAMA DI AREA INFO DI BAWAH INI --- */}
      <div className="p-4 h-[110px] flex flex-col"> {/* 1. Beri tinggi tetap & jadikan flex column */}
        
        {/* 2. Tambahkan truncate agar teks tidak lebih dari 1 baris */}
        <h3 className="text-md font-semibold truncate">{kost.nama}</h3> 
        <p className="text-sm text-gray-500 truncate">{kost.alamat}</p>
        
        {/* 3. Tambahkan mt-auto untuk mendorong harga ke paling bawah */}
        <p className="text-pink-500 font-bold mt-auto text-sm"> 
          {new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
          }).format(kost.hargaDiskon)}
        </p>
      </div>
    </div>
  );
}