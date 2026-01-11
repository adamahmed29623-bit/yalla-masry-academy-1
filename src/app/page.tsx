import React from 'react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0A0F1E] text-white">
      {/* قسم الترحيب الملكي */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A237E]/30 to-black z-0"></div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-[#C5A059] mb-6 drop-shadow-2xl">
            أكاديمية يلا مصري
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 italic mb-10 max-w-3xl mx-auto">
            حيث تلتقي فخامة اللغة برقيّ الثقافة المصرية
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-[#C5A059] hover:bg-[#A38241] text-black font-bold py-4 px-12 rounded-full text-xl transition-all transform hover:scale-105 shadow-xl">
              ابدئي رحلتكِ الملكية
            </button>
          </div>
        </div>
      </section>

      {/* قسم أركان الأكاديمية */}
      <section className="py-20 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="p-10 rounded-3xl border border-[#C5A059]/20 bg-[#1A237E]/10">
            <div className="text-5xl mb-6">📖</div>
            <h3 className="text-2xl font-bold text-[#C5A059] mb-4">علوم القرآن</h3>
            <p className="text-gray-400">تلاوة وتجويد بأعلى معايير الإتقان</p>
          </div>
          <div className="p-10 rounded-3xl border border-[#C5A059]/20 bg-[#1A237E]/10 shadow-[0_0_30px_rgba(197,160,89,0.1)]">
            <div className="text-5xl mb-6">👑</div>
            <h3 className="text-2xl font-bold text-[#C5A059] mb-4">اللهجة الملكية</h3>
            <p className="text-gray-400">تحدثي المصرية بذكاء اجتماعي ورقيّ</p>
          </div>
          <div className="p-10 rounded-3xl border border-[#C5A059]/20 bg-[#1A237E]/10">
            <div className="text-5xl mb-6">📜</div>
            <h3 className="text-2xl font-bold text-[#C5A059] mb-4">السنة النبوية</h3>
            <p className="text-gray-400">منهج نبوي للحياة اليومية</p>
          </div>
        </div>
      </section>
    </main>
  );
}
