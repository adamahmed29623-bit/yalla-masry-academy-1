"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Rocket, BookOpen, UserPlus } from 'lucide-react';
import Link from 'next/link';

// ملاحظة ملكية: تم حذف استدعاء Firebase Provider لضمان نجاح النشر [cite: 2025-12-24]

export default function NefertitiMainHome() {
  return (
    <div className="relative min-h-screen bg-[#001233] text-white flex flex-col items-center justify-center overflow-hidden font-serif">
      
      {/* خلفية المتحف الكبير - ثابتة ومهيبة */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black z-10" />
        <img 
          src="https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80" 
          className="w-full h-full object-cover opacity-30"
          alt="Grand Egyptian Museum"
        />
      </div>

      <main className="z-20 text-center px-6 max-w-6xl w-full">
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="mb-16"
        >
          <Crown className="w-24 h-24 text-[#D4AF37] mx-auto drop-shadow-[0_0_30px_#D4AF37] mb-6" />
          <h1 className="text-6xl md:text-8xl font-black tracking-[15px] uppercase">
            NEFERTITI <span className="text-[#D4AF37]">ACADEMY</span>
          </h1>
          <p className="text-[#D4AF37] text-xl tracking-[10px] mt-4 opacity-80 uppercase">
            مستقبل التعليم بروح الحضارة
          </p>
        </motion.div>

        {/* شبكة الأقسام الملكية - تربط كل ما في المستودع القديم والجديد */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <Link href="/academy/game">
            <motion.div whileHover={{ scale: 1.05 }} className="p-8 bg-white/5 border border-[#D4AF37]/30 rounded-3xl hover:bg-[#D4AF37]/10 transition-all cursor-pointer">
              <Rocket className="w-12 h-12 text-[#D4AF37] mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2">لعبة المتحف</h3>
              <p className="text-white/40 text-sm">استكشف المريخ بأدوات الفراعنة</p>
            </motion.div>
          </Link>

          <Link href="/quran">
            <motion.div whileHover={{ scale: 1.05 }} className="p-8 bg-white/5 border border-[#D4AF37]/30 rounded-3xl hover:bg-[#D4AF37]/10 transition-all cursor-pointer">
              <BookOpen className="w-12 h-12 text-[#D4AF37] mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2">نور القرآن</h3>
              <p className="text-white/40 text-sm">تلاوات خاشعة وتدبر ملكي</p>
            </motion.div>
          </Link>

          <Link href="/signup">
            <motion.div whileHover={{ scale: 1.05 }} className="p-8 bg-[#D4AF37] text-black rounded-3xl transition-all cursor-pointer shadow-[0_0_30px_rgba(212,175,55,0.3)]">
              <UserPlus className="w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2">بوابة الانضمام</h3>
              <p className="text-black/60 text-sm font-bold">سجل اسمك في التاريخ</p>
            </motion.div>
          </Link>

        </div>
      </main>

      {/* غبار الذهب المتطاير */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -1000], opacity: [0, 1, 0] }}
            transition={{ duration: 5 + Math.random() * 5, repeat: Infinity, delay: i }}
            className="absolute bottom-0 w-1 h-1 bg-[#D4AF37] rounded-full"
            style={{ left: `${Math.random() * 100}%` }}
          />
        ))}
      </div>
    </div>
  );
}
