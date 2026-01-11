"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Volume2, Play, Square, Sparkles, Music, Star, Award, Loader2 } from 'lucide-react';

export default function RattelPage() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioLevel, setAudioLevel] = useState(0);

  // محاكاة لحركة موجات الصوت عند الترتيل
  useEffect(() => {
    let interval: any;
    if (isRecording) {
      interval = setInterval(() => {
        setAudioLevel(Math.random() * 100);
      }, 100);
    } else {
      setAudioLevel(0);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  return (
    <div className="min-h-screen bg-[#02060c] text-white py-20 px-6 rtl" dir="rtl">
      {/* زخارف الهيدر */}
      <div className="absolute inset-0 bg-[url('/patterns/islamic-art.png')] opacity-5 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* الترويسة الملكية */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-block relative mb-6"
          >
            <img src="/nefertiti-avatar.png" className="w-24 h-24 rounded-full border-2 border-gold-500 shadow-[0_0_40px_rgba(212,175,55,0.3)]" />
            <div className="absolute -top-2 -right-2 bg-gold-500 text-black p-2 rounded-full animate-pulse">
              <Mic size={16} />
            </div>
          </motion.div>
          <h1 className="text-5xl font-black text-gold-400 italic mb-4">ورتِّل.. بصوتٍ عالٍ</h1>
          <p className="text-gray-400 text-lg italic tracking-wide">"جمِّل صوتك بالقرآن، ودع آيات الله تملأ روحك نوراً."</p>
        </div>

        {/* مساحة الترتيل المركزية */}
        <div className="bg-[#0a1a31]/60 backdrop-blur-2xl border-2 border-gold-500/20 rounded-[60px] p-12 text-center relative overflow-hidden shadow-2xl">
          
          <div className="mb-12">
            <span className="text-gold-500/60 text-xs font-black uppercase tracking-[0.4em] mb-4 block">الآية المختارة للتدريب</span>
            <h2 className="text-4xl font-bold leading-relaxed mb-6 text-white font-serif">
              "وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا"
            </h2>
            <p className="text-gray-500 italic text-sm text-gold-400/40 tracking-widest">[ سورة المزمل - 4 ]</p>
          </div>

          {/* موجات الصوت التفاعلية */}
          <div className="flex justify-center items-end gap-1 h-32 mb-12">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ height: isRecording ? `${Math.random() * 100 + 10}%` : '10%' }}
                className="w-2 bg-gold-500 rounded-full opacity-60"
              />
            ))}
          </div>

          {/* زر التسجيل الملكي */}
          <div className="flex flex-col items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsRecording(!isRecording)}
              className={`w-28 h-28 rounded-full flex items-center justify-center shadow-2xl transition-all ${
                isRecording 
                ? 'bg-red-600 animate-pulse shadow-red-500/40' 
                : 'bg-gold-500 shadow-gold-500/40 text-black'
              }`}
            >
              {isRecording ? <Square size={40} fill="white" /> : <Mic size={40} fill="currentColor" />}
            </motion.button>
            <p className="text-sm font-black italic text-gold-500">
              {isRecording ? "جاري الإنصات لترتيلك السامي..." : "اضغط لبدء الترتيل"}
            </p>
          </div>
        </div>

        {/* لوحة الشرف للأصوات الندية */}
        <div className="mt-16">
          <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
            <Award className="text-gold-500" /> أصوات زكاها الأفاتار الملكي
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <VoiceCard name="سارة من ألمانيا" surah="سورة الفاتحة" level="ممتاز" />
            <VoiceCard name="ياسين من فرنسا" surah="سورة الإخلاص" level="جيد جداً" />
          </div>
        </div>

      </div>
    </div>
  );
}

function VoiceCard({ name, surah, level }: any) {
  return (
    <div className="bg-white/5 border border-white/10 p-6 rounded-[30px] flex items-center justify-between group hover:bg-gold-500/5 transition-all">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-[#0a1a31] rounded-2xl flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-black transition-all">
          <Play size={20} fill="currentColor" />
        </div>
        <div>
          <h4 className="font-black text-white">{name}</h4>
          <p className="text-xs text-gray-500">{surah}</p>
        </div>
      </div>
      <span className="bg-emerald-500/10 text-emerald-500 text-[10px] font-black px-3 py-1 rounded-full border border-emerald-500/20 uppercase tracking-widest">
        {level}
      </span>
    </div>
  );
}
