import React from 'react';
import { redirect } from 'next/navigation';

export default function RootPage() {
  // توجيه الزوار تلقائياً إلى الصفحة الرئيسية الفخمة داخل التطبيق
  redirect('/home');
  
  return (
    <div className="min-h-screen bg-[#0A0F1E] flex items-center justify-center">
      <div className="text-[#C5A059] text-2xl animate-pulse">
        جاري تحضير التجربة الملكية...
      </div>
    </div>
  );
}
