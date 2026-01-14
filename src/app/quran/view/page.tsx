"use client";

import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

// مكون عرض المحتوى الملكي
function QuranContent() {
  const searchParams = useSearchParams();
  const [surahId, setSurahId] = useState<string>('1');

  useEffect(() => {
    const id = searchParams.get('id');
    if (id) setSurahId(id);
  }, [searchParams]);

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden flex flex-col items-center justify-center font-sans">
      
      {/* تأثير الضوء النيون الخلفي المستوحى من صورتكِ */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(6,182,212,0.2),transparent_70%)] opacity-60" />

      {/* المحتوى الرئيسي */}
      <div className="relative z-10 text-center px-4">
        
        {/* تصميم "الباب" الملكي المضيء */}
        <div className="relative inline-block border-t-[6px] border-l-[3px] border-r-[3px] border-cyan-400 rounded-t-[100px] md:rounded-t-[150px] p-16 md:p-24 mb-12 shadow-[0_-20px_60px_-15px_rgba(6,182,212,0.5)] bg-zinc-950/40 backdrop-blur-xl">
          
          {/* لمسة الزخرفة الذهبية */}
          <div className="text-royal-gold text-2xl md:text-3xl font-serif mb-6 tracking-widest animate-pulse">
            تَرْتِيلُ الْمُصْحَفِ
          </div>

          {/* رقم السورة (الباب) */}
          <h1 className="text-8xl md:text-[12rem] font-bold leading-none bg-gradient-to-b from-cyan-200 via-cyan-400 to-blue-700 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.4)]">
            {surahId}
          </h1>

          {/* خط نيون سفلي مزخرف */}
          <div className="mt-8 h-1 w-3/4 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#22d3ee]" />
        </div>

        {/* صندوق تفاصيل الأكاديمية */}
        <div className="max-w-3xl mx-auto p-1 border-gradient bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-cyan-900/20 rounded-2xl">
          <div className="bg-black/80 backdrop-blur-md p-8 rounded-2xl border border-zinc-800/50 shadow-2xl">
            <p className="text-cyan-100/70 text-lg md:text-xl leading-relaxed">
               أهلاً بكِ في رحاب الأكاديمية الملكية. جاري استحضار بيانات السورة الكريمة وتجهيز المسار الصوتي للترتيل...
            </p>
          </div>
        </div>
      </div>

      {/* ديكور الفوانيس الملكية (ثابتة في الزوايا) */}
      <div className="fixed bottom-12 right-12 text-5xl md:text-6xl filter drop-shadow-[0_0_15px_rgba(234,179,8,0.6)] animate-bounce duration-[3000ms]">
        🏮
      </div>
      <div className="fixed bottom-12 left-12 text-5xl md:text-6xl filter drop-shadow-[0_0_15px_rgba(234,179,8,0.6)] animate-bounce duration-[3000ms]" style={{ animationDelay: '1.5s' }}>
        🏮
      </div>

      {/* خطوط نيون هندسية في الخلفية */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-cyan-500 rotate-12 shadow-[0_0_20px_#06b6d4]" />
        <div className="absolute top-3/4 left-0 w-full h-[1px] bg-blue-500 -rotate-12 shadow-[0_0_20px_#3b82f6]" />
      </div>
    </main>
  );
}

// الصفحة الرئيسية مع ملف الـ Suspense الضروري لـ Cloudflare
export default function FinalQuranPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex flex-col items-center justify-center">
        <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin shadow-[0_0_15px_#06b6d4]"></div>
        <p className="mt-6 text-royal-gold text-xl animate-pulse">يفتح الباب الملكي...</p>
      </div>
    }>
      <QuranContent />
    </Suspense>
  );
}
