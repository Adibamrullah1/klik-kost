// src/app/layout.tsx (REVISI)

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { AuthProvider } from "@/context/AuthContext";
// Ganti nama import menjadi AppProvider
import { AppProvider } from "@/context/SearchContext"; 
import ClientLayoutWrapper from "../components/layout/ClientLayoutWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KlikKost",
  description: "Cari Kost Tanpa Ribet, Temukan Nyamannya",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthProvider>
          {/* Ganti nama komponen menjadi AppProvider */}
          <AppProvider> 
            <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
          </AppProvider>
        </AuthProvider>
      </body>
    </html>
  );
}