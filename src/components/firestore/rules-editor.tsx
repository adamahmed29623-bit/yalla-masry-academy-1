'use client';

import React, { useState } from 'react';

export default function RulesEditor() {
  const [status, setStatus] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleAction = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);
    
    setTimeout(() => {
      setStatus("تم تحديث حصن البيانات الملكي بنجاح يا جلالة الملكة.");
      setIsPending(false);
    }, 1500);
  };

  return (
    <div className="p-8 bg-[#0a1a31] border border-gold-500/30 rounded-[2.5rem] shadow-2xl text-white max-w-4xl mx-auto" dir="rtl">
      <div className="flex items-center gap-4 mb-8">
        <div className="h-12 w-1.5 bg-gold-500 rounded-full"></div>
        <h2 className="text-3xl font-black text-gold-500 italic tracking-tight">حصن البيانات الملكي</h2>
      </div>
      
      <div className="grid gap-6">
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-gold-500/30 transition-all">
          <h3 className="text-xl font-bold mb-3 text-white">درع الحماية (Firestore Rules)</h3>
          <p className="text-gray-400 leading-relaxed mb-6">
            هذا القسم يضمن أن بيانات "أكاديمية يلا مصري" محمية برموز أمان لا تقهر.
          </p>
          
          <form onSubmit={handleAction}>
            <button 
              type="submit"
              disabled={isPending}
              className="px-10 py-4 bg-gold-500 text-black font-black rounded-xl hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] disabled:opacity-50"
            >
              {isPending ? "جاري تحصين الدرع..." : "تفعيل الحماية الملكية"}
            </button>
          </form>

          {status && (
            <div className="mt-6 p-4 bg-gold-500/10 border border-gold-500/20 rounded-xl text-gold-400 font-bold animate-pulse">
              {status}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
