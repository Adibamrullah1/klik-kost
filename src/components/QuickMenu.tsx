'use client';

import React from 'react';

type MenuItem = {
  label: string;
  icon: string;
  filter: string;
};

const menuItems: MenuItem[] = [
  { label: 'Putra', icon: 'solar:bed-bold', filter: 'Putra' },
  { label: 'Putri', icon: 'solar:sleeping-bold', filter: 'Putri' },
  { label: 'Kost AC', icon: 'solar:air-conditioner-bold', filter: 'AC' },
  { label: 'Lihat Peta', icon: 'solar:map-bold', filter: 'Peta' },
];

export default function QuickMenu() {
  return (
    <section className="flex justify-around text-center px-5 py-5">
      {menuItems.map((item) => (
        <div
          key={item.filter}
          className="cursor-pointer flex flex-col items-center gap-2"
          data-filter={item.filter}
        >
          <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
            <img
              src={`https://api.iconify.design/${item.icon}.svg?color=%235392f9`}
              alt={item.label}
              className="w-6 h-6"
            />
          </div>
          <span className="text-sm">{item.label}</span>
        </div>
      ))}
    </section>
  );
}
