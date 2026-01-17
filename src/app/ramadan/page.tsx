"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Star, MapPin, Sparkles } from 'lucide-react';

export default function RamadanAcademyPage() {
  const [step, setStep] = useState(1);
  const [speech, setSpeech] = useState("");

  const scenes = {
    1: { 
      title: "لحظة الرؤية", 
      desc: "العيلة كلها متجمعة مستنية المفتي.. يا ترى رمضان بكره؟", 
      bg: "/assets/simulation/family-waiting.jpg",
      adam: "يا ملكة نفرتيتي، أنا متحمس جداً! تفتكري الهلال هيظهر الليلة؟"
    },
    2: { 
      title: "بهجة الشارع", 
      desc: "الفوانيس نورت والزينة مالت في كل حتة.. رمضان جانا!", 
      bg: "/assets/simulation/egyptian-street.jpg",
      adam: "الله! شوفي يا ملكة الأنوار.. الشارع المصري ملوش زي في الدنيا!"
    },
    3: { 
      title: "سكينة التراويح", 
      desc: "صوت الصلاة في المساجد بيملى الدنيا راحة وطمأنينة.", 
      bg: "/assets/simulation/mosque-light.webp",
      adam: "حي على الصلاة.. يلا ندعي سوا للأكاديمية ولكل الطلاب بالنجاح."
    }
  };

  useEffect(() => {
    setSpeech(scenes[step as keyof typeof scenes].adam);
  }, [step]);

  return (
    <div className="min-h-screen bg-[#050505] text-white relative overflow-hidden font-serif">
      {/* الخلفية المتغيرة */}
      <AnimatePresence mode="wait">
        <motion.div key={step} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black z-10" />
          <img src={scenes[step as keyof typeof scenes].bg} className="w-full h-full object-cover opacity-50" alt="Background" />
        </motion.div>
      </AnimatePresence>

      {/* المحتوى الرئيسي */}
      <div className="relative z-20 container mx-auto px-6 pt-24 text-center">
        <motion.div initial={{ y: -50 }} animate={{ y: 0 }} className="mb-12">
          <h1 className="text-6xl font-black text-yellow-500 mb-4 drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]">
            {scenes[step as keyof typeof scenes].title}
          </h1>
          <p className="text-2xl text-gray-200 italic">{scenes[step as keyof typeof scenes].desc}</p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10">
          {[1, 2, 3].map((i) => (
            <button key={i} onClick={() => setStep(i)} className={`w-12 h-12 rounded-full border-2 transition-all ${step === i ? 'bg-yellow-600 border-yellow-300 scale-125' : 'border-yellow-900 text-yellow-800'}`}>
              {i}
            </button>
          ))}
        </div>
      </div>

      {/* 👑 شخصية آدم (صورة جلالتك التي أرسلتِها) */}
      <motion.div drag className="fixed bottom-8 right-8 z-50 flex flex-col items-center">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="bg-white text-black p-4 rounded-2xl rounded-br-none mb-4 shadow-2xl border-2 border-yellow-500 max-w-[200px]">
          <p className="text-sm font-bold text-right leading-relaxed">{speech}</p>
        </motion.div>
        
        <div className="relative group">
          <div className="absolute -inset-2 bg-yellow-500 rounded-full blur opacity-20 group-hover:opacity-60 transition duration-1000"></div>
          <img 
            src="/assets/characters/adam-hero.png" 
            className="relative w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-yellow-600 shadow-2xl object-cover" 
            alt="Adam" 
          />
        </div>
      </motion.div>
    </div>
  );
}
