'use client';
import { motion } from 'framer-motion';

const inventions = [
  {
    title: "مكوك الوصلة السحرية",
    description: "عندما ينقطع سلك الشاحن، يتدخل المصري بشريط لحام (شكرتون) ليجعله يعمل للأبد، متحدياً قوانين الفيزياء وشركة أبل نفسها!",
    icon: "🔌",
    badge: "اختراع منزلي"
  },
  {
    title: "قمر الريسيفر الموجه",
    description: "توجيه طبق الدش بـ 'القلة' أو 'طوبة' فوق السطوح للحصول على أعلى إشارة.. تكنولوجيا لم تتوصل لها ناسا بعد!",
    icon: "📡",
    badge: "هندسة فضائية"
  },
  {
    title: "تربية الموتور",
    description: "خبطة واحدة فنية على الموتور أو التلفزيون القديم تجعله يستعيد وعيه فوراً. نحن لا نصلح، نحن 'نربي' الأجهزة!",
    icon: "🔨",
    badge: "طب الأجهزة"
  }
];

export default function EgyptianInventions() {
  return (
    <div className="min-h-screen bg-[#001233] text-white py-16 px-4 overflow-hidden relative">
      {/* خلفية النجوم والزخارف الفرعونية الباهتة */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-headline text-royal-gold mb-4">مكوك الفهلوة المصرية 🚀</h1>
          <p className="text-xl font-body text-blue-200">هنا حيث لا يعرف المستحيل مكاناً.. اختراعات حيرت العلماء!</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {inventions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="p-8 rounded-3xl bg-white/5 backdrop-blur-lg border-b-4 border-royal-gold shadow-2xl hover:bg-white/10 transition-all group"
            >
              <div className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-300">
                {item.icon}
              </div>
              <span className="text-xs font-bold text-royal-gold uppercase tracking-widest bg-royal-gold/10 px-3 py-1 rounded-full border border-royal-gold/30">
                {item.badge}
              </span>
              <h3 className="text-2xl font-headline mt-4 mb-3 text-white">{item.title}</h3>
              <p className="font-body text-blue-100/70 leading-relaxed">
                {item.description}
              </p>
              
              <div className="mt-6 flex justify-between items-center text-sm font-body text-royal-gold/60">
                <span>الحالة: شغال بالبركة ✨</span>
                <span className="animate-ping">●</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* قسم "شاركنا اختراعك" التفاعلي */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="mt-16 p-10 bg-gradient-to-r from-royal-gold to-yellow-600 rounded-[3rem] text-nile-blue flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_0_50px_rgba(212,175,55,0.4)]"
        >
          <div className="text-right">
            <h2 className="text-3xl font-headline mb-2">إنت كمان مخترع مكوك؟ 🛠️</h2>
            <p className="text-lg font-body opacity-90">احكيلنا عن أغرب حاجة صلحتها في البيت بذكاءك الخارق!</p>
          </div>
          <button className="px-10 py-4 bg-nile-blue text-white rounded-2xl font-bold shadow-2xl hover:bg-black transition-colors">
             أرسل اختراعك للملكة 👑
          </button>
        </motion.div>
      </div>
    </div>
  );
}
