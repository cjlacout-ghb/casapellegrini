'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export default function ConditionalShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith('/admin');

  return (
    <>
      {!isAdminPage && <Navbar />}
      {children}
      {!isAdminPage && <WhatsAppButton />}
      {!isAdminPage && <Footer />}
    </>
  );
}
