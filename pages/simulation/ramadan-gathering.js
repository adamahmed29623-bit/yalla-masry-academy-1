import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';

const RamadanGathering = () => {
  // حالات المحاكاة: waiting (ترقب)، announcement (إعلان المفتي)، celebration (الفرحة واللمة)
  const [scene, setScene] = useState('waiting');

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Head>
        <title>المحاكاة الملكية | لحظة الرؤية</title>
      </Head>

      {/* الخلفية: صورة العائلة المصرية أمام التلفاز التي أرسلتِها */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/simulation/family-waiting.jpg" 
          className={`w-full h-full object-cover transition-all duration-2000 ${scene === 'waiting' ? 'brightness-50' : 'brightness-100'}`}
          alt="العائلة المصرية تنتظر المفتي"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
      </div>

      {/* الرمز الكرتوني "آدم" - يظهر كمرشد في زاوية الشاشة */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="fixed bottom-5 right-5 z-50 w-32 md:w-48 cursor-pointer"
      >
        <div className="relative">
          <img src="/assets/characters/adam-avatar.png" alt="آدم" className="w-full drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]" />
          <div className="absolute -top-16 right-0 bg-white text-black p-3 rounded-2xl rounded-tr-none text-xs font-bold shadow-xl border-2 border-yellow-500">
            {scene === 'waiting' && "بسرعة يا بطل، اقعد جنب العيلة، المفتي طالع حالا!"}
            {scene === 'celebration' && "مبروووك! رمضان جه.. يلا بينا على الشارع نعلق الزينة!"}
          </div>
        </div>
      </motion.div>

      {/* المحتوى التفاعلي الرئيسي */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <AnimatePresence mode="wait">
          {scene === 'waiting' && (
            <motion.div 
              key="waiting"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="text-center bg-black/40 backdrop-blur-md p-8 rounded-3xl border border-yellow-600/30"
            >
              <h2 className="text-2xl md:text-4xl font-serif text-yellow-500 mb-6 leading-relaxed">
                أنصت.. هل غداً أول أيام رمضان؟
              </h2>
              <button 
                onClick={() => setScene('announcement')}
                className="px-12 py-4 bg-gradient-to-r from-yellow-700 to-yellow-500 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-[0_0_20px_rgba(212,175,55,0.4)]"
              >
                افتح الراديو الآن
              </button>
            </motion.div>
          )}

          {scene === 'announcement' && (
            <motion.div 
              key="announcement"
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              className="w-full max-w-3xl px-4"
            >
              <div className="bg-gray-900 border-8 border-stone-800 rounded-2xl aspect-video flex items-center justify-center relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
                <div className="text-center z-10">
                  <p className="text-yellow-500 animate-pulse text-2xl mb-4 font-mono italic">جاري استقبال بيان دار الإفتاء المصرية...</p>
                  <button 
                    onClick={() => setScene('celebration')}
                    className="mt-4 text-xs text-gray-400 underline"
                  >
                    تخطي للنتيجة
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {scene === 'celebration' && (
            <motion.div 
              key="celebration"
              initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-6xl md:text-8xl font-black text-yellow-500 drop-shadow-lg mb-4">
                رمضان كريم
              </h1>
              <div className="flex gap-4 justify-center mt-8">
                {/* هنا تظهر الصور الشعبية للبنات والأولاد بالفوانيس */}
                <div className="p-4 bg-white/10 rounded-xl border border-yellow-500/50 backdrop-blur-sm">
                   <p className="text-sm">سارة وليلى: "وحوي يا وحوي!" 🏮</p>
                </div>
                <div className="p-4 bg-white/10 rounded-xl border border-yellow-500/50 backdrop-blur-sm">
                   <p className="text-sm">محمود: "أنا هصوم للظهر!" 🌙</p>
                </div>
              </div>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                className="mt-12 px-10 py-4 bg-yellow-600 text-black font-black rounded-full"
              >
                إلى شارع المعز مع آدم 🚀
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <style jsx>{`
        .font-serif { font-family: 'Amiri', serif; }
      `}</style>
    </div>
  );
};

export default RamadanGathering;
