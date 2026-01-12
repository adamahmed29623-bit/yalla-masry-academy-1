'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export const VoiceChallenge = ({ sentence }: { sentence: string }) => {
  const [isRecording, setIsRecording] = useState(false);

  // 1. وظيفة نطق Gemini (المعلمة)
  const speakAsGemini = () => {
    const utterance = new SpeechSynthesisUtterance(sentence);
    utterance.lang = 'ar-EG'; // اللكنة المصرية الفخمة
    utterance.pitch = 1.1; 
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="p-8 border-2 border-royal-gold rounded-xl bg-white/50 backdrop-blur-sm">
      <h2 className="text-2xl font-headline text-nile-blue mb-4">تحدي النطق الملكي</h2>
      <p className="text-xl mb-6 text-center font-body">{sentence}</p>
      
      <div className="flex justify-center gap-4">
        {/* زر الاستماع للمعلمة */}
        <button 
          onClick={speakAsGemini}
          className="bg-nile-blue text-white p-4 rounded-full hover:scale-110 transition-transform"
        >
          🔊 اسمعي المعلمة
        </button>

        {/* زر تسجيل الطالبة */}
        <button 
          onMouseDown={() => setIsRecording(true)}
          onMouseUp={() => setIsRecording(false)}
          className={`p-4 rounded-full transition-all ${isRecording ? 'bg-red-500 animate-pulse' : 'bg-royal-gold'}`}
        >
          🎤 انطقي الآن
        </button>
      </div>
    </div>
  );
};
