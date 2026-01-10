'use client';
import React from 'react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#001524] text-white">
      <header className="p-4 border-b border-[#D4AF37]/20">
        <h1 className="text-[#D4AF37] font-bold">Yalla Masry Academy</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
