// src/app/login/page.tsx

import React from 'react';
import Image from 'next/image';
import styles from './login.module.css';
import { MdOutlineMailOutline, MdLockOutline, MdVisibilityOff, MdVisibility } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';

const LoginPage = () => {
  // Nanti kita akan tambahkan state untuk input dan show/hide password di sini
  
  return (
    <main className={styles.container}>
      <div className={styles.loginBox}>
        {/* Ilustrasi Utama */}
        <div className={styles.illustrationContainer}>
           <Image 
             src="/image/login.png"// Ganti nama file jika berbeda
             alt="Login Illustration"
             width={250} // Sesuaikan ukurannya
             height={250} // Sesuaikan ukurannya
           />
        </div>

        <h1 className={styles.title}>Login</h1>

        <form className={styles.form}>
          {/* Input Email */}
          <div className={styles.inputGroup}>
            <MdOutlineMailOutline className={styles.icon} />
            <input type="email" placeholder="Email ID" className={styles.input} />
          </div>

          {/* Input Password */}
          <div className={styles.inputGroup}>
            <MdLockOutline className={styles.icon} />
            <input type="password" placeholder="Password" className={styles.input} />
            {/* Ikon untuk show/hide password, fungsionalitasnya akan kita tambahkan nanti */}
            <MdVisibilityOff className={styles.icon} style={{ cursor: 'pointer' }}/>
          </div>

          <a href="#" className={styles.forgotPassword}>Lupa password?</a>

          <button type="submit" className={styles.buttonPrimary}>
            Masuk
          </button>
        </form>

        <div className={styles.separator}>
          <span>Atau</span>
        </div>

        <button className={styles.buttonSecondary}>
          <FcGoogle size={22} />
          <span>Masuk dengan Google</span>
        </button>

        <p className={styles.signupLink}>
          Belum punya akun? <a href="/register">Daftar sekarang, gratis!</a>
        </p>
      </div>
    </main>
  );
};

export default LoginPage;