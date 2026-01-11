"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Trophy, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CoreLearningChallenges() {
  const [step, setStep] = useState(1); // 1: اختيار الهدف، 2: التحدي، 3: النتيجة
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // رسائل الملكة بناءً على المستوى والهدف
  const queenMessages = {
    step1: "اختر هدفك بعناية يا بطل، فأنا سأرشدك في كل خطوة.",
    step2: "هذا التحدي مصمم خصيصاً لمستواك.. أرني ذكاءك!",
    success: "أذهلتني! تقدمك سريع جداً، تماماً كما توقعت.",
    error: "العثرات هي وقود النجاح، الملكة تثق بقدرتك على المحاولة."
  };

  return (
    <div className="min-h-screen bg-[#050c16] text-white rtl" dir="rtl">
      
      {/* الجزء العلوي: الأفاتار الملكي الثابت كمرافق */}
      <div className="sticky top-0 z-50 bg-[#050c16]/80 backdrop-blur-md p-6 border-b border-gold-500/20">
        <div className="max-w-4xl mx-auto flex items-center gap-6">
          <motion.div 
            animate={status === 'success' ? { rotate: [0, 10, -10, 0], scale: 1.1 } : {}}
            className="relative"
          >
            <div className="absolute inset-0 bg-gold-500 blur-xl opacity-20 animate-pulse rounded-full" />
            <img 
              src="/nefertiti-avatar.png" 
              alt="Nefertiti Avatar" 
              className="w-20 h-20 rounded-full border-2 border-gold-500 relative z-10"
            />
          </motion.div>
          
          <div>
            <h2 className="text-gold-400 font-black italic text-lg">نفرتيتي ترشدك:</h2>
            <p className="text-gray-300 font-bold transition-all duration-500">
              {status === 'success' ? queenMessages.success : 
               status === 'error' ? queenMessages.error : 
               step === 1 ? queenMessages.step1 : queenMessages.step2}
            </p>
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto p-8">
        {/* المرحلة الأولى: اختيار الهدف والمستوى (تظهر للطالب الجديد) */}
        {step === 1 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
            <h1 className="text-3xl font-black text-center mb-12">حدد مسارك في الأكاديمية</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PathCard 
                title="إتقان لهجة المحروسة" 
                desc="للراغبين في العيش والعمل في مصر" 
                icon={<Star className="text-gold-500" />}
                onClick={() => setStep(2)}
              />
              <PathCard 
                title="تحدي مجلس الخليج" 
                desc="للتواصل الفعال مع أهل الخليج" 
                icon={<Trophy className="text-gold-500" />}
                onClick={() => setStep(2)}
              />
            </div>
          </motion.div>
        )}

        {/* المرحلة الثانية: التحديات الفعلية (بعد اختيار الهدف) */}
        {step === 2 && (
          <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="bg-white/5 p-10 rounded-[40px] border border-white/10">
            <div className="flex justify-between items-center mb-10">
              <span className="bg-gold-500 text-black px-4 py-1 rounded-full text-xs font-black">مستوى: مبتدئ</span>
              <div className="flex gap-1 text-gold-500"><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16}/></div>
            </div>

            <h3 className="text-2xl font-bold mb-8">كيف تقول "أنا جائع جداً" بلهجة أهل القاهرة؟</h3>
            
            <div className="grid gap-4">
              <AnswerButton text="أنا ميت من الجوع" isCorrect onClick={() => setStatus('success')} />
              <AnswerButton text="أنا عايز آكل كتير" onClick={() => setStatus('error')} />
              <AnswerButton text="أنا شبعان أوي" onClick={() => setStatus('error')} />
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}

// مكونات فرعية بلمسة ملكية
function PathCard({ title, desc, icon, onClick }: any) {
  return (
    <button onClick={onClick} className="p-8 bg-white/5 border border-white/10 rounded-[30px] text-right hover:border-gold-500/50 hover:bg-gold-500/5 transition-all group">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-black mb-2 group-hover:text-gold-400">{title}</h3>
      <p className="text-gray-400 text-sm italic">{desc}</p>
    </button>
  );
}

function AnswerButton({ text, onClick }: any) {
  return (
    <button onClick={onClick} className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl text-right font-bold hover:bg-white/10 hover:border-gold-500/30 transition-all flex justify-between items-center group">
      {text}
      <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 -rotate-180 transition-all" />
    </button>
  );
}
