// src/components/layout/ClientLayoutWrapper.tsx
'use client';

import { usePathname } from "next/navigation";
import FooterNavigation from "./navigation/FooterNavigation";

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const showFooter = pathname?.startsWith("/main");

  return (
    <>
      {children}
      {showFooter && <FooterNavigation />}
    </>
  );
}
