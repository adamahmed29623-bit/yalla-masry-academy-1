'use client';

import React from 'react';
import { AdminNav } from "./admin-nav"; // استيراد مباشر من نفس المجلد

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#001524]">
      <header className="border-b border-[#D4AF37]/20 bg-black/40 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
            <h1 className="text-[#D4AF37] font-bold tracking-tighter">YALLA MASRY</h1>
          </div>
          <AdminNav />
        </div>
      </header>
      <main className="flex-1 container mx-auto p-6">
        {children}
      </main>
    </div>
  );
}
