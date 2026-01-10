'use client';

import React from 'react';

/**
 * @description الهيكل الإداري الملكي - نسخة خالية من التعارضات
 */
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#001524] text-white">
      {/* رأس الصفحة بسيط ومباشر لتجنب أخطاء الاستيراد */}
      <header className="border-b border-[#D4AF37]/30 bg-black/40 py-4 shadow-xl">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
            <span className="text-[#D4AF37] font-bold text-lg tracking-[0.3em] uppercase">
              Yalla Masry Academy
            </span>
          </div>
          <span className="text-xs text-[#D4AF37]/60 tracking-widest">ADMIN PORTAL</span>
        </div>
      </header>

      {/* المحتوى الرئيسي الذي يضم جميع صفحاتك الملكية */}
      <main className="flex-1 container mx-auto p-8">
        {children}
      </main>

      <footer className="py-4 border-t border-[#D4AF37]/10 text-center text-[10px] text-[#D4AF37]/30">
        &copy; {new Date().getFullYear()} ROYAL SYSTEM | ALL RIGHTS RESERVED
      </footer>
    </div>
  );
}
