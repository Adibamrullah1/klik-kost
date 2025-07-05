import { kostData } from '@/lib/KostData';
import Link from 'next/link';
import Image from 'next/image';
import MapLoader from '@/components/MapLoader'; // Import MapLoader yang baru

export default function MapPage() {
  return (
    <div className="flex h-screen flex-col">
      {/* Header Halaman Peta */}
      <header className="flex items-center gap-3 bg-blue-500 p-4 text-white shadow-md">
        <Link href="/main/home" className="text-xl font-semibold">
          <Image
            src="https://api.iconify.design/solar/arrow-left-linear.svg?color=%23ffffff"
            alt="Kembali"
            width={24}
            height={24}
          />
        </Link>
        <h1 className="text-xl font-bold">Peta Persebaran Kost</h1>
      </header>

      {/* Kontainer untuk Peta */}
      <main className="flex-grow">
        {/* Gunakan MapLoader di sini */}
        <MapLoader kostList={kostData} />
      </main>
    </div>
  );
}