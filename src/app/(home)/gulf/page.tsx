"use client";

import React, { useState } from 'react';
import { 
  Gift, MapPin, Coffee, Crown, Gem, Navigation, 
  ArrowLeftRight, Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function GulfSectionPage() {
  const [activeTab, setActiveTab] = useState('map');
  const points = 1250;

  return (
    <div className="min-h-screen bg-[#040b16] text-white overflow-x-hidden rtl" dir="rtl">
      {/* 1. Header Section */}
      <header className="relative pt-16 pb-24 px-6 text-center border-b border-white/5">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
          >
            <div className="relative mb-8">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-[40px] border-4 border-gold-500 overflow-hidden bg-white shadow-[0_0_50px_rgba(212,175,55,0.3)]">
                <Image 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
                  alt="Nefertiti"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-emerald-600 p-3 rounded-2xl border-4 border-[#040b16]">
                <Crown size={24} className="text-white" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-b from-white to-gold-500 bg-clip-text text-transparent">
              مجلس الخليج والمحروسة
            </h1>

            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl px-8 py-3 rounded-full border border-gold-500/20 shadow-2xl">
              <Gem className="text-gold-500" />
              <span className="text-xl font-bold text-gold-400">رصيد الفخامة: {points} وسام</span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* 2. Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex justify-center gap-4 mb-12">
          <button 
            onClick={() => setActiveTab('map')}
            className={`px-8 py-4 rounded-2xl font-black transition-all flex items-center gap-2 ${activeTab === 'map' ? 'bg-gold-500 text-black' : 'bg-white/5 border border-white/10'}`}
          >
            <Navigation size={20} /> خريطة المهمات
          </button>
          <button 
            onClick={() => setActiveTab('gifts')}
            className={`px-8 py-4 rounded-2xl font-black transition-all flex items-center gap-2 ${activeTab === 'gifts' ? 'bg-emerald-600 text-white' : 'bg-white/5 border border-white/10'}`}
          >
            <Gift size={20} /> خزنة الجوائز
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'map' ? (
            <motion.div 
              key="map"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-8"
            >
              <div className="p-8 md:p-12 rounded-[50px] bg-[#0a1a31] border-2 border-gold-500/50 shadow-2xl">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-32 h-32 bg-gold-500 rounded-3xl flex items-center justify-center text-5xl shadow-lg">🕌</div>
                  <div className="flex-1 text-center md:text-right">
                    <div className="text-gold-500 font-bold mb-2 flex items-center justify-center md:justify-start gap-2">
                      <MapPin size={18} /> خان الخليلي - القاهرة
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
                      <div className="bg-white/5 p-4 rounded-2xl border border-white/10 w-full">
                        <span className="text-[10px] text-gold-500 block font-bold uppercase">بالخليجي</span>
                        <p className="text-lg">"وش علومك يا راعي المحل؟"</p>
                      </div>
                      <ArrowLeftRight className="text-gold-500 hidden md:block" />
                      <div className="bg-gold-500/10 p-4 rounded-2xl border border-gold-500/30 w-full">
                        <span className="text-[10px] text-blue-300 block font-bold uppercase">بالمصري</span>
                        <p className="text-lg text-gold-200">"إيه الأخبار يا فنان؟"</p>
                      </div>
                    </div>
                    <button className="w-full md:w-auto px-12 py-4 bg-gold-500 text-black rounded-2xl font-black hover:bg-white transition-all">
                      ابدأ التحدي الملكي
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="gifts"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <PrizeCard name="خاتم توت الذهبي" price={1500} icon="💍" />
              <PrizeCard name="بخور القصر" price={3000} icon="🏺" />
              <PrizeCard name="تاج السيادة" price={9999} icon="👑" />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

function PrizeCard({ name, price, icon }: { name: string; price: number; icon: string }) {
  return (
    <div className="bg-white/5 border border-white/10 p-8 rounded-[40px] text-center hover:border-gold-500 transition-all">
      <div className="text-6xl mb-6">{icon}</div>
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <div className="flex items-center justify-center gap-2 text-gold-500 font-bold">
        <Star size={16} /> {price} وسام
      </div>
    </div>
  );
}
