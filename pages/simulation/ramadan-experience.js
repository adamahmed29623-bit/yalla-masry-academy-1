import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// --- إعدادات Firebase الملكية (مدمجة لضمان العمل على هوستنجر) ---
const firebaseConfig = {
  apiKey: "AIzaSy...", // استبدليها ببياناتك من Firebase Console
  authDomain: "yalla-masry-academy.firebaseapp.com",
  projectId: "yalla-masry-academy", // تأكدي أن هذا الاسم مطابق لمشروعك
  storageBucket: "yalla-masry-academy.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

const RamadanSimulation = () => {
  const [step, setStep] = useState(1); // 1: الرؤية، 2: الشارع، 3: المسجد
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return null;

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden font-sans">
      <Head>
        <title>محاكاة رمضان | أكاديمية نفرتيتي</title>
      </Head>

      {/* --- الأفاتار "آدم" المرشد (ثابت في كل المشاهد) --- */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="fixed bottom-6 left-6 z-50 w-28 md:w-40 drop-shadow-[0_0_15px_rgba(234,179,8,0.4)]"
      >
        <div className="relative">
          <img src="/assets/characters/adam-avatar.png" alt="آدم" className="w-full" />
          <div className="absolute -top-20 left-0 bg-yellow-500 text-black p-3 rounded-2xl rounded-bl-none shadow-2xl border-2 border-white">
            <p className="text-[10px] md:text-xs font-bold leading-tight">
              {step === 1 && "يا ملكة نفرتيتي، العيلة كلها مستنية المفتي.. يا ترى رمضان بكره؟"}
              {step === 2 && "الشارع نور! شوفي البنات والأولاد بالفوانيس.. رمضان جانا!"}
              {step === 3 && "حي على الصلاة.. خشوع التراويح في مصر ملوش زي."}
            </p>
          </div>
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {/* --- المشهد الأول: لحظة الرؤية في البيت --- */}
        {step === 1 && (
          <motion.div 
            key="step1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="relative h-screen flex items-center justify-center text-center px-4"
          >
            <div className="absolute inset-0 z-0">
              <img src="/assets/simulation/family-waiting.jpg" className="w-full h-full object-cover opacity-60" alt="انتظار الرؤية" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
            </div>
            
            <div className="relative z-10 max-w-2xl bg-black/40 backdrop-blur-md p-8 rounded-3xl border-2 border-yellow-600">
              <h1 className="text-3xl md:text-5xl font-serif text-yellow-500 mb-6">ترقب الرؤية الملكية</h1>
              <p className="text-lg mb-8 italic text-gray-200">صوت الراديو، صمت العائلة، ودقات القلوب..</p>
              <button 
                onClick={() => setStep(2)}
                className="bg-gradient-to-r from-yellow-700 to-yellow-500 px-12 py-4 rounded-full font-black text-xl hover:scale-105 transition-all shadow-[0_0_20px_rgba(212,175,55,0.5)]"
              >
                أعلنوا الرؤية.. انطلق للفرحة!
              </button>
            </div>
          </motion.div>
        )}

        {/* --- المشهد الثاني: احتفال الشارع (بنات وأولاد وفوانيس) --- */}
        {step === 2 && (
          <motion.div 
            key="step2" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }} transition={{ type: "spring", damping: 20 }}
            className="relative h-screen flex items-center justify-center px-4"
          >
            <div className="absolute inset-0 z-0">
              <img src="/assets/simulation/egyptian-street.jpg" className="w-full h-full object-cover opacity-50" alt="الشارع المصري" />
            </div>

            <div className="relative z-10 w-full max-w-5xl">
              <h2 className="text-4xl md:text-6xl text-yellow-500 text-center mb-12 font-black drop-shadow-2xl">شارع الفرحة</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {/* تفاعل الأطفال */}
                <div className="p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-yellow-500/30 text-center">
                  <span className="text-4xl">🏮</span>
                  <h3 className="font-bold mt-2">البنات والأولاد</h3>
                  <p className="text-[10px] mt-1 text-gray-300">"وحوي يا وحوي.. إياحا!"</p>
                </div>
                {/* بياع الكنافة */}
                <div className="p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-yellow-500/30 text-center">
                  <span className="text-4xl">🧁</span>
                  <h3 className="font-bold mt-2">بياع الكنافة</h3>
                  <p className="text-[10px] mt-1 text-gray-300">ريحة زمان والخير والبركة</p>
                </div>
                {/* زر الانتقال للمسجد */}
                <div className="col-span-2 md:col-span-1 flex items-center justify-center">
                   <button 
                    onClick={() => setStep(3)}
                    className="w-full h-full bg-yellow-600 hover:bg-yellow-500 rounded-2xl font-black text-black text-xl shadow-lg"
                   >
                     صوت الأذان 🕌
                   </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* --- المشهد الثالث: المسجد والدعاء --- */}
        {step === 3 && (
          <motion.div 
            key="step3" initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }}
            className="relative h-screen flex flex-col items-center justify-center text-center px-4"
          >
            <div className="absolute inset-0 z-0">
              <img src="/assets/simulation/mosque-light.webp" className="w-full h-full object-cover opacity-40" alt="المسجد" />
              <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="relative z-10">
              <h3 className="text-4xl md:text-7xl font-royal text-yellow-500 mb-8 italic">روحانية التراويح</h3>
              <p className="max-w-xl mx-auto text-lg md:text-2xl leading-relaxed text-gray-200 mb-12">
                "اللهم بلغنا رمضان، واجعلنا فيه من المقبولين.."
                <br/> <span className="text-sm mt-4 block text-yellow-600">هنا في المسجد، ننسى الدنيا ونناجي رب العباد</span>
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <button onClick={() => setStep(1)} className="px-8 py-3 border-2 border-yellow-600 rounded-full text-yellow-500 font-bold hover:bg-yellow-600 hover:text-black transition-all">
                  إعادة الرحلة
                </button>
                <button className="px-8 py-3 bg-green-700 rounded-full text-white font-bold animate-pulse">
                  استمع للدعاء 🤲
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,700;1,700&display=swap');
        .font-royal { font-family: 'Amiri', serif; }
      `}</style>
    </div>
  );
};

export default RamadanSimulation;
