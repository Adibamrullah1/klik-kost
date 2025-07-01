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
    ],
  },
};

export default nextConfig;