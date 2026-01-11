"use client";

import React, { useState } from 'react';
import { 
  Gift, MapPin, Coffee, Sparkles, CheckCircle, Trophy, 
  Crown, Star, ArrowLeftRight, Flame, Gem, Navigation
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// ملاحظة: تأكدي من وجود الملفات التالية أو استبدالها بمسارات صحيحة
// import adventureData from '@/lib/adventure-data.json';
// import placeholderImages from '@/lib/placeholder-images.json';

export default function GulfSectionPage() {
  const [activeTab, setActiveTab] = useState('map'); 
  const [points, setPoints] = useState(1250); // رفع النقاط لتعزيز الشعور بالثراء المعرفي

  return (
    <div className="min-h-screen bg-[#040b16] text-white font-serif rtl" dir="rtl">
      
      {/* الشريط العلوي الملكي */}
      <div className="bg-gradient-to-r from-amber-600/20 via-gold-500/10 to-amber-600/20 border-b border-gold-500/30 py-4 px-6 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm font-bold">
          <div className="flex items-center gap-3 text-gold-400">
            <div className="p-2 bg-gold-500/10 rounded-full border border-gold-500/20">
              <Coffee size={18} className="animate-bounce" />
            </div>
            <span className="tracking-widest">مجلس الخليج لسيادة اللهجة المصرية</span>
          </div>
          <div className="hidden md:block text-gold-200 opacity-80">
            أكاديمية نفرتيتي 2026 | الإمبراطورية التعليمية ✨
          </div>
          <div className="bg-gold-500 text-black px-4 py-1 rounded-full font-black text-xs animate-pulse">
            عرض خاص: الضعف للمشتركين الجدد
          </div>
        </div>
      </div>

      {/* هيدر الفخامة (Hero Section) */}
      <header className="relative pt-20 pb-32 px-6 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/papyros.png')] opacity-5"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-blue-900/40"></div>
        
        <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative mb-10"
          >
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-[40px] border-4 border-gold-500 shadow-[0_0_60px_rgba(212,175,55,0.4)] overflow-hidden bg-white rotate-3 group hover:rotate-0 transition-transform duration-500">
              <Image 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" 
                alt="الملكة نفرتيتي" 
                layout="fill" 
                className="object-cover scale-110"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-emerald-500 p-3 rounded-2xl border-4 border-[#040b16] shadow-xl">
               <Crown size={24} className="text-white" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl px-8 py-3 rounded-full border border-white/10 mb-8 shadow-2xl">
               <Gem className="text-gold-500 animate-pulse" /> 
               <span className="font-black text-2xl text-gold-400">رصيد الفخامة: {points} وسام ملكي</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-black mb-6 tracking-tighter bg-gradient-to-b from-white via-gold-200 to-gold-600 bg-clip-text text-transparent">
              رحلة الاستكشاف العالمية
            </h1>
            <p className="text-blue-100 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
              أهلاً بك في ضيافة **الملكة نفرتيتي**. انطلق من قصور الخليج إلى حواري القاهرة القديمة، لتتقن لهجة "ابن البلد" وتقتنص الكنوز التي لا تقدر بثمن.
            </p>
          </motion.div>
        </div>
      </header>

      {/* المحتوى الرئيسي */}
      <main className="max-w-7xl mx-auto px-6 -mt-16 pb-32 relative z-20">
        
        {/* أزرار التحكم الفاخرة */}
        <div className="flex justify-center gap-6 mb-16">
          <button 
            onClick={() => setActiveTab('map')} 
            className={`group relative px-12 py-5 rounded-[25px] font-black transition-all overflow-hidden shadow-2xl ${activeTab === 'map' ? 'bg-gold-500 text-black scale-105' : 'bg-white/5 border border-white/10 hover:bg-white/10'}`}
          >
            <div className="flex items-center gap-3 relative z-10">
              <Navigation size={24} className={activeTab === 'map' ? 'animate-bounce' : ''} /> خريطة المهمات الملكية
            </div>
          </button>
          <button 
            onClick={() => setActiveTab('gifts')} 
            className={`group relative px-12 py-5 rounded-[25px] font-black transition-all overflow-hidden shadow-2xl ${activeTab === 'gifts' ? 'bg-emerald-600 text-white scale-105' : 'bg-white/5 border border-white/10 hover:bg-white/10'}`}
          >
            <div className="flex items-center gap-3 relative z-10">
              <Gift size={24} className={activeTab === 'gifts' ? 'animate-wiggle' : ''} /> خزانة الجوائز الذهبية
            </div>
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'map' ? (
            <motion.div 
              key="map"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-10"
            >
              {/* قسم "اللهجة المقارنة" - إبهار للخليج */}
              <div className="bg-gradient-to-r from-gold-600/20 to-transparent p-1 border-r-4 border-gold-500 rounded-2xl mb-12">
                <div className="bg-[#0a1628] p-6 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gold-500 rounded-xl text-black font-black">AI</div>
                    <p className="text-xl font-bold">المحرك الآن يربط بين "يا بعد حيّي" و "يا حبيب قلبي".. جرب الآن!</p>
                  </div>
                  <Flame className="text-orange-500 animate-pulse" />
                </div>
              </div>

              {/* خطوات الرحلة */}
              <JourneyStep 
                city="خان الخليلي - القاهرة"
                gulf_phrase="وش علومك يا راعي المحل؟"
                egyptian_phrase="أيوة يا باشا.. إيه الأخبار؟"
                status="active"
                points="+150"
              />
              <JourneyStep 
                city="كورنيش النيل"
                gulf_phrase="أبي أتمشى على النيل"
                egyptian_phrase="عايز أتمشى على النيل شوية"
                status="locked"
                points="+200"
              />
            </motion.div>
          ) : (
            <motion.div 
              key="gifts"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-10"
            >
              <PrizeCard name="وشاح الملكة الحريري" icon="🧣" price={1000} tag="نادر جداً" />
              <PrizeCard name="صندوق العود الملكي" icon="🏺" price={2500} tag="حصري للخليج" />
              <PrizeCard name="مفتاح قصر المنتزه" icon="🔑" price={5000} tag="أسطوري" />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

function JourneyStep({ city, gulf_phrase, egyptian_phrase, status, points }: any) {
  return (
    <motion.div 
      whileHover={{ x: -10 }}
      className={`p-10 rounded-[50px] border-2 transition-all relative overflow-hidden ${status === 'active' ? 'bg-[#0a1a31] border-gold-500 shadow-[0_20px_50px_rgba(212,175,55,0.2)]' : 'bg-white/5 border-white/10 opacity-40'}`}
    >
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="relative">
           <div className="w-32 h-32 rounded-[30px] bg-gradient-to-tr from-gold-600 to-amber-400 p-1 flex items-center justify-center shadow-2xl">
             <div className="bg-white w-full h-full rounded-[28px] flex items-center justify-center text-4xl">
               {status === 'active' ? '🕌' : '🔒'}
             </div>
           </div>
           {status === 'active' && <span className="absolute -top-3 -right-3 bg-red-500 text-white text-[10px] px-3 py-1 rounded-full font-bold animate-pulse">مهمة عاجلة</span>}
        </div>

        <div className="flex-1 text-center md:text-right">
          <div className="flex items-center justify-center md:justify-start gap-2 text-gold-500 font-black text-lg mb-4">
             <MapPin size={22} /> {city}
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
            <div className="bg-white/5 px-6 py-3 rounded-2xl border border-white/10 w-full md:w-auto">
              <span className="text-xs text-gold-500 block mb-1 uppercase font-black">بالخليجي</span>
              <p className="text-xl font-bold italic">"{gulf_phrase}"</p>
            </div>
            <ArrowLeftRight className="text-gold-500 hidden md:block" />
            <div className="bg-gold-500/10 px-6 py-3 rounded-2xl border border-gold-500/30 w-full md:w-auto">
              <span className="text-xs text-blue-300 block mb-1 uppercase font
