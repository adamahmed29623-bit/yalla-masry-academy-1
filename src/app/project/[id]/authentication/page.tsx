'use client';

export const dynamic = 'force-static';
export function generateStaticParams() {
  return [];
}
import React from 'react';
import { useFirebase } from '@/firebase';
import { Loader2 } from 'lucide-react';

export default function AuthenticationPage() {
  const { auth } = useFirebase();

  // نظام تحقق مدمج بسيط لضمان استقرار الموقع
  if (!auth) {
    return (
      <div className="flex h-screen w-full justify-center items-center bg-[#050c16]">
        <Loader2 className="h-10 w-10 animate-spin text-gold-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050c16] text-white p-8 rtl text-center" dir="rtl">
      <div className="max-w-md mx-auto bg-white/5 p-10 rounded-[2rem] border border-gold-500/20 shadow-2xl mt-20">
        <h1 className="text-3xl font-black text-gold-400 mb-4 italic">بوابة الصرح</h1>
        <p className="text-gray-400 mb-8">أهلاً بك في أكاديمية الملكة نفرتيتي</p>
        <button className="w-full bg-gold-500 text-black h-14 rounded-xl font-black text-lg">
          تسجيل الدخول الملكي
        </button>
      </div>
    </div>
  );
}
