import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';

// دالة النطق بصوت آدم (تعمل مباشرة من الصفحة)
const speakAdam = (text) => {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = 'ar-EG';
    msg.pitch = 1.4; // نبرة آدم المرحة
    window.speechSynthesis.speak(msg);
  }
};

export default function RamadanSimulation() {
  const [scene, setScene] = useState(1);

  return (
    <div className="min-h-screen bg-black text-white relative font-sans overflow-hidden">
      <Head>
        <title>محاكاة رمضان | أكاديمية نفرتيتي</title>
      </Head>

      {/* --- الرمز الكرتوني "آدم" --- */}
      <motion.div 
        initial={{ y: 100 }} animate={{ y: 0 }}
        className="fixed bottom-5 left-5 z-50 w-32 md:w-44 cursor-pointer"
        onClick={() => speakAdam("أنا آدم، رفيقك في رحلة رمضان بالأكاديمية!")}
      >
        <img src="/assets/characters/adam-avatar.png" alt="آدم" className="w-full drop-shadow-2xl" />
        <div className="bg-yellow-500 text-black p-2 rounded-xl text-[10px] font-bold mt-2 text-center shadow-lg border border-white">
          إضغط عليّ لأتحدث!
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {/* المشهد 1: البيت والانتظار */}
        {scene === 1 && (
          <motion.div key="s1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-screen relative flex items-center justify-center">
            <img src="/assets/simulation/family-waiting.jpg" className="absolute inset-0 w-full h-full object-cover opacity-50" />
            <div className="z-10 bg-black/60 p-8 rounded-3xl border-2 border-yellow-600 text-center backdrop-blur-md">
              <h2 className="text-3xl text-yellow-500 mb-4">لحظة الرؤية الملكية</h2>
              <button 
                onClick={() => { setScene(2); speakAdam("رمضان جانا! يلا نشوف الشارع المصري منور إزاي!"); }}
                className="bg-yellow-600 px-10 py-3 rounded-full font-bold hover:bg-yellow-500 transition-all"
              >
                افتح الراديو واسمع المفتي 📻
              </button>
            </div>
          </motion.div>
        )}

        {/* المشهد 2: الشارع والاحتفال */}
        {scene === 2 && (
          <motion.div key="s2" initial={{ x: 300 }} animate={{ x: 0 }} exit={{ x: -300 }} className="h-screen relative flex items-center justify-center">
            <img src="/assets/simulation/egyptian-street.jpg" className="absolute inset-0 w-full h-full object-cover opacity-40" />
            <div className="z-10 grid grid-cols-2 gap-4 max-w-lg px-4">
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-xl border border-yellow-500/50 text-center">
                <p>بنات وأولاد بالفوانيس 🏮</p>
              </div>
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-xl border border-yellow-500/50 text-center">
                <p>ريحة الكنافة البلدي 🧁</p>
              </div>
              <button 
                onClick={() => { setScene(3); speakAdam("صوت التراويح بدأ.. ادخل المسجد واستشعر الهدوء."); }}
                className="col-span-2 bg-yellow-600 py-4 rounded-xl font-black"
              >
                الذهاب للمسجد (صلاة التراويح)
              </button>
            </div>
          </motion.div>
        )}

        {/* المشهد 3: المسجد والدعاء */}
        {scene === 3 && (
          <motion.div key="s3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-screen relative flex flex-col items-center justify-center">
            <img src="/assets/simulation/mosque-light.webp" className="absolute inset-0 w-full h-full object-cover opacity-30" />
            <div className="z-10 text-center px-6">
              <h2 className="text-5xl font-serif text-yellow-500 mb-6 italic">روحانية التراويح</h2>
              <p className="text-xl mb-10 text-gray-300">"اللهم تقبل منا ومنكم صالح الأعمال"</p>
              <button onClick={() => setScene(1)} className="text-yellow-600 underline">العودة للبيت</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
