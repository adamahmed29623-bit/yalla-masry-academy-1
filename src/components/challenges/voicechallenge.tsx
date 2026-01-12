'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VoiceChallenge({ originalSentence }: { originalSentence: string }) {
  const [feedback, setFeedback] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // 1. وظيفة نطق الجملة (بصوت المعلمة)
  const playInstruction = () => {
    const msg = new SpeechSynthesisUtterance(originalSentence);
    msg.lang = 'ar-EG';
    window.speechSynthesis.speak(msg);
  };

  // 2. محاكاة إرسال الصوت لـ Gemini (الربط مع الـ API الذي أنشأناه)
  const handleFeedback = async (studentText: string) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/ai/challenge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ studentSpeech: studentText, originalSentence })
      });
      const data = await response.json();
      setFeedback(data.feedback);
    } catch (error) {
      setFeedback("عذراً ملكتي، حدث ارتباك في التواصل مع المعلمة.");
    }
    setIsLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-gradient-to-b from-white to-royal-gold/10 border-2 border-royal-gold shadow-2xl text-right">
      <h2 className="font-headline text-3xl text-nile-blue mb-6">تحدي صدى الملكات 👑</h2>
      
      <div className="bg-white p-6 rounded-2xl shadow-inner mb-8">
        <p className="text-2xl font-body text-gray-700 leading-relaxed">{originalSentence}</p>
      </div>

      <div className="flex justify-center gap-6 mb-8">
        {/* زر الاستماع */}
        <button 
          onClick={playInstruction}
          className="flex flex-col items-center gap-2 hover:scale-105 transition-transform"
        >
          <div className="w-16 h-16 bg-nile-blue rounded-full flex items-center justify-center text-white text-2xl shadow-lg">🔊</div>
          <span className="font-body text-sm">استمعي</span>
        </button>

        {/* زر التحدث */}
        <button 
          onMouseDown={() => setIsRecording(true)}
          onMouseUp={() => {
            setIsRecording(false);
            // هنا سنقوم بربط Speech Recognition لاحقاً
            handleFeedback(originalSentence); // تجربة مبدئية
          }}
          className="flex flex-col items-center gap-2 hover:scale-105 transition-transform"
        >
          <div className={`w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl shadow-xl transition-all ${isRecording ? 'bg-red-500 scale-110 animate-pulse' : 'bg-royal-gold'}`}>
            🎤
          </div>
          <span className="font-body text-sm font-bold">انطقي</span>
        </button>
      </div>

      {/* منطقة رد Gemini */}
      <AnimatePresence>
        {(isLoading || feedback) && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-2xl bg-nile-blue/5 border border-nile-blue/20 text-right"
          >
            {isLoading ? (
              <div className="flex justify-center items-center gap-3">
                <span className="animate-bounce font-body">المعلمة تفكر...</span>
                <div className="w-4 h-4 bg-royal-gold rounded-full animate-ping" />
              </div>
            ) : (
              <p className="font-body text-lg text-nile-blue leading-loose">{feedback}</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
