import React from 'react';
import Link from 'next/link';

export default function QueenDashboard() {
  const sections = [
    {
      id: 'school',
      title: 'المدرسة المصرية',
      desc: 'تعلم اللهجة المصرية بالحب والجدعنة',
      icon: '📚',
      link: '/egyptian-school',
      color: 'bg-amber-500'
    },
    {
      id: 'quran',
      title: 'محراب القرآن',
      desc: 'ترتيل وحفظ في بيئة إيمانية هادئة',
      icon: '🌙',
      link: '/quran-sanctuary',
      color: 'bg-emerald-600'
    },
    {
      id: 'store',
      title: 'متجر الهوية',
      desc: 'منتجات تعزز الفخر بالجذور المصرية',
      icon: '🏺',
      link: '/store',
      color: 'bg-blue-700'
    },
    {
      id: 'adventure',
      title: 'تحديات المغامرة',
      desc: 'ألعاب وألغاز للأطفال بلهجتنا',
      icon: '⚔️',
      link: '/smart-adventure',
      color: 'bg-rose-600'
    }
  ];

  return (
    <div className="min-h-screen bg-[#002366] text-white font-sans p-6 md:p-12">
      {/* 👑 ترحيب الملكة */}
      <header className="max-w-7xl mx-auto flex justify-between items-center mb-16">
        <div>
          <h1 className="text-3xl md:text-5xl font-black text-[#D4AF37] mb-2">مرحباً بكِ يا ملكة</h1>
          <p className="text-white/60">أهلاً بكِ في مركز قيادة رحلتكِ التعليمية</p>
        </div>
        <div className="w-16 h-16 rounded-full border-2 border-[#D4AF37] flex items-center justify-center text-2xl bg-white/10">
          👑
        </div>
      </header>

      {/* 👑 شبكة أقسام المرحلة الأولى */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {sections.map((section) => (
          <Link href={section.link} key={section.id} className="group">
            <div className="h-full p-8 rounded-[2.5rem] bg-white/5 border border-[#D4AF37]/20 hover:border-[#D4AF37] hover:bg-white/10 transition-all duration-500 relative overflow-hidden">
              {/* زخرفة خلفية */}
              <div className={`absolute -right-4 -top-4 w-24 h-24 ${section.color} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity`}></div>
              
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                {section.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-[#D4AF37]">{section.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed mb-6">
                {section.desc}
              </p>
              
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white group-hover:text-[#D4AF37] transition-colors">
                دخول القسم <span>→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* 👑 شريط الحالة الملكي (Footer) */}
      <footer className="max-w-7xl mx-auto mt-20 p-8 rounded-3xl bg-black/30 border border-white/5 flex flex-col md:row justify-between items-center gap-6">
        <div className="flex gap-8">
          <div className="text-center">
            <p className="text-[10px] text-white/40 uppercase tracking-widest">المستوى</p>
            <p className="text-[#D4AF37] font-bold">ملكة مبتدئة</p>
          </div>
          <div className="text-center border-x border-white/10 px-8">
            <p className="text-[10px] text-white/40 uppercase tracking-widest">النقاط</p>
            <p className="text-[#D4AF37] font-bold">1250</p>
          </div>
          <div className="text-center">
            <p className="text-[10px] text-white/40 uppercase tracking-widest">الأوسمة</p>
            <p className="text-[#D4AF37] font-bold">3</p>
          </div>
        </div>
        <Link href="/" className="text-sm text-white/40 hover:text-white transition-colors underline decoration-[#D4AF37]">
          العودة للواجهة الرئيسية
        </Link>
      </footer>
    </div>
  );
}
