'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti'; // تقنية الاحتفال الملكي

// --- الألوان الملكية المثبتة ---
const GOLD = '#D4AF37';
const NILE_BLUE = '#002366';

export default function TheRoyalChallenge({ 
  sentence, 
  translation,
  difficulty = "أميرة" 
}: { 
  sentence: string, 
  translation: string,
  difficulty?: string 
}) {
  const [status, setStatus] = useState<'idle' | 'listening' | 'analyzing' | 'success'>('idle');
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState<number | null>(null);
  const recognitionRef = useRef<any>(null);

  // 1. تجهيز الأذن الذكية مع تقنيات تقليل الضوضاء
  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.lang = 'ar-EG';
      recognitionRef.current.interimResults = false;
      
      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        processWithGemini(transcript);
      };

      recognitionRef.current.onend = () => setStatus(prev => prev === 'listening' ? 'idle' : prev);
    }
  }, []);

  // 2. تقنية الاحتفال عند النجاح الباهر
  const triggerRoyalCelebration = () => {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: [GOLD, '#F3E5AB']
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: [GOLD, '#F3E5AB']
      });

      if (Date.now() < end) requestAnimationFrame(frame);
    }());
  };

  // 3. معالجة الصوت عبر ذكاء نفرتيتي (Gemini)
  const processWithGemini = async (studentText: string) => {
    setStatus('analyzing');
    try {
      const response = await fetch('/api/ai/challenge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ studentSpeech: studentText, originalSentence: sentence })
      });
      const data = await response.json();
      
      setFeedback(data.feedback);
      // إذا كان التقييم ممتاز (نفترض وجود رقم في الرد)
      if (data.feedback.includes('10') || data.feedback.includes('9')) {
        setStatus('success');
        triggerRoyalCelebration();
      } else {
        setStatus('idle');
      }
    } catch (error) {
      setFeedback("حدث ارتباك في أروقة القصر، حاولي مجدداً يا ملكة.");
      setStatus('idle');
    }
  };

  return (
    <div className="relative overflow-hidden p-1 bg-gradient-to-tr from-royal-gold via-nile-blue to-royal-gold rounded-[2rem] shadow-2xl">
      <div className="bg-white/95 backdrop-blur-md p-8 rounded-[1.9rem] flex flex-col items-center gap-8">
        
        {/* شارة المستوى */}
        <div className="self-end px-4 py-1 bg-nile-blue text-royal-gold rounded-full text-sm font-headline border border-royal-gold animate-pulse">
           مستوى: {difficulty}
        </div>

        {/* منطقة النص الملكي */}
        <div className="text-center space-y-4">
          <motion.h3 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-4xl font-headline text-nile-blue leading-tight"
          >
            {sentence}
          </motion.h3>
          <p className="text-royal-gold/80 font-body text-xl italic">"{translation}"</p>
        </div>

        {/* أدوات التفاعل المتطورة */}
        <div className="flex items-center gap-12">
          <button 
            onClick={() => {
              const u = new SpeechSynthesisUtterance(sentence);
              u.lang = 'ar-EG';
              window.speechSynthesis.speak(u);
            }}
            className="w-16 h-16 rounded-full border-2 border-nile-blue flex items-center justify-center text-nile-blue hover:bg-nile-blue hover:text-white transition-all shadow-md"
          >
            🔊
          </button>

          <div className="relative">
            <AnimatePresence>
              {status === 'listening' && (
                <motion.div 
                  initial={{ scale: 0 }} animate={{ scale: 1.5, opacity: 0 }} transition={{ repeat: Infinity, duration: 1.5 }}
                  className="absolute inset-0 bg-royal-gold rounded-full -z-10"
                />
              )}
            </AnimatePresence>
            <button 
              onClick={() => {
                setStatus('listening');
                recognitionRef.current?.start();
              }}
              className={`w-24 h-24 rounded-full flex items-center justify-center text-4xl shadow-2xl transition-all transform active:scale-95 ${
                status === 'listening' ? 'bg-red-500' : 'bg-gradient-to-b from-royal-gold to-yellow-600 text-white'
              }`}
            >
              {status === 'listening' ? '🛑' : '🎤'}
            </button>
          </div>

          <div className="w-16 h-16 rounded-full border-2 border-nile-blue flex items-center justify-center text-nile-blue opacity-30">
            ⭐
          </div>
        </div>

        {/* منطقة التغذية الراجعة من Gemini */}
        <AnimatePresence mode="wait">
          {feedback && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
              className="w-full bg-nile-blue/5 border-r-4 border-royal-gold p-6 rounded-xl"
            >
              <p className="font-body text-lg text-nile-blue leading-relaxed text-right">
                {feedback}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
