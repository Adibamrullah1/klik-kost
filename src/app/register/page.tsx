// src/app/register/page.tsx

"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './register.module.css';
import {
  MdOutlineMailOutline,
  MdLockOutline,
  MdVisibilityOff,
  MdPersonOutline
} from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { auth } from '@/lib/firebase';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import { FirebaseError } from 'firebase/app';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (password.length < 6) {
      setError("Password minimal harus 6 karakter.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('Pengguna berhasil didaftarkan:', userCredential.user);
      router.push('/home');
    } catch (err: unknown) {
      if (err instanceof FirebaseError) {
        console.error("Firebase error saat mendaftar:", err.code);
        if (err.code === 'auth/email-already-in-use') {
          setError('Alamat email ini sudah terdaftar.');
        } else {
          setError('Terjadi kesalahan saat mendaftar.');
        }
      } else {
        console.error("Non-Firebase error:", err);
        setError('Terjadi kesalahan tak terduga.');
      }
    }
  };

  const handleGoogleSignIn = async () => {
    setError(null);
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      console.log('Pengguna berhasil masuk dengan Google:', result.user);
      router.push('/home');
    } catch (err: unknown) {
      if (err instanceof FirebaseError) {
        console.error("Firebase error saat masuk dengan Google:", err.code);
        setError('Gagal masuk dengan Google.');
      } else {
        console.error("Non-Firebase error:", err);
        setError('Terjadi kesalahan saat login Google.');
      }
    }
  };

  return (
    <main className={styles.container}>
      <div className={styles.registerBox}>
        <div className={styles.illustrationContainer}>
          <Image src="/image/register.png" alt="Sign Up Illustration" width={300} height={200} />
        </div>
        <h1 className={styles.title}>Sign Up</h1>
        {error && <p className={styles.errorMessage}>{error}</p>}

        <form onSubmit={handleSignUp} className={styles.form}>
          <div className={styles.inputGroup}>
            <MdPersonOutline className={styles.icon} />
            <input
              type="text"
              placeholder="Name"
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <span className={styles.flag}>🇮🇩</span><span className={styles.countryCode}>+62</span>
            <input
              type="tel"
              placeholder="Nomor telepon"
              className={styles.phoneInput}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <MdOutlineMailOutline className={styles.icon} />
            <input
              type="email"
              placeholder="Email ID"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <MdLockOutline className={styles.icon} />
            <input
              type="password"
              placeholder="Password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <MdVisibilityOff className={styles.icon} style={{ cursor: 'pointer' }} />
          </div>
          <p className={styles.terms}>
            Dengan mendaftar, Anda menyetujui <a href="/terms">Syarat & Ketentuan</a> dan <a href="/privacy">Kebijakan Privasi</a> Kami
          </p>
          <button type="submit" className={styles.buttonPrimary}>Daftar</button>
        </form>

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
