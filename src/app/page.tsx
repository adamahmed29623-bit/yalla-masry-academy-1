'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, GraduationCap, Stars, ArrowLeft } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#050c16] text-white overflow-x-hidden relative" dir="rtl">
      
      {/* قناع توت عنخ آمون */}
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.15, x: 0 }}
        transition={{ duration: 2 }}
        className="absolute top-20 left-[-5%] w-[300px] md:w-[600px] pointer-events-none z-0"
      >
        <img 
          src="https://www.pngarts.com/files/1/Tutankhamun-Mask-PNG-High-Quality-Image.png" 
          alt="King Tut"
        />
      </motion.div>

      {/* مفتاح الحياة عائم */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] right-[5%] w-[100px] md:w-[150px] opacity-20 pointer-events-none z-0"
      >
        <img 
          src="https://cdn-icons-png.flaticon.com/512/1041/1041075.png" 
          alt="Ankh" 
          className="invert sepia(1) saturate-5"
        />
      </motion.div>

      <section className="relative pt-32 pb-20 px-6 z-10 text-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <span className="inline-block px-4 py-1 rounded-full border border-gold-500/30 bg-gold-500/5 text-gold-400 text-sm font-bold mb-6 tracking-widest uppercase">
            Yalla Masry Royal Academy
          </span>
          
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
            تعلم <span className="text-gold-500 italic">اللهجة المصرية</span> <br />
            واكتسب <span className="text-white">القوة الفرعونية</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-12">
            بوابة الملكة <span className="text-white font-bold text-2xl">نفرتيتي</span> لتعلم لغة الأرض الطيبة بسيادة وهيبة.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="px-12 py-5 bg-gold-500 text-black font-black rounded-2xl text-xl shadow-[0_10px_40px_rgba(212,175,55,0.4)]">
              ابدأ رحلتك الآن
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
