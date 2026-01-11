"use client"; // تأكدي من وجود هذا السطر في الأعلى

import React from 'react';
import { motion } from 'framer-motion';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        {/* المحتوى الأصلي للموقع */}
        {children}

        {/* --- الأفاتار الملكي العائم (يظهر في كل الصفحات) --- */}
        <div className="fixed bottom-6 left-6 z-[9999] pointer-events-none md:pointer-events-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="relative group cursor-pointer"
          >
            {/* هالة ضوئية ذهبية خلف الأفاتار */}
            <div className="absolute inset-0 bg-gold-500 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity animate-pulse" />
            
            {/* صورة الملكة نفرتيتي */}
            <img 
              src="/nefertiti-avatar.png" 
              alt="نفرتيتي" 
              className="w-20 h-20 md:w-28 md:h-28 rounded-full border-2 border-gold-500 shadow-2xl relative z-10 object-cover"
            />

            {/* فقاعة ترحيبية تظهر عند الوقوف بالماوس */}
            <div className="absolute bottom-full mb-4 left-0 bg-white/10 backdrop-blur-xl border border-gold-500/30 p-3 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 w-48 shadow-2xl">
              <p className="text-gold-400 text-[10px] font-black italic mb-1 uppercase tracking-tighter">أكاديمية نفرتيتي</p>
              <p className="text-white text-xs font-bold leading-relaxed">أنا معكِ في كل خطوة في رحلة تعلمكِ يا بطل!</p>
            </div>
          </motion.div>
        </div>
      </body>
    </html>
  );
}
