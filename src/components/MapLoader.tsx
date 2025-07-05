'use client';

import dynamic from 'next/dynamic';
import { Kost } from '@/lib/KostData'; // Sesuaikan path jika perlu

// Lakukan dynamic import di dalam Client Component ini
const Map = dynamic(() => import('@/components/MapDisplay'), {
  ssr: false,
  loading: () => <p className="flex h-full items-center justify-center">Memuat Peta...</p>,
});

interface MapLoaderProps {
  kostList: Kost[];
}

// Komponen ini hanya bertugas untuk merender peta yang sudah diload
export default function MapLoader({ kostList }: MapLoaderProps) {
  return <Map kostList={kostList} />;
}