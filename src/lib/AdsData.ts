export interface Ad {
  class: string;
  title: string;
  content: string;
  button: string;
}

export const adsData: Ad[] = [
  {
    class: 'promo-1',
    title: 'Cari Kost di Surabaya?',
    content: 'Ribuan pilihan kost dekat kampus & kantor menantimu. Mulai dari 800rb/bulan!',
    button: 'Cari Sekarang',
  },
  {
    class: 'promo-2',
    title: 'Kost Eksklusif Pusat Kota!',
    content: 'Nikmati kenyamanan premium dengan fasilitas bintang 5. Kamar terbatas!',
    button: 'Lihat Detail',
  },
  {
    class: 'promo-3',
    title: 'Diskon 20% Penghuni Baru',
    content: 'Pesan kost pertamamu sekarang dan dapatkan diskon spesial! Penawaran terbatas.',
    button: 'Klaim Diskon',
  },
];
