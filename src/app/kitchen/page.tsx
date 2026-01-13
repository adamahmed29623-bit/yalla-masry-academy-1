'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// مكون بطاقة الوصفة مدمج هنا لضمان عدم ضياع الملفات
const LocalRecipeCard = ({ title, description, videoUrl, ingredients }: any) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border-b-8 border-royal-gold"
  >
    <div className="aspect-video bg-nile-blue relative">
      <iframe 
        className="w-full h-full"
        src={videoUrl}
        title={title}
        allowFullScreen
      />
    </div>
    <div className="p-8 text-right">
      <h3 className="text-2xl font-headline text-nile-blue mb-3">{title}</h3>
      <p className="text-gray-600 font-body mb-6 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2 justify-end">
        {ingredients.map((ing: any, i: number) => (
          <span key={i} className="bg-royal-gold/10 text-royal-gold px-4 py-1 rounded-full text-sm font-bold border border-royal-gold/20">
            {ing.arabicName}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

export default function RoyalKitchen() {
  const [submitted, setSubmitted] = useState(false);
  const [request, setRequest] = useState("");

  const recipes = [
    {
      id: 'mlokhia',
      title: 'الملوخية بالارانب الملكية 🍲',
      description: 'طبق فرعوني أصيل بنفَس "تيتا" المصري. السر في "الشهقة" والتقلية الذهبية!',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      ingredients: [{ arabicName: 'ملوخية خضراء' }, { arabicName: 'ثوم مفروم' }, { arabicName: 'سمن بلدي' }],
    },
    {
      id: 'mahshy',
      title: 'المحشي المشكل الفاخر 🫑',
      description: 'ملك العزومات الرمضانية. خلطة تيتا السرية التي تجعل رائحة البيت تصل للجيران!',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      ingredients: [{ arabicName: 'أرز مصري' }, { arabicName: 'تسبيكة طماطم' }, { arabicName: 'خضرة مشكلة' }],
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <section className="bg-nile-blue py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]"></div>
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-5xl md:text-7xl font-headline text-royal-gold relative z-10">
          مطبخ تيتا الملكي 🌙
        </motion.h1>
      </section>

      <section className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {recipes.map((recipe) => (
          <LocalRecipeCard key={recipe.id} {...recipe} />
        ))}
      </section>

      <section className="max-w-3xl mx-auto pb-20 px-6">
        <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-2 border-royal-gold text-right">
          <h2 className="text-3xl font-headline text-nile-blue mb-4">اطلبي من تيتا ✉️</h2>
          {!submitted ? (
            <div className="space-y-4">
              <textarea 
                className="w-full p-4 border rounded-2xl h-32 outline-none focus:border-royal-gold"
                placeholder="يا تيتا، نفسي أعرف سر..."
                value={request}
                onChange={(e) => setRequest(e.target.value)}
              />
              <button 
                onClick={() => setSubmitted(true)}
                className="w-full py-4 bg-nile-blue text-royal-gold font-bold rounded-2xl"
              >
                إرسال الطلب الملكي
              </button>
            </div>
          ) : (
            <div className="text-center py-10 text-xl font-headline text-nile-blue">وصلت رسالتكِ لتيتا يا أميرة! ✨</div>
          )}
        </div>
      </section>
    </div>
  );
}
