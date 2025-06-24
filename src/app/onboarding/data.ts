// src/app/onboarding/data.ts

interface OnboardingItem {
  title: string;
  description: string;
  image: string;
}

const onboardingData: OnboardingItem[] = [
  {
    title: "Kenapa harus kami?",
    description: "Membantu anda menemukan kos-kosan dengan sangat mudah dan cepat.",
    image: "/image/1.png", // Ganti sesuai gambar real di public/image
  },
  {
    title: "Akses Cepat & Mudah",
    description: "Temukan kos idaman dalam genggaman, kapanpun dimanapun.",
    image: "/image/kedua.png",
  },
  {
    title: "Harga Transparan",
    description: "Dapatkan informasi harga kost yang jujur dan terpercaya.",
    image: "/image/ketiga.png",
  },
];

export default onboardingData;
