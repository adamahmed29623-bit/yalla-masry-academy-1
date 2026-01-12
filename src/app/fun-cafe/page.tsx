'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// بيانات النكت والكوميكس الأولية
const jokes = [
  {
    id: 1,
    content: "مرة واحد مصري سافر أمريكا، لقى الناس هناك بيتكلموا إنجليزي، قالهم: يا جماعة والله العظيم اللغة دي سهلة أوي، ده حتى العيال الصغيرة بيتكلموها بالفطرة!",
    type: "نكتة",
    emoji: "🤣"
  },
  {
    id: 2,
    content: "المدرس: أين يوجد البحر الأحمر؟ الطالب: على الخريطة يا أستاذ.. المدرس: إجابة نموذجية، بس روح هات ولي أمرك بقى!",
    type: "موقف مضحك",
    emoji: "🏫"
  }
];

export default function FunCafe() {
  const [selectedJoke, setSelectedJoke] = useState(jokes[0]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  // وظيفة محاكاة تقييم خفة الدم عبر Gemini
  const analyzeHumor = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setScore(Math.floor(Math.random() * (10 - 8 + 1)) + 8); // تقييم ملكي مشجع
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#FFFDF0] font-body">
      {/* العنوان الملكي الفرفوش */}
      <header className="py-12 bg-gradient-to-b from-royal-gold/20 to-transparent text-center">
        <motion.h1 
          initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          className="text-5xl md:text-6xl font-headline text-nile-blue"
        >
          قهوة الفرفشة الملكية ☕
        </motion.h1>
        <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto px-4">
          اضحكي من قلبك مع "نكت فرز أول" وتعلمي سر خفة الدم المصرية مع المعلمة نفرتيتي الذكية.
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 py-12">
        
        {/* قسم عرض النكتة الحالية */}
        <section className="space-y-8">
          <div className="flex items-center gap-3 border-b-2 border-royal-gold pb-2">
            <span className="text-3xl">🎭</span>
            <h2 className="text-2xl font-headline text-nile-blue">نكتة الساعة</h2>
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={selectedJoke.id}
              initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -50, opacity: 0 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-xl border-2 border-nile-blue/5 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 p-6 text-6xl opacity-10 select-none">”</div>
              <p className="text-2xl font-body text-right leading-loose text-gray-800">
                {selectedJoke.content}
              </p>
              <div className="mt-8 flex justify-between items-center">
                <span className="bg-royal-gold/10 text-royal-gold px-4 py-1 rounded-full text-sm font-bold">
                  {selectedJoke.type}
                </span>
                <span className="text-4xl">{selectedJoke.emoji}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          <button 
            onClick={() => setSelectedJoke(jokes[Math.floor(Math.random() * jokes.length)])}
            className="w-full py-4 bg-nile-blue text-white rounded-2xl font-bold text-lg hover:bg-black transition-colors shadow-lg"
          >
            نكتة تانية يا جلالة الملكة 🎲
          </button>
        </section>

        {/* قسم تحدي خفة الدم (Speech to Humor) */}
        <section className="bg-white p-8 rounded-[3rem] shadow-2xl border-2 border-royal-gold relative">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-headline text-nile-blue mb-2">تحدي "إنتِ شربات" 🍯</h3>
            <p className="text-gray-500 font-body">قولي نكتة بصوتك وخلي Gemini يقيّم خفة دمك!</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-6 py-10">
            <motion.button 
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
              onClick={analyzeHumor}
              className={`w-24 h-24 rounded-full flex items-center justify-center text-4xl shadow-xl transition-all ${isAnalyzing ? 'bg-red-500 animate-pulse' : 'bg-royal-gold text-white'}`}
            >
              {isAnalyzing ? '⌛' : '🎤'}
            </motion.button>
            
            <AnimatePresence>
              {score && !isAnalyzing && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  className="text-center"
                >
                  <div className="text-5xl font-headline text-royal-gold mb-2">{score}/10</div>
                  <p className="font-body text-xl text-nile-blue">
                    ما شاء الله! إنتِ "دمك زي العسل" وتستحقي لقب **أميرة البهجة**. ✨
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-8 p-4 bg-nile-blue/5 rounded-2xl border border-dashed border-nile-blue/20">
            <p className="text-sm font-body text-center text-nile-blue/60 italic">
              ملاحظة: المعلمة نفرتيتي بتحب الهزار، بس بلاش نكت قديمة أوي هههه!
            </p>
          </div>
        </section>
      </main>

      {/* ركن الكوميكس المصري */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-headline text-nile-blue mb-8 text-right">معرض الكوميكس الملكي 🖼️</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-square bg-gray-200 rounded-2xl border-4 border-white shadow-md overflow-hidden hover:rotate-2 transition-transform cursor-pointer">
              <div className="w-full h-full flex items-center justify-center text-gray-400 font-body">
                صورة كوميك {i}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
