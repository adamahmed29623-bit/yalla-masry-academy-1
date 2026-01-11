"use client";

import React, { useState } from 'react';
import { 
  Gift, MapPin, Coffee, Sparkles, CheckCircle, Trophy, 
  Crown, Star, ArrowLeftRight, Flame, Gem, Navigation, 
  ChevronLeft, Timer
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function GulfSectionPage() {
  const [activeTab, setActiveTab] = useState('map'); 
  const [points] = useState(1250);

  return (
    <div className="min-h-screen bg-[#040b16] text-white font-serif rtl" dir="rtl">
      
      {/* شريط الإعلانات الملكي المتحرك */}
      <div className="bg-gold-500 text-black py-2 overflow-hidden whitespace-nowrap border-b border-gold-600">
        <div className="flex animate-marquee gap-10 font-black text-sm uppercase">
          <span>✨ خصم 50% لأبناء الخليج بمناسبة العام الجديد ✨</span>
          <span>💎 سجل الآن واحصل على وسام "المستكشف الذهبي" 💎</span>
          <span>🇪🇬 تعلم لهجة ابن البلد بأسلوب ملكي رفيع 🇪🇬</span>
          <span>✨ خصم 50% لأبناء الخليج بمناسبة العام الجديد ✨</span>
        </div>
      </div>

      {/* الرأس الإمبراطوري */}
      <header className="relative pt-16 pb-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/papyros.png')] opacity-10"></div>
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative mb-12"
          >
            <div className="w-44 h-44 md:w-56 md:h-56 rounded-[50px] border-8 border-gold-500 shadow-[0_0_70px_rgba(212,175,55,0.5)] overflow-hidden bg-white rotate-3">
              <Image 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" 
                alt="الملكة نفرتيتي" 
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-emerald-600 p-4 rounded-3xl border-4 border-[#040b16] shadow-2xl">
               <Crown size={30} className="text-white" />
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 text-center bg-gradient-to-b from-white via-gold-200 to-gold-600 bg-clip-text text-transparent leading-tight">
            ديوان الخليج والمحروسة
          </h1>
          
          <div className="bg-white/5 backdrop-blur-2xl px-10 py-4 rounded-full border border-gold-500/30 flex items-center gap-4 shadow-2xl">
            <Gem className="text-gold-500" />
            <span className="text-2xl font-black text-gold-400 italic">رصيد الفخامة: {points} وسام</span>
          </div>
        </div>
      </header>

      {/* المحتوى الرئيسي */}
      <main className="max-w-6xl mx-auto px-6 -mt-16 pb-32 relative z-20">
        
        {/* أزرار التنقل */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <button 
            onClick={() => setActiveTab('map')} 
            className={`px-12 py-5 rounded-[30px] font-black text-xl transition-all shadow-2xl flex items-center gap-3 ${activeTab === 'map' ? 'bg-gold-500 text-black scale-105' : 'bg-white/5 border border-white/10'}`}
          >
            <Navigation size={24} /> خريطة المهمات
          </button>
          <button 
            onClick={() => setActiveTab('gifts')} 
            className={`px-12 py-5 rounded-[30px] font-black text-xl transition-all shadow-2xl flex items-center gap-3 ${activeTab === 'gifts' ? 'bg-emerald-600 text-white scale-105' : 'bg-white/5 border border-white/10'}`}
          >
            <Gift size={24} /> خزنة الجوائز
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'map' ? (
            <motion.div 
              key="map-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-12"
            >
              {/* بطاقة المهمة النشطة */}
              <div className="p-10 rounded-[60px] border-2 border-gold-500 bg-[#0a1a31] shadow-[0_20px_50px_rgba(212,175,55,0.2)] relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-32 h-32 bg-gold-500/10 rounded-br-full -ml-10 -mt-10 blur-2xl"></div>
                
                <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                  <div className="w-40 h-40 bg-gradient-to-tr from-gold-600 to-amber-300 rounded-[40px] flex items-center justify-center text-6xl shadow-inner border-4 border-white/10">
                    🕌
                  </div>
                  
                  <div className="flex-1 text-center md:text-right">
                    <div className="text-gold-500 font-black text-xl mb-4 flex items-center justify-center md:justify-start gap-2 italic">
                      <MapPin size={24} /> خان الخليلي - القاهرة
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                        <span className="text-xs text-gold-500 block mb-2 font-black">بالخليجي</span>
                        <p className="text-2xl font-bold">"وش علومك يا راعي المحل؟"</p>
                      </div>
                      <div className
