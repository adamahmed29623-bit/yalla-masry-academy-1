"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Star, BookOpen, Music, Play, Shield, Map as MosqueMap } from 'lucide-react';

export default function QuranSanctuary() {
  const [isAdhanPlaying, setIsAdhanPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-[#02060c] text-white overflow-hidden rtl" dir="rtl">
      {/* خلفية الصرح: سماء ليلية مع زخارف إسلامية باهتة */}
      <div className="fixed inset-0 bg-[url('/patterns/mosque-geometry.png')] opacity-5 pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-black pointer-events-none" />

      {/* بوابة الصرح الملكي */}
      <header className="relative h-[60vh] flex items-center justify-center border-b border-gold-500/10">
        <div className="text-center z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="mb-8 relative"
          >
            {/* أفاتار نفرتيتي في محراب العلم */}
            <div className="relative inline-block">
                <img src="/nefertiti-avatar.png" className="w-32 h-32 rounded-full border-4 border-gold-500 shadow-[0_0_80px_rgba(212,175,55,0.5)] relative z-20" />
                <div className="absolute -inset-4 border border-gold-500/20 rounded-full animate-spin-slow" />
            </div>
          </motion.div>
          
          <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gold-200 to-gold-600 mb-4 italic">صرح القرآن الكريم</h1>
          <p className="text-gold-400/60 tracking-[0.2em] uppercase text-sm font-bold">The Royal Quranic Sanctuary</p>
        </div>
      </header>

      <main className="container mx-auto px-6 -mt-24 relative z-20 pb-20">
        {/* لوحة التحكم في الصرح */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* ركن القراءات العشر */}
          <SanctuaryCard 
            title="محراب القراءات"
            icon={<BookOpen className="text-gold-500" size={32} />}
            desc="استمع لآيات الذكر الحكيم بأعذب الأصوات وأدق القراءات المتواترة."
            action="استكشف القراءات"
          />

          {/* ركن محاكاة المسجد (تمهيداً لمشروعك) */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-[#0a1a31] to-[#162a4d] p-10 rounded-[50px] border-2 border-gold-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center text-center relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/patterns/arch.png')] opacity-10 group-hover:scale-110 transition-transform duration-1000" />
            <div className="bg-gold-500 text-black p-5 rounded-full mb-6 shadow-[0_0_30px_rgba(212,175,55,0.4)]">
              <MosqueMap size={40} />
            </div>
            <h3 className="text-3xl font-black text-white mb-4">محاكاة المسجد</h3>
            <p className="text-gray-400 italic mb-8">قريباً.. تجربة واقع افتراضي تأخذك في جولة داخل أروقة المسجد لتعلم الصلاة والآداب.</p>
            <span className="bg-gold-500/10 text-gold-500 px-6 py-2 rounded-full text-xs font-black border border-gold-500/20">قيد التشييد الملكي</span>
          </motion.div>

          {/* ركن التفسير والبيان */}
          <SanctuaryCard 
            title="خزانة التفسير"
            icon={<Shield className="text-gold-500" size={32} />}
            desc="تعمق في معاني الآيات وأسرار اللغة العربية من خلال أمهات كتب التفسير."
            action="فتح المخطوطات"
          />
        </div>

        {/* مشغل صوتي ملكي (للأذان أو التلاوة) */}
        <div className="mt-20 bg-white/5 backdrop-blur-md rounded-full p-4 border border-white/10 flex items-center justify-between px-10">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsAdhanPlaying(!isAdhanPlaying)}
              className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center text-black hover:scale-110 transition-all shadow-lg"
            >
              <Play size={20} fill="currentColor" />
            </button>
            <div>
              <p className="text-sm font-black text-white">أذان الحرم المكي</p>
              <p className="text-[10px] text-gold-500/60 font-bold uppercase">Now Playing: Spiritual Atmosphere</p>
            </div>
          </div>
          <div className="hidden md:block w-1/2 h-1 bg-white/10 rounded-full overflow-hidden">
             <motion.div animate={{ x: ['-100%', '100%'] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="w-full h-full bg-gold-500" />
          </div>
        </div>
      </main>
    </div>
  );
}

function SanctuaryCard({ title, icon, desc, action }: any) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-[#0a1a31]/60 backdrop-blur-xl p-10 rounded-[50px] border border-white/5 hover:border-gold-500/30 transition-all group"
    >
      <div className="mb-6">{icon}</div>
      <h3 className="text-2xl font-black text-white mb-4 group-hover:text-gold-400 transition-colors">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-8 italic">{desc}</p>
      <button className="text-gold-500 font-black text-sm flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest">
        {action} <span className="text-xl">←</span>
      </button>
    </motion.div>
  );
}
