"use client";
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

// 1. الختم الملكي الذي ينهي صراع النشر للأبد
export const dynamic = 'force-dynamic';

function StorageEngine() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-5xl mx-auto">
        {/* تصميم خزانة الملفات الملكية */}
        <div className="rounded-3xl border-2 border-zinc-800 bg-gradient-to-b from-zinc-900/50 to-black p-10 relative overflow-hidden">
          {/* خلفية جمالية خفيفة */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 relative z-10">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">مستودع الملفات الملكي</h1>
              <p className="text-cyan-500 font-mono tracking-tighter">STORAGE_SYSTEM // ID: {id || "UNKNOWN_VAULT"}</p>
            </div>
            <div className="mt-4 md:mt-0 text-6xl drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">📂</div>
          </div>

          {/* محاكاة الملفات المرفوعة */}
          <div className="grid grid-cols-1 gap-4 relative z-10">
            <div className="group flex items-center justify-between p-5 bg-zinc-900/80 rounded-2xl border border-zinc-800 hover:border-cyan-500/50 transition-all cursor-pointer">
              <div className="flex items-center space-x-4 space-x-reverse">
                <span className="text-2xl">📜</span>
                <div>
                  <p className="text-sm font-bold text-zinc-200">سجل الطلاب المتفوقين.pdf</p>
                  <p className="text-xs text-zinc-500">2.4 MB</p>
                </div>
              </div>
              <span className="text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity">تحميل</span>
            </div>

            <div className="group flex items-center justify-between p-5 bg-zinc-900/80 rounded-2xl border border-zinc-800 hover:border-cyan-500/50 transition-all cursor-pointer">
              <div className="flex items-center space-x-4 space-x-reverse">
                <span className="text-2xl">🖼️</span>
                <div>
                  <p className="text-sm font-bold text-zinc-200">هوية_الأكاديمية_نفرتيتي.png</p>
                  <p className="text-xs text-zinc-500">5.1 MB</p>
                </div>
              </div>
              <span className="text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity">تحميل</span>
            </div>
          </div>

          {/* لمسة الختام */}
          <div className="mt-12 pt-6 border-t border-zinc-800 flex justify-between items-center text-[10px] text-zinc-600 tracking-[0.2em] uppercase">
            <span>Security: High</span>
            <span>Nefertiti Academy Vault</span>
            <span>Status: Encrypted</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// 2. المكون الأساسي (التغليف الملكي بـ Suspense)
export default function StoragePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="flex space-x-2 space-x-reverse">
          <div className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        </div>
      </div>
    }>
      <StorageEngine />
    </Suspense>
  );
}
