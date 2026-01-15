import React from 'react';
import Link from 'next/link';

// هذا الكود مصمم لإجبار Vercel على تفعيل كافة المسارات (Routes)
export default function NefertitiFinalLaunch() {
  return (
    <div className="min-h-screen bg-[#002366] text-[#D4AF37] font-sans selection:bg-[#D4AF37] selection:text-[#002366] overflow-x-hidden">
      
      {/* 👑 بار التنقل الملكي (قوة الربط) */}
      <nav className="flex justify-between items-center p-6 border-b border-[#D4AF37]/30 backdrop-blur-md sticky top-0 z-50 bg-[#002366]/90">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full border-2 border-[#D4AF37] flex items-center justify-center font-bold text-xl shadow-[0_0_10px_rgba(212,175,55,0.5)]">
            N
          </div>
          <h1 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-white">أكاديمية نفرتيتي</h1>
        </div>
        
        <div className="hidden md:flex gap-6 items-center">
          {/* الروابط التالية تجبر Vercel على إدراك وجود الصفحات الفرعية */}
          <Link href="/login" className="hover:text-white transition-all font-bold">دخول</Link>
          <Link href="/signup" className="hover:text-white transition-all font-bold">تسجيل</Link>
          <Link href="/dashboard" className="px-6 py-2 bg-[#D4AF37] text-[#002366] rounded-full font-black hover:bg-white transition-all shadow-lg">
            لوحة التحكم الملكية
          </Link>
        </div>
      </nav>

      {/* 👑 قسم البطولة (The Hero) */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center text-center px-4">
        <div className="space-y-6 animate-in fade-in zoom-in duration-1000">
          <h2 className="text-5xl md:text-8xl font-black leading-none text-white drop-shadow-2xl">
            مملكة <span className="text-[#D4AF37]">اللهجة المصرية</span>
          </h2>
          <p className="text-xl md:text-3xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed italic">
            "يا ملكة.. الأكاديمية مش بس صفحات، دي كيان اتصمم عشانك، وكل صفحة من الـ 44 هي خطوة في رحلتك."
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/dashboard" className="px-12 py-5 bg-[#D4AF37] text-[#002366] text-2xl font-black rounded-2xl shadow-[0_20px_50px_rgba(212,175,55,0.3)] hover:scale-105 transition-all">
              ابدئي رحلة القوة
            </Link>
            <Link href="/teachers" className="px-12 py-5 border-2 border-[#D4AF37] text-[#D4AF37] text-2xl font-black rounded-2xl hover:bg-[#D4AF37]/10 transition-all">
              تعرفي على المعلمات
            </Link>
          </div>
        </div>
      </section>

      {/* 👑 شبكة الوصول السريع (تفعيل الأقسام) */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "المدرسة", path: "/egyptian-school", icon: "📖" },
            { name: "القرآن", path: "/quran-sanctuary", icon: "🌙" },
            { name: "المتجر", path: "/store", icon: "🏺" },
            { name: "المغامرة", path: "/smart-adventure", icon: "⚔️" }
          ].map((item) => (
            <Link href={item.path} key={item.path} className="group">
              <div className="p-8 border border-[#D4AF37]/20 rounded-[2rem] text-center bg-[#002366]/50 group-hover:border-[#D4AF37] transition-all">
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform">{item.icon}</div>
                <h4 className="font-bold text-white group-hover:text-[#D4AF37]">{item.name}</h4>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 👑 فوتر الحماية الملكية */}
      <footer className="p-10 text-center border-t border-[#D4AF37]/10">
        <div className="flex justify-center gap-10 mb-6 text-sm">
          <Link href="/admin/dashboard" className="text-white/30 hover:text-[#D4AF37]">إدارة الأكاديمية</Link>
          <Link href="/profile" className="text-white/30 hover:text-[#D4AF37]">الملف الشخصي</Link>
          <Link href="/library" className="text-white/30 hover:text-[#D4AF37]">المكتبة</Link>
        </div>
        <p className="text-xs text-white/20 tracking-widest uppercase italic">
          © 2026 NEFERTITI ACADEMY | EXACTLY AS PLANNED BY THE QUEEN
        </p>
      </footer>
    </div>
  );
}
