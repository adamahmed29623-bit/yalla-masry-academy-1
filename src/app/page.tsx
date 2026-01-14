import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function NefertitiAcademy() {
  return (
    <div className="min-h-screen bg-[#002366] text-[#D4AF37] font-sans selection:bg-[#D4AF37] selection:text-[#002366] overflow-x-hidden">
      
      {/* 👑 الهيدر الملكي الثابت */}
      <nav className="flex justify-between items-center p-5 border-b border-[#D4AF37]/30 backdrop-blur-lg sticky top-0 z-[100] bg-[#002366]/80">
        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14 rounded-full border-2 border-[#D4AF37] p-1 shadow-[0_0_15px_rgba(212,175,55,0.4)]">
             <div className="w-full h-full rounded-full bg-gradient-to-br from-[#D4AF37] to-[#996515] flex items-center justify-center text-[#002366] font-bold">
               N
             </div>
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-black tracking-tighter uppercase leading-none">أكاديمية نفرتيتي</h1>
            <span className="text-[10px] tracking-[0.3em] text-white/50">YALLA MASRY ACADEMY</span>
          </div>
        </div>
        
        <div className="hidden lg:flex gap-10 font-bold text-sm uppercase tracking-widest">
          <Link href="#vision" className="hover:text-white transition-all">الرؤية</Link>
          <Link href="#safety" className="hover:text-white transition-all">مملكة الأمان</Link>
          <Link href="#courses" className="hover:text-white transition-all">المناهج</Link>
          <Link href="/login" className="px-8 py-2 bg-[#D4AF37] text-[#002366] rounded-full hover:bg-white transition-all shadow-lg">دخول الملكات</Link>
        </div>
      </nav>

      {/* 👑 قسم البطولة: شمس الأكاديمية تشرق */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 z-0 overflow-hidden">
           <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] bg-[#D4AF37]/10 blur-[120px] rounded-full"></div>
           <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-[#D4AF37]/10 blur-[120px] rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-5xl space-y-10">
          <div className="inline-block px-4 py-1 border border-[#D4AF37] rounded-full text-xs tracking-widest uppercase text-white mb-4 animate-pulse">
            مملكة اللهجة المصرية الأولى من نوعها
          </div>
          <h2 className="text-5xl md:text-8xl font-black leading-[1.1] tracking-tight text-white">
            اكتشفي سر القوة <br/>
            <span className="text-[#D4AF37] drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]">يا ملكة</span>
          </h2>
          
          <p className="text-xl md:text-3xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light italic">
            "الأكاديمية دي اتعملت ليكي ولأطفالك.. عشان نرجع لغتنا وهويتنا بكل حب وجدعنة، في مكان آمن مية في المية."
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Link href="/register" className="px-12 py-5 bg-[#D4AF37] text-[#002366] text-xl font-black rounded-xl shadow-2xl hover:scale-105 active:scale-95 transition-all">
               سجلي كملكة الآن
            </Link>
            <Link href="#safety" className="px-12 py-5 border-2 border-[#D4AF37] text-[#D4AF37] text-xl font-black rounded-xl hover:bg-[#D4AF37]/10 transition-all">
               ليه إحنا مختلفين؟
            </Link>
          </div>
        </div>
      </section>

      {/* 🛡️ قسم ميثاق الأمان الملكي */}
      <section id="safety" className="py-24 bg-black/20 border-y border-[#D4AF37]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-6xl font-bold text-white mb-4">ميثاق الأمان النسائي</h3>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "مجتمع نسائي مغلق", desc: "المعلمات، الإدارة، والطلاب نساء وأطفال فقط. خصوصيتك هي أولويتنا الأولى." },
              { title: "حماية تقنية ملكية", desc: "أنظمة مشفرة تمنع أي تطفل، لضمان بيئة تعليمية هادئة وآمنة." },
              { title: "الروح المصرية", desc: "تعليم اللهجة المصرية ليس مجرد كلمات، بل هو زرع قيم الجدعنة والأصول." }
            ].map((feature, i) => (
              <div key={i} className="p-10 border border-[#D4AF37]/20 rounded-3xl hover:border-[#D4AF37] transition-all bg-[#002366]/50 group">
                <div className="text-[#D4AF37] text-4xl mb-6 group-hover:scale-110 transition-transform">✨</div>
                <h4 className="text-2xl font-bold mb-4 text-white">{feature.title}</h4>
                <p className="text-white/70 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📚 قسم المناهج والأقسام (الشامل) */}
      <section id="courses" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h3 className="text-5xl font-black text-white italic">مش مجرد دروس.. <br/> دي رحلة بناء!</h3>
            <p className="text-lg text-white/60">في أكاديمية نفرتيتي، بنهتم بكل تفصيلة في حياة الطفل والمرأة المصرية في الغربة.</p>
            
            <div className="space-y-4">
              {["كورس اللهجة المصرية التأسيسي", "تحديات المغامرة للأطفال", "مكتبة الحواديت الملكية", "متجر الهوية المصرية"].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-xl border-l-4 border-[#D4AF37] pl-4">
                  <span className="text-[#D4AF37]">✔</span> {item}
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#D4AF37]/20 rounded-[2rem] blur-2xl group-hover:bg-[#D4AF37]/30 transition-all"></div>
            <div className="relative aspect-video rounded-[2rem] border-2 border-[#D4AF37] bg-[#001a4d] overflow-hidden flex items-center justify-center">
               <span className="text-[#D4AF37] font-bold text-lg">صورة الأكاديمية الملكية</span>
            </div>
          </div>
        </div>
      </section>

      {/* 🏺 التذييل: الحقوق الملكية */}
      <footer className="py-16 text-center border-t border-[#D4AF37]/10 bg-black/40">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold tracking-widest text-[#D4AF37]">أكاديمية نفرتيتي</h2>
          <p className="text-white/40 px-6 italic">
            "نحن لا نعلم لغة، نحن نبني انتماءً ونصنع مستقبلاً يفخر بجذوره."
          </p>
          <div className="pt-8 text-xs tracking-tighter text-white/20 uppercase">
             &copy; 2026 NEFERTITI ACADEMY | ALL RIGHTS RESERVED TO THE QUEENS
          </div>
        </div>
      </footer>
    </div>
  );
}
