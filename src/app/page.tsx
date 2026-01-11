'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, GraduationCap, Stars, ArrowLeft } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#050c16] text-white overflow-x-hidden relative" dir="rtl">
      
      {/* --- العناصر الجاذبة (The Golden Relics) --- */}
      
      {/* قناع توت عنخ آمون - خلفية علوية يسار */}
      <motion.div 
        initial={{ opacity: 0, x: -100, rotate: -10 }}
        animate={{ opacity: 0.15, x: 0, rotate: -5 }}
        transition={{ duration: 2 }}
        className="absolute top-20 left-[-5%] w-[300px] md:w-[600px] pointer-events-none select-none z-0"
      >
        <img 
          src="https://www.pngarts.com/files/1/Tutankhamun-Mask-PNG-High-Quality-Image.png" 
          alt="King Tut"
          className="filter drop-shadow-[0_0_50px_rgba(212,175,55,0.4)]"
        />
      </motion.div>

      {/* مفتاح الحياة - عنصر عائم في جهة اليمين */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute top-[40%] right-[2%] w-[100px] md:w-[200px] opacity-20 pointer-events-none z-0"
      >
        <img 
          src="https://cdn-icons-png.flaticon.com/512/1041/1041075.png" 
          alt="Ankh" 
          className="invert brightness-200 sepia(1) hue-rotate-[10deg] saturate(5)"
        />
      </motion.div>

      {/* --- محتوى الصفحة --- */}

      <section className="relative pt-32 pb-20 px-6 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
                <span className="px-6 py-2 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-sm font-black tracking-[0.3em] uppercase">
                  Royal Academy of Egypt
                </span>
            </div>
            
            <h1 className="text-6xl md:text-9xl font-black mb-8 leading-[1.1] tracking-tighter">
              تعلم <span className="text-gold-500 block md:inline italic drop-shadow-[0_0_30px_rgba(212,175,55,0.6)]">اللغة المصرية</span> 
              <br /> 
              واكتسب <span className="text-white relative">القوة الفرعونية
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
              </span>
            </h1>
            
            <p className="text-gray-300 text-xl md:text-3xl max-w-4xl mx-auto mb-16 font-light leading-relaxed">
               في رحاب الملكة <span className="text-gold-400 font-bold border-b border-gold-500/40">نفرتيتي</span>، نُعيد إحياء الهيبة المصرية في حديثك. نحن لا نُعلمك كلمات، نحن نمنحك سيادة.
            </p>

            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <button className="group relative px-12 py-6 overflow-hidden rounded-2xl bg-gold-500 text-black font-black text-2xl transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_-10px_rgba(212,175,55,0.6)]">
                <span className="relative z-10">ابدأ رحلتك الملكية</span>
                <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
              
              <button className="px-12 py-6 border-2 border-gold-500/20 bg-[#0a1a31]/40 backdrop-blur-xl rounded-2xl text-2xl font-bold hover:bg-gold-500/10 transition-all">
                استكشف الأسرار
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* قسم مفتاح الحياة التفاعلي */}
      <section className="py-20 relative z-10">
        <div className="max-w-5xl mx-auto px-6 border-y border-gold-500/10 py-16 flex flex-col items-center">
             <div className="w-20 h-20 mb-8 bg-gold-500/10 rounded-full flex items-center justify-center border border-gold-500/30">
                <img src="https://cdn-icons-png.flaticon.com/512/1041/1041075.png" className="w-10 h-10 invert sepia(1) saturate-[5] hue-rotate-[10deg]" alt="Ankh Icon" />
             </div>
             <h2 className="text-4xl font-black text-center mb-6 italic text-gold-400">مفتاح الحياة في لسانك</h2>
             <p className="text-center text-gray-400 max-w-2xl text-lg leading-relaxed">
                اللغة هي الروح التي تمنحك الحياة في قلب مصر. منهجنا يركز على تمليكك "عنخ" التواصل لتكون جزءاً من حضارة لا تموت.
             </p>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gold-500/10 text-center relative z-10">
        <p className="text-gray-500 font-medium tracking-widest uppercase">
          Under the Guardianship of Queen <span className="text-gold-500">Nefertiti</span> 2026
        </p>
      </footer>
    </div>
  );
}
