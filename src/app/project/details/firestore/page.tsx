"use client";
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

// 1. السجل الملكي لضمان السيولة البرمجية
export const dynamic = 'force-dynamic';

function FirestoreEngine() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id'); // استدعاء معرف المشروع بصدق ودقة

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto border border-zinc-800 rounded-2xl bg-zinc-900/30 backdrop-blur-xl p-8 shadow-2xl">
        {/* رأس الصفحة الملكي */}
        <div className="flex items-center justify-between mb-10 border-b border-zinc-800 pb-6">
          <div>
            <h1 className="text-3xl font-extrabold text-cyan-400">قاعدة بيانات المشروع</h1>
            <p className="text-zinc-500 mt-2">إدارة سجلات الأكاديمية للمعرف: <span className="text-cyan-600 font-mono">{id}</span></p>
          </div>
          <div className="text-5xl animate-pulse">📊</div>
        </div>

        {/* محاكاة عرض البيانات (هنا تضعين جداولكِ الحقيقية لاحقاً) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-black/40 border border-zinc-800">
            <h3 className="text-royal-gold mb-2 font-bold">المجموعات (Collections)</h3>
            <p className="text-sm text-zinc-400 font-mono">users, challenges, progress</p>
          </div>
          <div className="p-6 rounded-xl bg-black/40 border border-zinc-800">
            <h3 className="text-cyan-500 mb-2 font-bold">حالة الاتصال</h3>
            <p className="text-sm text-green-500 italic">متصل الآن بالخادم الملكي</p>
          </div>
        </div>

        {/* أيقونة حارس الأكاديمية */}
        <div className="mt-12 text-center text-zinc-700 text-xs tracking-widest uppercase">
          حمى الله صرح نفرتيتي التعليمي
        </div>
      </div>
    </div>
  );
}

// 2. المكون الأساسي (التغليف الملكي)
export default function FirestorePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    }>
      <FirestoreEngine />
    </Suspense>
  );
}
