"use client";
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

// 1. الختم الملكي لمنع أخطاء البناء (Prerendering)
export const dynamic = 'force-dynamic';

// 2. محرك الصفحة الذي يقرأ البيانات بصدق
function AuthEngine() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id'); // جلب معرف المشروع من الرابط بدقة

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      {/* تصميم الهوية الملكية للأكاديمية */}
      <div className="p-8 border-2 border-cyan-500 rounded-3xl bg-zinc-900/50 shadow-[0_0_30px_rgba(6,182,212,0.2)] text-center">
        <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          بوابة المصادقة الملكية
        </h1>
        
        <p className="mb-4 text-zinc-400">أنتِ الآن بصدد تأمين المشروع رقم:</p>
        <div className="text-2xl font-mono text-cyan-300 mb-8 bg-black/50 p-2 rounded-lg border border-zinc-800">
          {id || "تحديد الهوية..."}
        </div>

        {/* هنا تضعين أزرار تسجيل الدخول الخاصة بكِ */}
        <button className="w-full py-3 px-6 bg-cyan-600 hover:bg-cyan-500 rounded-xl transition-all font-bold shadow-lg shadow-cyan-900/20">
          تسجيل الدخول للأكاديمية
        </button>
      </div>
      
      {/* الفانوس الصادق */}
      <div className="mt-8 text-4xl animate-bounce">🏮</div>
    </div>
  );
}

// 3. المكون الأساسي الذي يراه النظام (تغليف المحتوى بالـ Suspense)
export default function AuthenticationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center text-cyan-500">
        جاري فتح البوابة الملكية...
      </div>
    }>
      <AuthEngine />
    </Suspense>
  );
}
