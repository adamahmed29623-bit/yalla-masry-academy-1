import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';

const RamadanSimulation = () => {
  const [gameState, setGameState] = useState('waiting'); // waiting, announcement, celebration
  const audioRef = useRef(null);

  // وظيفة لبدء المحاكاة عند تفاعل المستخدم (بسبب سياسة المتصفح للصوت)
  const startSim = () => {
    setGameState('announcement');
    // هنا سيتم تشغيل صوت المفتي
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <Head>
        <title>محاكاة ليلة الرؤية | أكاديمية نفرتيتي</title>
      </Head>

      {/* المشهد البصري: صالة البيت المصري */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 bg-black/60 z-10 transition-opacity duration-1000 ${gameState === 'celebration' ? 'opacity-20' : 'opacity-60'}`} />
        <img 
          src="/assets/simulation/egyptian-home.jpg" 
          className="w-full h-full object-cover scale-105"
          alt="بيت مصري أصيل"
        />
      </div>

      {/* واجهة المحاكاة التفاعلية */}
      <main className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4">
        
        <AnimatePresence mode="wait">
          {gameState === 'waiting' && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-center"
            >
              <div className="mb-6 p-4 border-2 border-yellow-600 bg-black/40 backdrop-blur-md rounded-lg">
                <p className="text-xl md:text-2xl font-serif text-yellow-500 italic">
                  "التلفاز مشوش.. العائلة صامتة.. والقلوب تدق ترقباً.."
                </p>
              </div>
              <button 
                onClick={startSim}
                className="group relative px-8 py-4 bg-yellow-700 hover:bg-yellow-600 transition-all rounded-full border-b-4 border-yellow-900 active:border-0"
              >
                <span className="text-xl font-bold">المس التلفاز لاستقبال الإشارة الملكية</span>
              </button>
            </motion.div>
          )}

          {gameState === 'announcement' && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center"
            >
              {/* شاشة تلفاز افتراضية تظهر خطاب المفتي */}
              <div className="w-full max-w-2xl aspect-video bg-gray-900 border-8 border-stone-800 rounded-lg shadow-[0_0_50px_rgba(234,179,8,0.3)] flex items-center justify-center overflow-hidden relative">
                 <div className="absolute inset-0 scanline opacity-20" />
                 {/* هنا نضع الفيديو الخاص بالمفتي */}
                 <p className="text-yellow-500 animate-pulse text-xl">جاري الاتصال بدار الإفتاء...</p>
                 
                 {/* زر مؤقت للمحاكاة حتى نربط الفيديو */}
                 <button 
                  onClick={() => setGameState('celebration')}
                  className="absolute bottom-4 right-4 text-xs underline"
                 >
                   تخطي للإعلان
                 </button>
              </div>
            </motion.div>
          )}

          {gameState === 'celebration' && (
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center"
            >
              <h1 className="text-6xl md:text-9xl font-black text-yellow-500 drop-shadow-2xl mb-6">
                رمضان كريم
              </h1>
              <p className="text-2xl text-white mb-8">الفرحة بدأت.. عائلتك بانتظارك على السفرة</p>
              
              <motion.button 
                whileHover={{ scale: 1.1 }}
                className="px-10 py-5 bg-gradient-to-r from-yellow-600 to-yellow-400 text-black font-black rounded-xl"
              >
                الدخول لشارع المعز الآن
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <style jsx>{`
        .scanline {
          background: linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.5) 51%);
          background-size: 100% 4px;
        }
      `}</style>
    </div>
  );
};

export default RamadanSimulation;
