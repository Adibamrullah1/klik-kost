'use client';

import { useState } from 'react';
import styles from './onboarding.module.css';
import onboardingData from './data';
import Image from 'next/image';

export default function OnboardingPage() {
  const [current, setCurrent] = useState(0);
  const lastSlide = current === onboardingData.length - 1;

  const handleNext = () => {
    if (!lastSlide) {
      setCurrent(current + 1);
    } else {
      window.location.href = '/login';
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image
          src={onboardingData[current].image}
          alt={onboardingData[current].title}
          className={styles.image}
          width={250}
          height={250}
        />
        <h1 className={styles.title}>{onboardingData[current].title}</h1>
        <p className={styles.description}>{onboardingData[current].description}</p>

        <div className={styles.dots}>
          {onboardingData.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${index === current ? styles.active : ''}`}
            />
          ))}
        </div>

        <button className={styles.button} onClick={handleNext}>
          {lastSlide ? 'Mulai' : 'Lanjut →'}
        </button>
      </div>
    </div>
  );
}
