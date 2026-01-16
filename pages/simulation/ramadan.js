import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';

const RamadanWithAdam = () => {
  const [step, setStep] = useState(1);
  const [speech, setSpeech] = useState("");

  // نصوص آدم في كل مرحلة
  const adamMessages = {
    1: "يا ملكة نفرتيتي، العيلة كلها مستنية المفتي.. يا ترى رمضان بكره؟",
    2: "الشارع نور! شوفي البنات والأولاد بالفوانيس.. رمضان جانا!",
    3: "حي على الصلاة.. خشوع التراويح في مصر ملوش زي، يلا ندعي سوا."
  };

  // وظيفة نطق آدم للكلام تلقائياً
  const speak = (text) => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      const msg = new SpeechSynthesisUtterance(text);
      msg.lang = 'ar-EG';
      msg.pitch = 1.3;
      window.speechSynthesis.speak(msg);
    }
  };

  useEffect(() => {
    setSpeech(adamMessages[step]);
    speak(adamMessages[step]);
  }, [step]);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden font-serif">
      <Head>
        <title>رمضان مع آدم | أكاديمية نفرتيتي</title>
      </Head>

      {/* --- أفاتار آدم (ثابت ويتحرك بمرونة) --- */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="fixed bottom-10 right-10 z-50 flex flex-col items-center"
      >
        <div className="bg-white text-black p-3 rounded-2xl rounded-br-none mb-3 shadow-2xl border-2 border-yellow-500 max-w-[180px] text-center">
          <p className="text-xs font-bold">{speech}</p>
        </div>
        <img 
          src="/assets/characters/adam-hero.png" 
          alt="آدم" 
          className="w-32 md:w-48 drop-shadow-[0_0_20px_rgba(234,179,8,0.6)] rounded-full border-4 border-yellow-600"
        />
      </motion.div>

      <AnimatePresence mode="wait">
        {/* المشهد 1: بيت العائلة */}
        {step === 1 && (
          <motion.div key="1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-screen relative flex items-center justify-center">
            <img src="/assets/simulation/family-waiting.jpg" className="absolute inset-0 w-full h-full object-cover opacity-60" />
            <div className="z-10 text-center bg-black/40 backdrop-blur-md p-10 rounded-3xl border border-yellow-600">
              <h1 className="text-4xl text-yellow-500 mb-6 drop-shadow-lg">لحظة الرؤية</h1>
              <button onClick={() => setStep(2)} className="bg-yellow-600 hover:bg-yellow-500 text-black px-10 py-3 rounded-full font-black transition-all shadow-lg">
                أعلنوا الرؤية.. انطلق!
              </button>
            </div>
          </motion.div>
        )}

        {/* المشهد 2: الشارع والزينة */}
        {step === 2 && (
          <motion.div key="2" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} className="h-screen relative flex items-center justify-center">
            <img src="/assets/simulation/egyptian-street.jpg" className="absolute inset-0 w-full h-full object-cover opacity-50" />
            <div className="z-10 text-center">
              <h2 className="text-5xl font-black text-yellow-500 mb-10 shadow-black">بهجة الشارع المصري</h2>
              <div className="flex gap-4 justify-center">
                 <button onClick={() => setStep(3)} className="bg-yellow-600 text-black px-12 py-4 rounded-2xl font-bold text-xl hover:scale-105 transition-all">
                   صوت التراويح بدأ 🕌
                 </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* المشهد 3: المسجد والدعاء */}
        {step === 3 && (
          <motion.div key="3" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="h-screen relative flex items-center justify-center text-center">
            <img src="/assets/simulation/mosque-light.webp" className="absolute inset-0 w-full h-full object-cover opacity-40" />
            <div className="z-10 max-w-2xl px-6">
              <h3 className="text-6xl text-yellow-500 mb-6 italic">السكينة والروحانية</h3>
              <p className="text-2xl text-gray-200 leading-relaxed mb-8">"اللهم بارك لنا في رمضان، واجعله شهر خير وبركة على أكاديمية نفرتيتي وكل طلابنا."</p>
              <button onClick={() => setStep(1)} className="text-yellow-600 underline text-lg">العودة للبيت</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RamadanWithAdam;
