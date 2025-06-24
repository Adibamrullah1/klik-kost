// app/onboarding/page.tsx
'use client';
import { useState } from 'react';
import styles from './Onboarding.module.css';

const slides = [
  {
    title: "KlikKost",
    description: "Cari Kost Terdekat dengan Instan & Nyaman",
  },
  {
    title: "Cepat & Mudah",
    description: "Membantu menemukan info kost secara mudah & cepat",
  },
  {
    title: "Harga Terjangkau",
    description: "Info seputar harga kost yang terpercaya",
  },
  {
    title: "Kost Sesuai Karakter",
    description: "Temukan kost sesuai kepribadianmu",
  },
];

export default function OnboardingPage() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    if (current < slides.length - 1) {
      setCurrent(current + 1);
    } else {
      // Redirect ke login kalau udah terakhir
      window.location.href = "/login";
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{slides[current].title}</h1>
      <p className={styles.description}>{slides[current].description}</p>

      <button className={styles.button} onClick={nextSlide}>
        {current < slides.length - 1 ? 'Lanjut' : 'Mulai'}
      </button>

      <div className={styles.dots}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === current ? styles.active : ''}`}
          />
        ))}
      </div>
    </div>
  );
}
