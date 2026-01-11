"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GulfCouncilPage() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // محاكاة إجابة الطالب
  const handleAnswer = (correct: boolean) => {
    setStatus(correct ? 'success' : 'error');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <div className="min-h-screen bg-[#061121] py-20 px-4 rtl" dir="rtl">
      
      {/* منطقة تشجيع الملكة نفرتيتي */}
      <div className="max-w-2xl mx-auto mb-16 text-center">
        <motion.div 
          animate={status === 'success' ? { scale: [1, 1.1, 1] } : {}}
          className="relative inline-block mb-6"
        >
          {/* هالة ضوئية خلف الأفاتار */}
          <div className={`absolute inset-0 rounded-full blur-3xl transition-all duration-500 ${status === 'success' ? 'bg-gold-500 opacity-40' : 'bg-blue-500 opacity-10'}`} />
          
          <img 
            src="/nefertiti-avatar.png" 
            alt="Queen Nefertiti" 
            className="w-48 h-48 rounded-full border-4 border-gold-500 shadow-2xl relative z-10 object-cover"
          />
        </motion.div>

        <h2 className="text-gold-400 text-2xl font-black mb-4 italic">
          {status === 'idle' && "أهلاً بك في مجلس المحروسة.. أرني شطارتك!"}
          {status === 'success' && "أبدعت يا بطل! وسام ملكي جديد لك."}
          {status === 'error' && "لا تحزن، فالعظمة تبدأ من المحاولة.."}
        </h2>
      </div>

      {/* منطقة التحدي */}
      <div className="max-w-xl mx-auto bg-white/5 border border-white/10 p-10 rounded-[50px] backdrop-blur-xl shadow-2xl">
        <p className="text-gray-400 text-sm mb-4 font-bold tracking-widest uppercase">التحدي الحالي</p>
        <h3 className="text-white text-3xl font-black mb-10">ما معنى كلمة "اشحقه" بالكويتي؟</h3>
        
        <div className="space-y-4">
          <button onClick={() => handleAnswer(true)} className="w-full p-6 bg-gold-500 text-black font-black rounded-2xl hover:bg-gold-400 transition-all text-xl">
            ليه؟ / عشان إيه؟
          </button>
          <button onClick={() => handleAnswer(false)} className="w-full p-6 bg-white/5 text-white font-bold rounded-2xl hover:bg-white/10 transition-all border border-white/10 text-xl">
            إزيك؟
          </button>
        </div>
      </div>

    </div>
  );
}
