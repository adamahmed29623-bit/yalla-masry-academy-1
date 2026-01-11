"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Star, Gift, Zap, DollarSign, Wallet, Percent, Clock } from 'lucide-react';

export default function NefertitiGlobalShop() {
  const [storeMode, setStoreMode] = useState<'money' | 'points' | 'gifts'>('money');

  return (
    <div className="min-h-screen bg-[#050c16] text-white rtl" dir="rtl">
      {/* هيدر المتجر الملكي */}
      <header className="relative py-20 border-b border-gold-500/20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/egyptian-grid.png')] opacity-5" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.img 
            initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            src="/nefertiti-avatar.png" className="w-28 h-28 mx-auto rounded-full border-4 border-gold-500 mb-6 shadow-2xl"
          />
          <h1 className="text-5xl font-black text-gold-400 mb-4 italic">سوق الأكاديمية العالمي</h1>
          <p className="text-gray-400 max-w-2xl mx-auto italic">"اقتني كنوز العلم، استبدل نقاطك بالذهب، وأهدِ أحباءك من رصيد ملكاتك."</p>
        </div>
      </header>

      {/* قسم العروض اليومية (Daily Deals) - الروح الحية للمتجر */}
      <div className="container mx-auto px-6 -mt-10 mb-16 relative z-30">
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="bg-gradient-to-r from-red-900/40 via-gold-900/20 to-red-900/40 border-2 border-red-500/30 backdrop-blur-xl rounded-[35px] p-6 flex flex-col md:flex-row items-center justify-between shadow-2xl"
        >
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <div className="bg-red-500 p-3 rounded-2xl animate-pulse">
              <Zap className="text-white" size={24} fill="currentColor" />
            </div>
            <div>
              <h3 className="text-xl font-black text-white italic">عروض الساعة الملكية!</h3>
              <p className="text-red-400 text-xs font-bold uppercase tracking-widest">تنتهي خلال: 04:59:59</p>
            </div>
          </div>
          <div className="flex gap-4">
             <div className="bg-white/10 px-6 py-2 rounded-xl border border-white/10 text-gold-400 font-black">خصم 50% على كتب التفسير</div>
             <button className="bg-white text-black px-6 py-2 rounded-xl font-black text-sm hover:bg-gold-500 transition-colors">اغتنم الفرصة</button>
          </div>
        </motion.div>
      </div>

      <main className="container mx-auto px-6 pb-20">
        {/* التبديل بين الأقسام (Store Navigator) */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <NavTab active={storeMode === 'money'} onClick={() => setStoreMode('money')} icon={<DollarSign size={18}/>} label="المتجر النقدي" />
          <NavTab active={storeMode === 'points'} onClick={() => setStoreMode('points')} icon={<Star size={18}/>} label="متجر النقاط" />
          <NavTab active={storeMode === 'gifts'} onClick={() => setStoreMode('gifts')} icon={<Gift size={18}/>} label="قسم الهدايا" />
        </div>

        {/* عرض المنتجات بناءً على القسم */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="wait">
            {storeMode === 'money' && (
              <ProductCard key="p1" name="دورة اللهجة المصرية الشاملة" price="$199" type="money" image="/course1.jpg" />
            )}
            {storeMode === 'points' && (
              <ProductCard key="p2" name="كتاب القراءات النادر" price="500 نقطة" type="points" image="/book1.jpg" />
            )}
            {storeMode === 'gifts' && (
              <ProductCard key="p3" name="قسيمة هدية ملكية" price="$50" type="gifts" image="/gift.jpg" />
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

function ProductCard({ name, price, type, image }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      className="bg-[#0a1a31] border border-white/5 rounded-[40px] p-6 relative group overflow-hidden shadow-xl hover:border-gold-500/30 transition-all"
    >
      <div className="h-48 bg-white/5 rounded-[30px] mb-6 overflow-hidden relative">
        <div className="absolute top-4 right-4 z-10">
          {type === 'points' ? <Star className="text-gold-500 fill-gold-500" size={20} /> : <ShoppingBag className="text-gold-500" size={20}/>}
        </div>
        <div className="w-full h-full bg-gradient-to-br from-gold-500/10 to-transparent" />
      </div>

      <h3 className="text-xl font-black text-white mb-2 leading-tight">{name}</h3>
      <div className="flex items-center justify-between mt-6">
        <span className="text-2xl font-black text-gold-400 italic">{price}</span>
        <button className="bg-gold-500 text-black p-3 rounded-2xl hover:scale-110 transition-transform">
          <ShoppingBag size={20} fill="currentColor" />
        </button>
      </div>
    </motion.div>
  );
}

function NavTab({ active, onClick, icon, label }: any) {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-black transition-all ${
        active ? 'bg-gold-500 text-black shadow-2xl shadow-gold-500/20 scale-105' : 'bg-white/5 text-gray-500 hover:bg-white/10'
      }`}
    >
      {icon} {label}
    </button>
  );
}
