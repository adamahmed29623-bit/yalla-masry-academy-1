"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Map, Star, Award, Compass, Globe, Anchor, Crown } from 'lucide-react';

export default function PharaonicPassport() {
  return (
    <div className="min-h-screen bg-[#050c16] text-white py-20 px-6 rtl" dir="rtl">
      <div className="max-w-5xl mx-auto">
        
        {/* رأس الجواز الملكي */}
        <div className="text-center mb-16 relative">
          <motion.div 
            initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            className="relative inline-block"
          >
            <div className="absolute -inset-6 bg-gold-500/20 rounded-full blur-3xl animate-pulse" />
            <img src="/nefertiti-avatar.png" className="w-32 h-32 rounded-full border-4 border-gold-500 relative z-10 shadow-2xl" />
          </motion.div>
          <h1 className="text-5xl font-black text-gold-400 mt-6 italic tracking-widest">وثيقة العبور الملكية</h1>
          <p className="text-gray-500 mt-2 font-bold uppercase tracking-[0.3em]">The Royal Pharaonic Passport</p>
        </div>

        {/* جسم الجواز المصمم كبردية رقمية */}
        <div className="relative bg-[#0a1a31] border-4 border-gold-500/30 rounded-[50px] p-12 overflow-hidden shadow-[0_0_100px_rgba(212,175,55,0.1)]">
          {/* زخارف فرعونية في الخلفية */}
          <div className="absolute inset-0 bg-[url('/patterns/hieroglyphics.png')] opacity-5 pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            
            {/* معلومات الطالب الملكية */}
            <div className="lg:col-span-1 space-y-8 border-l border-white/5 pl-8">
              <div className="text-center lg:text-right">
                <span className="text-gold-500/60 text-xs font-black uppercase tracking-widest">الاسم الملكي</span>
                <h2 className="text-3xl font-black text-white italic">أحمد محمد</h2>
              </div>
              <div className="text-center lg:text-right">
                <span className="text-gold-500/60 text-xs font-black uppercase tracking-widest">الرتبة العلمية</span>
                <p className="text-xl font-bold text-emerald-400 flex items-center justify-center lg:justify-start gap-2">
                  <Crown size={20} /> مستكشف الأسرار
                </p>
              </div>
              <div className="pt-8 border-t border-white/5">
                <div className="flex justify-between mb-2">
                  <span className="text-xs font-black text-gray-500">مستوى إتقان اللغة</span>
                  <span className="text-xs font-black text-gold-500">65%</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: '65%' }} className="h-full bg-gold-500 shadow-[0_0_10px_#d4af37]" />
                </div>
              </div>
            </div>

            {/* أختام العبور (Stamps) */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3 italic">
                <Map className="text-gold-500" /> أختام الأقاليم التعليمية
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <PassportStamp title="إقليم الفصحى" icon={<Globe />} active={true} date="2025/12/20" />
                <PassportStamp title="وادي التفسير" icon={<Compass />} active={true} date="2026/01/05" />
                <PassportStamp title="حصن الأحاديث" icon={<ShieldCheck />} active={false} />
                <PassportStamp title="بوابة القراءات" icon={<Star />} active={false} />
                <PassportStamp title="مرسى العامية" icon={<Anchor />} active={false} />
                <PassportStamp title="قصر النحو" icon={<Award />} active={false} />
              </div>
            </div>

          </div>
        </div>

        {/* تذييل الجواز */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm italic">"هذه الوثيقة صادرة عن أكاديمية نفرتيتي العالمية؛ لا يُسمح بالعبور إلا للمجتهدين."</p>
        </div>
      </div>
    </div>
  );
}

function PassportStamp({ title, icon, active, date }: any) {
  return (
    <motion.div 
      whileHover={active ? { scale: 1.05, rotate: 5 } : {}}
      className={`relative p-6 rounded-[35px] border-2 flex flex-col items-center justify-center transition-all ${
        active 
        ? 'border-gold-500 bg-gold-500/10 shadow-[0_10px_30px_rgba(212,175,55,0.1)]' 
        : 'border-white/5 bg-white/5 grayscale opacity-30'
      }`}
    >
      <div className={`mb-3 ${active ? 'text-gold-500' : 'text-gray-500'}`}>
        {React.cloneElement(icon, { size: 32 })}
      </div>
      <span className="text-[10px] font-black uppercase tracking-tighter text-center">{title}</span>
      {active && (
        <span className="absolute -bottom-2 bg-gold-500 text-black text-[8px] font-black px-2 py-1 rounded-full italic shadow-lg">
          {date}
        </span>
      )}
    </motion.div>
  );
}
