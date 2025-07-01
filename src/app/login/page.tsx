// src/app/login/page.tsx

"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './login.module.css';
import {
  MdOutlineMailOutline,
  MdLockOutline,
  MdVisibilityOff,
  MdVisibility,
} from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { FirebaseError } from 'firebase/app';
import { useAuth } from '@/context/AuthContext'; // GUNAKAN CONTEXT

const LoginPage = () => {
  const { user, login, googleLogin } = useAuth(); // Gunakan fungsi dari context
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Auto-redirect jika user sudah login
  useEffect(() => {
    if (user) {
      router.push('/main/home');
    }
  }, [user, router]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
      await login(email, password); // Pakai context
      router.push('/home');
    } catch (err: any) {
      if (err instanceof FirebaseError) {
        if (err.code === 'auth/user-not-found') {
          setError('Pengguna tidak ditemukan.');
        } else if (err.code === 'auth/wrong-password') {
          setError('Password salah.');
        } else {
          setError('Terjadi kesalahan saat login.');
        }
      } else {
        setError('Terjadi kesalahan yang tidak diketahui.');
      }
    }
  };

  const handleGoogleLogin = async () => {
    setError(null);
    try {
      await googleLogin(); // Pakai context
      router.push('/home');
    } catch (err: any) {
      if (err instanceof FirebaseError) {
        setError('Gagal login dengan Google.');
      } else {
        setError('Terjadi kesalahan saat login Google.');
      }
    }
  };

  return (
    <main className={styles.container}>
      <div className={styles.loginBox}>
        <div className={styles.illustrationContainer}>
          <Image src="/image/login.png" alt="Login Illustration" width={250} height={250} />
        </div>

        <h1 className={styles.title}>Login</h1>
        {error && <p className={styles.errorMessage}>{error}</p>}

        <form onSubmit={handleLogin} className={styles.form}>
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
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {showPassword ? (
              <MdVisibility className={styles.icon} onClick={() => setShowPassword(false)} />
            ) : (
              <MdVisibilityOff className={styles.icon} onClick={() => setShowPassword(true)} />
            )}
          </div>

          <a href="#" className={styles.forgotPassword}>Lupa password?</a>
          <button type="submit" className={styles.buttonPrimary}>Masuk</button>
        </form>

        <div className={styles.separator}><span>Atau</span></div>

        <button onClick={handleGoogleLogin} className={styles.buttonSecondary}>
          <FcGoogle size={22} />
          <span>Masuk dengan Google</span>
        </button>

        <p className={styles.signupLink}>
          Belum punya akun? <Link href="/register">Daftar sekarang</Link>
        </p>
      </div>
    </main>
  );
};

export default LoginPage;
