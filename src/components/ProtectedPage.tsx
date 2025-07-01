// src/components/ProtectedPage.tsx

"use client";

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

type Props = {
  children: ReactNode;
};

const ProtectedPage = ({ children }: Props) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return <div>Loading...</div>; // Bisa kamu ganti dengan loader animasi
  }

  return <>{children}</>;
};

export default ProtectedPage;
