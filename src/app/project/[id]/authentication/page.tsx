'use client';

import React from 'react';
import { useFirebase } from '@/firebase';
import { Loader2 } from 'lucide-react';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function AuthenticationPage() {
  const { auth } = useFirebase();
  // استخدام react-firebase-hooks للحصول على حالة التحميل بشكل صحيح
  const [user, loading] = useAuthState(auth as any);

  if (loading) {
    return (
      <div className="flex h-screen w-full justify-center items-center bg-[#050c16]">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-gold-500 mx-auto mb-4" />
          <p className="text-gold-400 font-black animate-pulse">جاري التحقق من الهوية الملكية...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050c16] text-white p-8 rtl" dir="rtl">
      <div className="max-w-md mx-auto bg-white/5 p-8 rounded-3xl border border-gold-500/20 shadow-2xl mt-20">
        <h1 className="text-2xl font-black text-gold-400 mb-6 text-center">بوابة الدخول للأكاديمية</h1>
        <p className="text-center text-gray-400 mb-8">مرحباً بك في صرح الملكة نفرتيتي التعليمي</p>
        
        {/* سيتم وضع نموذج تسجيل الدخول هنا */}
        <div className="space-y-4">
            <button className="w-full bg-gold-500 text-black h-12 rounded-xl font-black hover:bg-white transition-all">
                تسجيل الدخول
            </button>
        </div>
      </div>
    </div>
  );
}
