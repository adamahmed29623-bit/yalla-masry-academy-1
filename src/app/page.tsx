import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#002366] text-[#D4AF37] font-sans selection:bg-[#D4AF37] selection:text-[#002366]">
      {/* 🌟 الهيدر الملكي */}
      <nav className="flex justify-between items-center p-6 border-b border-[#D4AF37]/20 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-full border-2 border-[#D4AF37] overflow-hidden">
             {/* تأكدي من وضع صورة نفرتيتي في مجلد public باسم nefertiti.png */}
            <Image src="/nefertiti.png" alt="نفرتيتي" fill className="object-cover" />
          </div>
          <h1 className="text-2xl font-bold tracking-widest uppercase">يلا مصري نفرتيتي</h1>
        </div>
        <div className="hidden md:flex gap-8 font-medium">
          <Link href="#about" className="hover:text-white transition-colors">عن الأكاديمية</Link>
          <Link href="#safety" className="hover:text-white transition-colors">مملكة الأمان</Link>
          <Link href="/login" className="px-6 py-2 border border-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-[#002366] transition-all">دخول الملكات</Link>
        </div>
      </nav>

      {/* 👑 قسم البطولة (Hero Section) */}
      <section className="relative h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* خلفية النيل السحرية */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#002366]"></div>
          {/* هنا يمكن إضافة صورة تعبيرية للنيل */}
        </div>

        <div className="z-10 max-w-4xl space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <h2 className="text-4xl md:text-7xl font-extrabold leading-tight">
            مرحباً بكِ أيتها <span className="text-white drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]">الفرعونة القوية</span> <br/>
            في مملكة اللهجة المصرية
          </h2>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed italic">
            "بصي يا ملكة.. هقولك من الآخر، هنا مش مجرد مدرسة، هنا بيتك الآمن اللي هيطلع سر القوة اللي جواكي وجوا أطفالك بالحب والجدعنة المصرية."
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10">
            <Link href="/register" className="px-10 py-4 bg-[#D4AF37] text-[#002366] text-xl font-bold rounded-full shadow-[0_0_20px_rgba(212,175,55,0.5)] hover:scale-105 transition-transform">
              ابدئي رحلتكِ الملكية الآن
            </Link>
            <Link href="#features" className="px-10 py-4 border-2 border-[#D4AF37] text-[#D4AF37] text-xl font-bold rounded-full hover:bg-[#D4AF37]/10 transition-colors">
              اكتشفي سر القوة
            </Link>
          </div>
        </div>

        {/* أيقونة الأنخ (مفتاح الحياة) كديكور خلفي */}
        <div className="absolute bottom-10 right-10 opacity-10 pointer-events-none">
          <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2A5,5 0 0,0 7,7C7,8.6 7.7,10 8.9,11C7.1,11.5 5.7,12.6 4.8,14.1C3.9,15.6 3.5,17.2 3.5,19A1,1 0 0,0 4.5,20H19.5A1,1 0 0,0 20.5,19C20.5,17.2 20.1,15.6 19.2,14.1C18.3,12.6 16.9,11.5 15.1,11C16.3,10 17,8.6 17,7A5,5 0 0,0 12,2M12,4A3,3 0 0,1 15,7A3,3 0 0,1 12,10A3,3 0 0,1 9,7A3,3 0 0,1 12,4Z" />
          </svg>
        </div>
      </section>

      {/* 🛡️ قسم الأمان النسائي */}
      <section className="bg-white/5 py-20 px-6" id="safety">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-4xl font-bold mb-6">ليه أكاديمية نفرتيتي؟</h3>
            <ul className="space-y-6 text-lg text-white/90">
              <li className="flex items-start gap-4">
                <span className="text-2xl">✨</span>
                <p><strong>بيئة نسائية خالصة:</strong> المعلمات والطلاب نساء وأطفال بس، عشان تاخدي راحتك وتطمني على ولادك.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl">🛡️</span>
                <p><strong>أمان مش محتاج كلام:</strong> حماية كاملة ضد أي محاولات اختراق أو سلوكيات مش مظبوطة، إحنا هنا عيلة واحدة.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl">🧡</span>
                <p><strong>الروح المصرية:</strong> بنعلم ولادنا بجدعنة ودفا، وبنصدر الصورة الحقيقية لجمال بلدنا.</p>
              </li>
            </ul>
          </div>
          <div className="relative h-96 rounded-2xl border-2 border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.2)] overflow-hidden">
             <Image src="/egypt-warmth.jpg" alt="الدفء المصري" fill className="object-cover opacity-80" />
          </div>
        </div>
      </section>

      {/* 🏺 التذييل الملكي */}
      <footer className="p-10 text-center border-t border-[#D4AF37]/20">
        <p className="opacity-60">© 2026 أكاديمية يلا مصري نفرتيتي - جميع الحقوق ملك للملكات</p>
      </footer>
    </div>
  );
}
