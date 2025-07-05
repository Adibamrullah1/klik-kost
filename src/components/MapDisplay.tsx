// components/MapDisplay.tsx

'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Kost } from '@/lib/KostData'; // Sesuaikan path jika perlu
import L from 'leaflet';
import Link from 'next/link';

// FIX untuk icon marker yang tidak muncul di Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

interface MapDisplayProps {
  kostList: Kost[];
}

export default function MapDisplay({ kostList }: MapDisplayProps) {
  // Ambil lokasi pertama sebagai pusat peta
  const center: [number, number] = [kostList[0].lat, kostList[0].lng];

  return (
    <MapContainer
      center={center}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {kostList.map((kost) => (
        <Marker key={kost.id} position={[kost.lat, kost.lng]}>
          <Popup>
            <div style={{ padding: '5px' }}>
              <h3 style={{ margin: 0, fontWeight: 'bold' }}>{kost.nama}</h3>
              <p style={{ margin: '5px 0' }}>
                Rp {kost.hargaDiskon.toLocaleString('id-ID')} / bulan
              </p>
              <Link href={`/main/detail/${kost.id}`} style={{ color: '#007bff' }}>
                Lihat Detail
              </Link>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}