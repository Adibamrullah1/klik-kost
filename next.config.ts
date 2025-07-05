import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // isi konfigurasi experimental Anda bisa tetap di sini
  },
  // Tambahkan bagian ini
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.googleusercontent.com',
      },
      // Tambahkan objek ini untuk mengizinkan Unsplash
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'api.iconify.design', // WAJIB DITAMBAHKAN
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc', // <-- TAMBAHKAN BLOK INI
      },
    ],
  },
};

export default nextConfig;