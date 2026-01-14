"use client";
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

// 1. الختم الملكي لضمان تدفق البيانات دون توقف
export const dynamic = 'force-dynamic';

function FunctionsEngine() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-5xl mx-auto">
        {/* تصميم لوحة التحكم بالوظائف */}
        <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/20 p-10 backdrop-blur-md">
          <div className="absolute top-0 right-0 p-4 text-6xl opacity-20">⚙️</div>
          
          <h1 className="text-4xl font-bold bg-gradient-to-l from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-4">
            العمليات الذكية للأكاديمية
          </h1>
          
          <p className="text-zinc-500 mb-8 border-r-2 border-cyan-500 pr-4">
            تجهيز المحركات السحابية للمشروع الملكي ذو المعرف: 
            <span className="text-white font-mono mx-2 underline decoration-cyan-500">{id || "..."}</span>
          </p>

          {/* عرض حالة الوظائف */}
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-black/40 rounded-xl border border-zinc-800/50">
              <span className="text-zinc-300">نظام تصحيح التلاوة الذكي</span>
              <span className="px-3 py-1 bg-cyan-900/30 text-cyan-400 text-xs rounded-full border border-cyan-800">نشط الآن</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-black/40 rounded-xl border border-zinc-800/50">
              <span className="text-zinc-300">نظام توزيع التحديات</span>
              <span className="px-3 py-1 bg-blue-900/30 text-blue-400 text-xs rounded-full border border-blue-800">في انتظار الأوامر</span>
            </div>
          </div>
        </div>

        {/* لمسة نفرتيتي الجمالية في الأسفل */}
        <div className="mt-10 flex justify-center space-x-4">
          <div className="h-1 w-20 bg-gradient-to-r from-transparent to-cyan-500 rounded-full"></div>
          <div className="h-1 w-2 bg-cyan-500 rounded-full animate-ping"></div>
          <div className="h-1 w-20 bg-gradient-to-l from-transparent to-cyan-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

// 2. المكون الأساسي (التغليف الملكي)
export default function FunctionsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex flex-col items-center justify-center">
        <div className="text-cyan-500 text-xl animate-pulse mb-4">جاري استدعاء المحركات...</div>
        <div className="w-64 h-1 bg-zinc-800 rounded-full overflow-hidden">
          <div className="w-1/2 h-full bg-cyan-500 animate-[loading_2s_ease-in-out_infinite]"></div>
        </div>
      </div>
    }>
      <FunctionsEngine />
    </Suspense>
  );
}
