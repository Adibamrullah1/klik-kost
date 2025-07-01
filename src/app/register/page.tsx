// src/app/register/page.tsx - VERSI FINAL YANG SUDAH DIREVISI

"use client"; // Diperlukan untuk interaktivitas

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Untuk mengarahkan pengguna
import styles from './register.module.css';
import { MdOutlineMailOutline, MdLockOutline, MdVisibilityOff, MdPersonOutline } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
// Impor fungsi-fungsi dari file konfigurasi Firebase Anda
import {auth} from '@/lib/firebase'; // Pastikan path ini sesuai dengan struktur proyek Anda
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const RegisterPage = () => {
  // State untuk menyimpan nilai dari setiap input
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null); // State untuk pesan error
  const router = useRouter(); // Hook untuk redirect

  // Fungsi yang dijalankan saat form disubmit (tombol "Daftar" diklik)
  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault(); // Mencegah halaman refresh
    setError(null); // Bersihkan error sebelumnya

    if (password.length < 6) {
      setError("Password minimal harus 6 karakter.");
      return;
    }

    try {
      // Menggunakan fungsi Firebase untuk membuat pengguna baru
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('Pengguna berhasil didaftarkan:', userCredential.user);
      // Arahkan ke halaman home setelah berhasil
      router.push('/home');
    } catch (err: any) {
      // Tangani error dari Firebase
      console.error("Error saat mendaftar:", err);
      if (err.code === 'auth/email-already-in-use') {
        setError('Alamat email ini sudah terdaftar.');
      } else {
        setError('Terjadi kesalahan saat mendaftar.');
      }
    }
  };

  // Fungsi yang dijalankan saat tombol Google diklik
  const handleGoogleSignIn = async () => {
    setError(null);
    const provider = new GoogleAuthProvider();
    try {
      // Membuka popup login Google dari Firebase
      const result = await signInWithPopup(auth, provider);
      console.log('Pengguna berhasil masuk dengan Google:', result.user);
      // Arahkan ke halaman home setelah berhasil
      router.push('/home');
    } catch (err: any) {
      console.error("Error saat masuk dengan Google:", err);
      setError('Gagal masuk dengan Google.');
    }
  };

  return (
    <main className={styles.container}>
      <div className={styles.registerBox}>
        <div className={styles.illustrationContainer}>
           <Image src="/image/register.png" alt="Sign Up Illustration" width={300} height={200}/>
        </div>
        <h1 className={styles.title}>Sign Up</h1>
        {/* Menampilkan pesan error jika ada */}
        {error && <p className={styles.errorMessage}>{error}</p>}

        {/* Form dihubungkan dengan fungsi handleSignUp */}
        <form onSubmit={handleSignUp} className={styles.form}>
          <div className={styles.inputGroup}>
            <MdPersonOutline className={styles.icon} />
            <input type="text" placeholder="Name" className={styles.input} value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className={styles.inputGroup}>
            <span className={styles.flag}>🇮🇩</span><span className={styles.countryCode}>+62</span>
            <input type="tel" placeholder="Nomor telepon" className={styles.phoneInput} value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className={styles.inputGroup}>
            <MdOutlineMailOutline className={styles.icon} />
            <input type="email" placeholder="Email ID" className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className={styles.inputGroup}>
            <MdLockOutline className={styles.icon} />
            <input type="password" placeholder="Password" className={styles.input} value={password} onChange={(e) => setPassword(e.target.value)} required />
            <MdVisibilityOff className={styles.icon} style={{ cursor: 'pointer' }}/>
          </div>
          <p className={styles.terms}>
            Dengan mendaftar, Anda menyetujui <a href="/terms">Syarat & Ketentuan</a> dan <a href="/privacy">Kebijakan Privasi</a> Kami
          </p>
          <button type="submit" className={styles.buttonPrimary}>Daftar</button>
        </form>

        {/* Separator dan Tombol Google */}
        <div className={styles.separator}><span>Atau</span></div>
        <button onClick={handleGoogleSignIn} className={styles.buttonSecondary}>
          <FcGoogle size={22} />
          <span>Daftar dengan Google</span>
        </button>

        <p className={styles.loginLink}>
          Sudah punya akun? <Link href="/login">Masuk</Link>
        </p>
      </div>
    </main>
  );
};

export default RegisterPage;