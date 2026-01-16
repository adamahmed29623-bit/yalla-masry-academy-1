import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RamadanSpirituals = () => {
  const [interacted, setInteracted] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-gold relative overflow-hidden">
      {/* الخلفية: دمج صور المسجد والتراويح */}
      <div className="absolute inset-0 opacity-40">
        <img src="/assets/simulation/mosque-light.webp" className="w-full h-full object-cover" alt="مسجد مزين" />
      </div>

      {/* الرمز "آدم" يرتدي جلباباً أبيض للصلاة */}
      <motion.div className="fixed bottom-5 left-5 z-50 w-32">
        <img src="/assets/characters/adam-prayer.png" alt="آدم في المسجد" className="w-full" />
        <div className="bg-white text-black p-2 rounded-xl text-[10px] font-bold shadow-gold">
          "سمعت صوت التراويح؟ يلا بينا ندخل المسجد ونتعلم آداب الصلاة مع بعض."
        </div>
      </motion.div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
        <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-royal mb-4">صلاة التراويح والذكر</h2>
          <p className="text-white/80">في مصر، المسجد هو قلب الحارة في رمضان..</p>
        </motion.div>

        {/* مشهد التهنئة التفاعلي */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          <div className="bg-black/50 p-6 rounded-2xl border-l-4 border-yellow-500 backdrop-blur-md">
             <h4 className="text-yellow-500 mb-2">تهنئة الجيران:</h4>
             <p className="text-sm mb-4">اضغط على الجار لتبادله التهنئة كما في صور الحارة:</p>
             <button 
              onClick={() => alert("رمضان كريم! - الرد: الله أكرم")}
              className="bg-yellow-600 px-4 py-2 rounded text-black font-bold text-xs"
             >
               قل: "رمضان كريم"
             </button>
          </div>

          <div className="bg-black/50 p-6 rounded-2xl border-l-4 border-green-500 backdrop-blur-md">
             <h4 className="text-green-500 mb-2">لحظة الدعاء:</h4>
             <p className="text-sm mb-4">استمع لصوت التضرع في صلاة الوتر (كما في صورة الدعاء):</p>
             <button className="bg-green-700 px-4 py-2 rounded text-white font-bold text-xs">
               استمع للدعاء 🤲
             </button>
          </div>
        </div>
      </main>

      <style jsx>{`
        .font-royal { font-family: 'Amiri', serif; }
        .shadow-gold { filter: drop-shadow(0 0 10px #D4AF37); }
      `}</style>
    </div>
  );
};

export default RamadanSpirituals;
