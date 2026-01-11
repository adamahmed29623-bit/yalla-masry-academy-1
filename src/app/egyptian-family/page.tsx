"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Home, Users, Utensils, Heart, MessageCircle, Sun, Moon, Play } from 'lucide-react';

export default function EgyptianFamilyLife() {
  const [activeRoom, setActiveRoom] = useState('living-room');

  return (
    <div className="min-h-screen bg-[#fdfaf1] text-[#2c3e50] rtl pb-20" dir="rtl">
      
      {/* رأس الصفحة الملكي - بلمسة دافئة */}
      <header className="relative py-16 bg-[#0a1a31] text-white overflow-hidden rounded-b-[80px] shadow-2xl">
        <div className="absolute inset-0 bg-[url('/patterns/islamic-pattern.png')] opacity-10" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ y: -20 }} animate={{ y: 0 }}>
            <img src="/nefertiti-avatar.png" className="w-24 h-24 mx-auto rounded-full border-4 border-gold-500 mb-4 shadow-xl" />
          </motion.div>
          <h1 className="text-4xl font-black text-gold-400 italic">يوميات العيلة المصرية</h1>
          <p className="text-gold-200/60 mt-2 font-bold italic tracking-widest">Live the Egyptian Warmth</p>
        </div>
      </header>

      <main className="container mx-auto px-6 mt-12">
        
        {/* شريط التنقل داخل البيت */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <RoomTab active={activeRoom === 'living-room'} onClick={() => setActiveRoom('living-room')} icon={<Users />} label="لمة العيلة" />
          <RoomTab active={activeRoom === 'kitchen'} onClick={() => setActiveRoom('kitchen')} icon={<Utensils />} label="طبلية الأكل" />
          <RoomTab active={activeRoom === 'balcony'} onClick={() => setActiveRoom('balcony')} icon={<Sun />} label="ساعة العصاري" />
        </div>

        {/* مساحة المحاكاة التفاعلية */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {activeRoom === 'living-room' && (
              <SimulationScene 
                key="living"
                title="الترحيب بالضيف الغريب"
                situation="عندما يدخل طالب أجنبي لبيت مصري لأول مرة."
                dialogue={[
                  { char: "الأم المصرية", text: "نورت البيت يا بني، ده إنت زي ابني والله!" },
                  { char: "الطالب الأجنبي", text: "البيت منور بأصحابه يا طنط." }
                ]}
                tip="في مصر، كلمة 'طنط' و 'يا بني' هي مفاتيح القلوب قبل اللغة."
                image="/scenes/egyptian-living.jpg"
              />
            )}
            {activeRoom === 'kitchen' && (
              <SimulationScene 
                key="kitchen"
                title="عزومة المحشي"
                situation="تعلم لغة الكرم المصري والإلحاح المحبب في الأكل."
                dialogue={[
                  { char: "الأب", text: "والله ما إنت قايم غير لما تخلص منابك!" },
                  { char: "الطالب", text: "تسلم إيدك، بس أنا شبعت جداً الحمد لله." }
                ]}
                tip="المصريون يعبرون عن الحب بإطعامك أكثر مما تستطيع!"
                image="/scenes/egyptian-food.jpg"
              />
            )}
          </AnimatePresence>
        </div>

        {/* قسم "كلمات من قلب البيت" */}
        <div className="mt-20">
          <h3 className="text-2xl font-black mb-8 border-r-4 border-gold-500 pr-4">قاموس العيلة المحبب</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <WordCard word="منور" meaning="You light up the place" usage="تُقال للترحيب بالضيف" />
            <WordCard word="بالهنا والشفا" meaning="Bon appétit" usage="تُقال عند تقديم الطعام" />
            <WordCard word="ربنا يخليك" meaning="May God keep you" usage="أرقى تعبير عن الشكر" />
          </div>
        </div>
      </main>
    </div>
  );
}

function SimulationScene({ title, situation, dialogue, tip, image }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}
      className="bg-white rounded-[50px] overflow-hidden shadow-2xl border border-gold-500/10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-12">
          <span className="bg-gold-500/10 text-gold-600 px-4 py-1 rounded-full text-xs font-black mb-4 inline-block">موقف حقيقي</span>
          <h2 className="text-3xl font-black mb-4">{title}</h2>
          <p className="text-gray-500 italic mb-8">{situation}</p>
          
          <div className="space-y-6 mb-10">
            {dialogue.map((d: any, i: number) => (
              <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'items-start' : 'items-end'}`}>
                <span className="text-[10px] font-black text-gold-600 uppercase mb-1">{d.char}</span>
                <div className={`p-4 rounded-2xl max-w-[80%] font-bold ${i % 2 === 0 ? 'bg-[#0a1a31] text-white rounded-tr-none' : 'bg-gold-500 text-black rounded-tl-none'}`}>
                  {d.text}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-emerald-50 border-r-4 border-emerald-500 p-4 italic text-sm text-emerald-800">
            <strong>نصيحة نفرتيتي:</strong> {tip}
          </div>
        </div>
        <div className="bg-[#f0f0f0] min-h-[400px] relative">
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="text-center group cursor-pointer">
                <div className="w-20 h-20 bg-gold-500 rounded-full flex items-center justify-center text-black shadow-2xl group-hover:scale-110 transition-transform">
                  <Play size={30} fill="currentColor" />
                </div>
                <p className="mt-4 font-black text-gold-600">شغل المحاكاة الصوتية</p>
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function RoomTab({ active, onClick, icon, label }: any) {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-black transition-all ${
        active ? 'bg-[#0a1a31] text-white shadow-xl scale-105' : 'bg-white text-gray-500 hover:bg-gold-500/10'
      }`}
    >
      {icon} {label}
    </button>
  );
}

function WordCard({ word, meaning, usage }: any) {
  return (
    <div className="bg-white p-6 rounded-[30px] shadow-md hover:shadow-xl transition-shadow border-b-4 border-gold-500">
      <h4 className="text-2xl font-black text-[#0a1a31] mb-2">{word}</h4>
      <p className="text-gold-600 text-sm font-bold mb-4 italic">{meaning}</p>
      <p className="text-gray-400 text-xs italic leading-relaxed">{usage}</p>
    </div>
  );
}
