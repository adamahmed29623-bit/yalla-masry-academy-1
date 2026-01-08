"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Crown, BookOpen, Rocket, UserPlus } from 'lucide-react';
import Link from 'next/link';

export default function NefertitiAcademyHome() {
  return (
    <div className="relative min-h-screen bg-[#001233] text-white font-serif flex flex-col items-center justify-center overflow-hidden">
      
      {/* خلفية المتحف الكبير المريخي [cite: 2025-12-24] */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black z-10" />
        <img 
          src="https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80" 
          className="w-full h-full object-cover opacity-40"
          alt="Grand Museum"
        />
      </div>

      <main className="z-20 text-center space-y-12 px-6">
        <motion.div initial={{ y: -50 }} animate={{ y: 0 }}>
          <Crown className="w-20 h-20 text-[#D4AF37] mx-auto drop-shadow-[0_0_20px_#D4AF37] mb-4" />
          <h1 className="text-5xl md:text-7xl font-black tracking-[10px] uppercase">
            نفرتيتي <span className="text-[#D4AF37]">أكاديمي</span>
          </h1>
        </motion.div>

        {/* روابط الأقسام الكاملة التي طلبتِها [cite: 2025-12-24] */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
          
          <Link href="/academy/game">
            <div className="p-8 bg-white/5 border border-[#D4AF37]/30 rounded-2xl hover:bg-[#D4AF37]/10 transition-all cursor-pointer group">
              <Rocket className="w-12 h-12 text-[#D4AF37] mb-4 group-hover:animate-bounce" />
              <h3 className="text-xl font-bold uppercase tracking-widest">لعبة المتحف</h3>
              <p className="text-xs text-white/40 mt-2">اكتشف أسرار المريخ الفرعونية</p>
            </div>
          </Link>

          <Link href="/quran">
            <div className="p-8 bg-white/5 border border-[#D4AF37]/30 rounded-2xl hover:bg-[#D4AF37]/10 transition-all cursor-pointer">
              <BookOpen className="w-12 h-12 text-[#D4AF37] mb-4" />
              <h3 className="text-xl font-bold uppercase tracking-widest">قسم القرآن</h3>
              <p className="text-xs text-white/40 mt-2">تلاوات ملكية عطرة</p>
            </div>
          </Link>

          <Link href="/signup">
            <div className="p-8 bg-[#D4AF37] text-black rounded-2xl hover:scale-105 transition-all cursor-pointer">
              <UserPlus className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold uppercase tracking-widest">التسجيل الملكي</h3>
              <p className="text-xs text-black/60 mt-2">انضم لمستكشفي المستقبل</p>
            </div>
          </Link>

        </div>
      </main>

      {/* لمسة الإبهار: غبار الذهب */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -1000], opacity: [0, 1, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: i }}
            className="absolute bottom-0 w-1 h-1 bg-[#D4AF37] rounded-full"
            style={{ left: `${Math.random() * 100}%` }}
          />
        ))}
      </div>
    </div>
  );
}
