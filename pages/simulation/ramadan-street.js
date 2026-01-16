import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

const RamadanStreet = () => {
  const [activeSpot, setActiveSpot] = useState(null);

  // الأماكن التفاعلية في الشارع بناءً على رؤيتك
  const spots = [
    { id: 'mosque', name: 'المسجد الكبير', icon: '🕌', msg: 'صوت التواشيح والسكينة.. هنا تبدأ صلاة التراويح.' },
    { id: 'sweets', name: 'بياع الكنافة', icon: '🧁', msg: 'ريحة الكنافة البلدي والقطايف.. أحلى تحلية في الدنيا!' },
    { id: 'kids', name: 'لعب الأطفال', icon: '🏮', msg: 'البنات والأولاد بالفوانيس والبومب.. فرحة لا تنتهي!' },
    { id: 'mesaharati', name: 'المسحراتي', icon: '🥁', msg: 'إصحى يا نايم وحد الدايم.. لسه في بالدنيا خير.' }
  ];

  return (
    <div className="min-h-screen bg-indigo-950 text-white relative overflow-hidden">
      <Head>
        <title>المحاكاة | شارع الفرحة والمسجد</title>
      </Head>

      {/* الخلفية: صورة الشارع المصري والمسجد التي أرسلتِها */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/simulation/egyptian-street.jpg" 
          className="w-full h-full object-cover opacity-60"
          alt="الشارع المصري في رمضان"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/40 via-transparent to-black" />
      </div>

      {/* الرمز الكرتوني "آدم" - يوجه الطالب في الشارع */}
      <div className="fixed bottom-10 left-5 z-50 w-28 md:w-40">
        <img src="/assets/characters/adam-avatar.png" alt="آدم" className="w-full" />
        <div className="bg-yellow-500 text-black p-2 rounded-lg text-xs font-bold mt-2 shadow-lg">
           "يا بطل، دوس على أي حاجة في الشارع عشان تعيش الفرحة معايا!"
        </div>
      </div>

      <main className="relative z-10 flex flex-col items-center justify-start pt-20 px-4 min-h-screen">
        <motion.h1 
          initial={{ y: -50 }} animate={{ y: 0 }}
          className="text-3xl md:text-5xl font-royal text-yellow-500 text-center mb-12 drop-shadow-xl"
        >
          حارة الأكاديمية: فرحة، رحمة، وتكافل
        </motion.h1>

        {/* نقاط التفاعل في الشارع */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-5xl mt-20">
          {spots.map((spot) => (
            <motion.div
              key={spot.id}
              whileHover={{ scale: 1.1, rotate: 2 }}
              onClick={() => setActiveSpot(spot)}
              className="cursor-pointer group flex flex-col items-center"
            >
              <div className="w-20 h-20 md:w-28 md:h-28 bg-yellow-600/20 backdrop-blur-xl border-2 border-yellow-500 rounded-full flex items-center justify-center text-4xl shadow-[0_0_20px_rgba(234,179,8,0.4)] group-hover:bg-yellow-500 transition-colors">
                {spot.icon}
              </div>
              <span className="mt-4 font-bold text-yellow-500">{spot.name}</span>
            </motion.div>
          ))}
        </div>

        {/* صندوق الحوار الملكي عند التفاعل */}
        {activeSpot && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="mt-12 p-6 bg-black/60 border-2 border-yellow-600 rounded-2xl max-w-md text-center backdrop-blur-md shadow-2xl"
          >
            <h3 className="text-yellow-400 text-xl font-bold mb-2">{activeSpot.name}</h3>
            <p className="text-white leading-relaxed">{activeSpot.msg}</p>
            <button 
              onClick={() => setActiveSpot(null)}
              className="mt-4 text-xs text-yellow-600 border border-yellow-600 px-3 py-1 rounded-full"
            >
              اكتشف المزيد في الشارع
            </button>
          </motion.div>
        )}
      </main>

      <style jsx>{`
        .font-royal { font-family: 'Amiri', serif; }
      `}</style>
    </div>
  );
};

export default RamadanStreet;
