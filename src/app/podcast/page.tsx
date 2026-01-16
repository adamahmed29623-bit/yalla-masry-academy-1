"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Headphones, Mic2, Play, Radio, Share2, Sparkles, Users, Volume2 } from 'lucide-react';

export default function NefertitiPodcast() {
  const [isLive, setIsLive] = useState(true); // حالة البث المباشر

  return (
    <div className="min-h-screen bg-[#050c16] text-white rtl selection:bg-gold-500/30" dir="rtl">
      
      {/* رأس صفحة البودكاست - تصميم الاستوديو */}
      <header className="relative py-24 border-b border-gold-500/20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/sound-wave.png')] opacity-10 animate-pulse" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            className="mb-8 relative inline-block"
          >
            <div className="absolute -inset-4 bg-gold-500/20 rounded-full blur-2xl animate-pulse" />
            <img 
              src="/nefertiti-avatar.png" 
              className="w-32 h-32 rounded-full border-4 border-gold-500 relative z-10 shadow-[0_0_50px_rgba(212,175,55,0.4)]" 
              alt="Nefertiti"
            />
            {isLive && (
              <div className="absolute -bottom-2 right-0 bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full flex items-center gap-1 animate-bounce border-2 border-[#050c16]">
                <Radio size={10} /> LIVE NOW
              </div>
            )}
          </motion.div>
          
          <h1 className="text-6xl font-black text-gold-400 mb-4 italic tracking-tighter">راديو نفرتيتي</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-xl italic leading-relaxed">
            "نحاور العقول، ننشر اللغة، ونسمع صوت النجاح من قلب الأكاديمية الملكية."
          </p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        
        {/* قسم البث المباشر والمقابلات اليومية */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Mic2 className="text-gold-500" size={28} />
            <h2 className="text-3xl font-black italic">المحراب الصوتي المباشر</h2>
          </div>

          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="bg-gradient-to-br from-[#0a1a31] to-[#162a4d] rounded-[50px] p-10 border-2 border-gold-500/30 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/patterns/studio-bg.png')] opacity-5" />
            
            <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
              {/* صورة الضيف (الطالب) */}
              <div className="relative">
                <div className="w-56 h-56 bg-gold-500/10 rounded-[40px] border-2 border-gold-500/50 flex items-center justify-center overflow-hidden">
                   <Users className="text-gold-500/20" size={100} />
                   {/* هنا توضع صورة الطالب الضيف */}
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white text-black p-4 rounded-3xl shadow-xl">
                  <Volume2 className="animate-bounce" size={24} />
                </div>
              </div>

              <div className="flex-1 text-center lg:text-right">
                <span className="text-gold-500 font-black text-xs uppercase tracking-[0.3em] mb-2 block">الحلقة اليومية المباشرة</span>
                <h3 className="text-4xl font-black mb-4">قصة نجاح الطالب: جون من بريطانيا</h3>
                <p className="text-gray-400 text-lg mb-8 italic leading-relaxed">
                  "كيف تعلمت اللهجة المصرية في 30 يوماً؟ مقابلة حصرية تديرها جلالة الملكة نفرتيتي."
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <button className="bg-gold-500 text-black px-10 py-4 rounded-2xl font-black flex items-center gap-2 hover:bg-white transition-all shadow-xl">
                    <Play size={20} fill="currentColor" /> استماع الآن
                  </button>
                  <button className="bg-white/5 border border-white/10 text-white px-10 py-4 rounded-2xl font-black flex items-center gap-2 hover:bg-white/10 transition-all">
                    <Share2 size={20} /> مشاركة البث
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* أرشيف الحلقات السابقة */}
        <section>
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <Headset className="text-gold-500" size={28} />
              <h2 className="text-3xl font-black italic">أرشيف اللقاءات الملكية</h2>
            </div>
            <button className="text-gold-500 font-bold hover:underline text-sm uppercase tracking-widest">عرض الكل</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PodcastEpisode title="أسرار نطق حرف 'ع'" duration="15:20" date="10 يناير" />
            <PodcastEpisode title="الفرق بين الفصحى والعامية" duration="22:45" date="08 يناير" />
            <PodcastEpisode title="تحدي الـ 5 دقائق مع طالب جديد" duration="05:00" date="05 يناير" />
          </div>
        </section>
      </main>
    </div>
  );
}

function PodcastEpisode({ title, duration, date }: any) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white/5 border border-white/10 p-6 rounded-[35px] hover:border-gold-500/40 transition-all group"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 bg-gold-500 rounded-2xl flex items-center justify-center text-black group-hover:rotate-12 transition-transform shadow-lg">
          <Play size={24} fill="currentColor" />
        </div>
        <div>
          <h4 className="font-black text-lg leading-tight">{title}</h4>
          <p className="text-gray-500 text-xs mt-1 font-bold">{date} • {duration}</p>
        </div>
      </div>
      <div className="flex justify-between items-center pt-4 border-t border-white/5">
        <div className="flex -space-x-2 space-x-reverse">
          <div className="w-8 h-8 rounded-full border-2 border-[#050c16] bg-gray-700" />
          <div className="w-8 h-8 rounded-full border-2 border-[#050c16] bg-gold-500 flex items-center justify-center text-[8px] text-black font-black">+12</div>
        </div>
        <Sparkles className="text-gold-500/20 group-hover:text-gold-500 transition-colors" size={20} />
      </div>
    </motion.div>
  );
}
