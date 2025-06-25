// src/app/register/page.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Gunakan Link dari Next.js untuk navigasi
import styles from './register.module.css';
import { MdOutlineMailOutline, MdLockOutline, MdVisibilityOff, MdPersonOutline } from 'react-icons/md';

const RegisterPage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.registerBox}>
        {/* Ilustrasi Utama */}
        <div className={styles.illustrationContainer}>
           <Image 
             src="/image/register.png" // Pastikan nama file sesuai
             alt="Sign Up Illustration"
             width={300} // Sesuaikan ukurannya
             height={200} // Sesuaikan ukurannya
           />
        </div>

        <h1 className={styles.title}>Sign Up</h1>

        <form className={styles.form}>
          {/* Input Nama */}
          <div className={styles.inputGroup}>
            <MdPersonOutline className={styles.icon} />
            <input type="text" placeholder="Name" className={styles.input} />
          </div>

          {/* Input Nomor Telepon */}
          <div className={styles.inputGroup}>
            <span className={styles.flag}>🇮🇩</span>
            <span className={styles.countryCode}>+62</span>
            <input type="tel" placeholder="Nomor telepon" className={styles.phoneInput} />
          </div>
          
          {/* Input Email */}
          <div className={styles.inputGroup}>
            <MdOutlineMailOutline className={styles.icon} />
            <input type="email" placeholder="Email ID" className={styles.input} />
          </div>

          {/* Input Password */}
          <div className={styles.inputGroup}>
            <MdLockOutline className={styles.icon} />
            <input type="password" placeholder="Password" className={styles.input} />
            <MdVisibilityOff className={styles.icon} style={{ cursor: 'pointer' }}/>
          </div>

          <p className={styles.terms}>
            Dengan mendaftar, Anda menyetujui <a href="/terms">Syarat & Ketentuan</a> dan <a href="/privacy">Kebijakan Privasi</a> Kami
          </p>

          <button type="submit" className={styles.buttonPrimary}>
            Daftar
          </button>
        </form>

        <p className={styles.loginLink}>
          Sudah punya akun? <Link href="/login">Masuk</Link>
        </p>
      </div>
    </main>
  );
};

export default RegisterPage;