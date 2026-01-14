"use client";
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

// 1. الختم الملكي لضمان ثبات الصرح أثناء البناء
export const dynamic = 'force-dynamic';

function OverviewEngine() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* لوحة التحكم الرئيسية (Dashboard) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-10 rounded-3xl bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 shadow-2xl relative">
            <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
              نظرة ملكية عامة
            </h1>
            <p className="text-cyan-400 text-lg font-medium italic">المشروع القائم: {id || "سجل مجهول"}</p>
            <div className="mt-8 flex space-x-4">
              <span className="px-4 py-2 bg-cyan-900/20 border border-cyan-800 rounded-full text-xs text-cyan-300">نظام نشط</span>
              <span className="px-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-full text-xs text-zinc-400">تحديث تلقائي</span>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-zinc-900/20 border border-cyan-900/30 flex flex-col items-center justify-center text-center">
            <div className="text-6xl mb-4 shadow-cyan-500/50 drop-shadow-xl">👑</div>
            <h3 className="text-royal-gold font-bold">هوية الأكاديمية</h3>
            <p className="text-xs text-zinc-500 mt-2">نفرتيتي: الجمال والذكاء في العلم</p>
          </div>
        </div>

        {/* إحصائيات سريعة */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "الطلاب", val: "١,٢٥٠", color: "text-blue-400" },
            { label: "التحديات", val: "٨٤", color: "text-purple-400" },
            { label: "المعلمين", val: "١٢", color: "text-cyan-400" },
            { label: "التقييم", val: "٤.٩", color: "text-yellow-400" }
          ].map((stat, i) => (
            <div key={i} className="p-6 rounded-2xl bg-zinc-900/10 border border-zinc-800/50 text-center">
              <p className="text-zinc-500 text-xs mb-1">{stat.label}</p>
              <p className={`text-2xl font-bold ${stat.color}`}>{stat.val}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

// 2. المكون الأساسي (التغليف الملكي)
export default function OverviewPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-2xl text-zinc-700 animate-pulse font-serif italic border-b border-zinc-800">
          Nefertiti Academy Overview...
        </div>
      </div>
    }>
      <OverviewEngine />
    </Suspense>
  );
}
