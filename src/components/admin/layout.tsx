'use client';

import React from 'react';
import { AdminNav } from "./admin-nav"; // استدعاء من نفس المجلد

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#001524]">
      <header className="border-b border-[#D4AF37]/20 bg-black/40 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-[#D4AF37] font-bold text-lg">YALLA MASRY</h1>
          <AdminNav />
        </div>
      </header>
      <main className="flex-1 container mx-auto p-6 text-white">
        {children}
      </main>
    </div>
  );
}
