"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 👑 تعريف مسارات الصور (المرفوعة في مجلد public)
const assets = {
  scenes: {
    waiting: "/assets/simulation/family-waiting.jpg",
    street: "/assets/simulation/egyptian-street.jpg",
    mosque: "/assets/simulation/mosque-light.webp",
  },
  adam: "/assets/characters/adam-hero.png" // صورة آدم البطل التي أرسلتِها
};

export default function NefertitiRamadanAcademy() {
  const [scene, setScene] = useState(1);
  const [adamText, setAdamText] = useState("أهلاً بكِ يا ملكة نفرتيتي! أنا آدم، مستعد لبدء رحلة رمضان؟");

  // تغيير حديث آدم بناءً على المشهد
  useEffect(() => {
    const messages = {
      1: "العيلة كلها مستنية المفتي.. يا ترى رمضان بكره؟ أنا متحمس جداً!",
      2: "الله! شوف الزينة في الشارع والفوانيس.. رمضان في مصر ملوش زي!",
      3: "صوت التراويح يملأ القلوب بالسكينة.. دعائنا اليوم للأكاديمية ولكل الطلاب."
    };
    setAdamText(messages[scene] || "");
  }, [scene]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden font-sans">
      
      {/* 👑 خلفية المشهد المتغيرة */}
      <AnimatePresence mode="wait">
        <motion.div
          key={scene}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-10" />
          <img 
            src={scene === 1 ? assets.scenes.waiting : scene === 2 ? assets.scenes.street : assets.scenes.scenes.mosque} 
            className="w-full h-full object-cover opacity-60"
            alt="Academy Scene"
          />
        </motion.div>
      </AnimatePresence>

      {/* 👑 واجهة التحكم العلوية */}
      <nav className="relative z-20 p-6 flex justify-between items-center bg-black/40 backdrop-blur-md border-b border-yellow-700/30">
        <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-700 bg-clip-text text-transparent">
          أكاديمية نفرتيتي الملكية
        </div>
        <div className="flex gap-4">
          {[1, 2, 3].map((num) => (
            <button
              key={num}
              onClick={() => setScene(num)}
              className={`px-4 py-2 rounded-full border transition-all ${
                scene === num ? 'bg-yellow-600 border-yellow-400 text-black' : 'border-yellow-900 text-yellow-500'
              }`}
            >
              المشهد {num}
            </button>
          ))}
        </div>
      </nav>

      {/* 👑 شخصية آدم التفاعلية (صورة آدم التي أرسلتِها) */}
      <motion.div 
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        className="fixed bottom-10 right-10 z-30 flex flex-col items-center cursor-grab active:cursor-grabbing"
      >
        {/* فقاعة الحديث */}
        <motion.div 
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          className="bg-white text-black p-4 rounded-2xl rounded-br-none mb-4 shadow-[0_0_20px_rgba(255,255,255,0.2)] max-w-xs border-2 border-yellow-500"
        >
          <p className="text-sm font-bold text-right leading-relaxed">{adamText}</p>
        </motion.div>

        {/* صورة آدم البطل */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-700 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
          <img 
            src={assets.adam} 
            className="relative w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-yellow-600 shadow-2xl object-cover"
            alt="Adam Hero"
          />
        </div>
      </motion.div>

      {/* 👑 محتوى المشهد الرئيسي */}
      <main className="relative z-10 flex flex-col items-center justify-center h-[70vh] text-center px-4">
        <motion.h2 
          key={`title-${scene}`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl md:text-7xl font-black mb-6 text-yellow-500 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
        >
          {scene === 1 && "انتظار هلال الخير"}
          {scene === 2 && "أنوار رمضان في شوارعنا"}
          {scene === 3 && "روحانية التراويح"}
        </motion.h2>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl bg-black/30 p-4 rounded-xl backdrop-blur-sm">
          {scene === 1 && "نجتمع اليوم لنرصد الهلال، بداية رحلة إيمانية جديدة في رحاب الأكاديمية."}
          {scene === 2 && "الفرحة في كل مكان، والزينة تملأ الشوارع المصرية، دعونا نحتفل مع آدم."}
          {scene === 3 && "في المسجد، نجد السكينة والهدوء، وقت الدعاء والتأمل في عظمة الشهر الكريم."}
        </p>
      </main>

      {/* 👑 تذييل ملكي */}
      <footer className="absolute bottom-4 left-4 z-20 text-yellow-700/50 text-xs italic">
        تصميم ملكي خاص لأكاديمية نفرتيتي © 2026
      </footer>
    </div>
  );
}
