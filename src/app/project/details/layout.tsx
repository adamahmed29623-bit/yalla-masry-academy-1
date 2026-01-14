"use client";
import React, { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

// مكون الروابط الذكي (Side Navigation)
function RoyalSidebar() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const query = id ? `?id=${id}` : '';

  const navItems = [
    { name: "النظرة العامة", path: "/project/details/overview", icon: "💎" },
    { name: "قاعدة البيانات", path: "/project/details/firestore", icon: "📊" },
    { name: "المستودع الرقمي", path: "/project/details/storage", icon: "📂" },
    { name: "المحركات الذكية", path: "/project/details/functions", icon: "⚙️" },
    { name: "بوابة الأمان", path: "/project/details/authentication", icon: "🔐" },
  ];

  return (
    <nav className="w-full md:w-64 bg-zinc-900/50 backdrop-blur-xl border-b md:border-b-0 md:border-l border-zinc-800 p-6 flex flex-col space-y-2">
      <div className="mb-10 text-center md:text-right">
        <h2 className="text-royal-gold font-bold text-xl tracking-tighter">أكاديمية نفرتيتي</h2>
        <p className="text-[10px] text-zinc-500 uppercase tracking-widest">إدارة المشاريع الملكية</p>
      </div>
      
      {navItems.map((item) => (
        <Link 
          key={item.path} 
          href={`${item.path}${query}`}
          className="flex items-center space-x-3 space-x-reverse p-3 rounded-xl hover:bg-cyan-900/20 hover:text-cyan-400 transition-all text-zinc-400 text-sm border border-transparent hover:border-cyan-800/50"
        >
          <span>{item.icon}</span>
          <span>{item.name}</span>
        </Link>
      ))}
    </nav>
  );
}

export default function ProjectDetailsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black flex flex-col md:flex-row font-sans">
      {/* 1. القائمة الجانبية الذكية */}
      <Suspense fallback={<div className="w-64 bg-zinc-900 animate-pulse" />}>
        <RoyalSidebar />
      </Suspense>

      {/* 2. منطقة المحتوى (حيث تظهر الصفحات التي عدلناها) */}
      <main className="flex-1 relative overflow-y-auto custom-scrollbar">
        {/* لمسة إضاءة علوية خلفية */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 bg-cyan-500/5 blur-[120px] pointer-events-none" />
        
        <div className="relative z-10">
          {children}
        </div>
      </main>

      {/* لمسة نفرتيتي الأخيرة: شريط الحالة في الأسفل */}
      <footer className="fixed bottom-0 left-0 w-full md:w-[calc(100%-16rem)] bg-black/80 backdrop-blur-md border-t border-zinc-900 py-2 px-6 text-[10px] text-zinc-600 flex justify-between z-50">
        <span>النظام الملكي نشط 🟢</span>
        <span>2026 © أكاديمية نفرتيتي</span>
      </footer>
    </div>
  );
}
