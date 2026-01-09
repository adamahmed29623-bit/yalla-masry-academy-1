'use client';

import React from 'react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#001524]">
      <header className="border-b border-[#D4AF37]/20 bg-black/40 p-4">
        <div className="container mx-auto">
          <h1 className="text-[#D4AF37] font-bold text-xl tracking-widest">
            YALLA MASRY | لوحة التحكم الملكية
          </h1>
        </div>
      </header>
      <main className="flex-1 container mx-auto p-6 text-white">
        {children}
      </main>
    </div>
  );
}
