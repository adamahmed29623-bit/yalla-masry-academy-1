'use client';

import React from 'react';
import { MainNav } from "@/components/admin/main-nav";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#001524]">
      <header className="border-b border-[#D4AF37]/20 bg-black/20">
        <div className="flex h-16 items-center px-4 md:px-8">
          {/* استدعاء قائمة الملاحة التي كانت تسبب الخطأ */}
          <MainNav className="mx-6" />
        </div>
      </header>
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}
