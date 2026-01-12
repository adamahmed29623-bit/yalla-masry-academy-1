'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RecipeCard } from '@/components/recipes/RecipeCard'; // تأكدي من وجود المكون الذي أنشأناه سابقاً

// بيانات الوصفات الرمضانية الملكية
const recipes = [
  {
    id: 'mlokhia',
    title: 'الملوخية بالارانب الملكية 🍲',
    description: 'طبق فرعوني أصيل بنفَس "تيتا" المصري. السر في "الشهقة" والتقلية الذهبية!',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // استبدلي برابط فيديو حقيقي
    ingredients: [
      { name: 'ملوخية', arabicName: 'ملوخية خضراء' },
      { name: 'ثوم', arabicName: 'ثوم مفروم' },
      { name: 'كزبرة', arabicName: 'كزبرة ناشفة' },
      { name: 'سمنة', arabicName: 'سمن بلدي' },
    ],
  },
  {
    id: 'mahshy',
    title: 'المحشي المشكل الفاخر 🫑',
    description: 'ملك العزومات الرمضانية. خلطة تيتا السرية التي تجعل رائحة البيت تصل للجيران!',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    ingredients: [
      { name: 'أرز', arabicName: 'أرز مصري' },
      { name: 'خضرة', arabicName: 'شبت وبقدونس وكزبرة' },
      { name: 'طماطم', arabicName: 'تسبيكة طماطم' },
      { name: 'بصل', arabicName: 'بصل مفروم' },
    ],
  }
];

export default function RoyalKitchen() {
  const [request, setRequest] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-white font-body">
      {/* القسم العلوي: ترحيب تيتا */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-nile-blue">
        <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]"></div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-headline text-royal-gold mb-4">مطبخ تيتا الملكي 🌙</h1>
          <p className="text-xl md:text-2xl text-white font-body max-w-2xl mx-auto">
            أهلاً بكنّ في بيت العيلة الكبير.. هنا تتعلمون أسرار "النفس المصري" الأصيل مع دروس اللغة والثقافة.
          </p>
        </motion.div>
      </section>

      {/* قسم الوصفات */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <div className="flex items-center gap-4 mb-12 border-b-2 border-royal-gold/20 pb-4">
          <span className="text-4xl">🍳</span>
          <h2 className="text-3xl font-headline text-nile-blue">وصفات رمضان المختارة</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))}
        </div>
      </section>

      {/* قسم المراسلات الملكية (طلب وصفة من تيتا) */}
      <section className="bg-nile-blue/5 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-1 rounded-[3rem] shadow-2xl border-2 border-royal-gold">
            <div className="p-10 text-right">
              <h2 className="text-3xl font-headline text-nile-blue mb-4">مراسلات المطبخ الملكي ✉️</h2>
              <p className="text-lg text-gray-600 mb-8 font-body">
                هل لديكِ أكلة معينة تودين أن تشرحها لكِ "تيتا" في الفيديو القادم؟ أرسلي طلبكِ الآن.
              </p>

              {!submitted ? (
                <div className="space-y-6">
                  <textarea 
                    value={request}
                    onChange={(e) => setRequest(e.target.value)}
                    placeholder="يا تيتا، نفسي أعرف سر المحشي الكرنب بتاعك..."
                    className="w-full p-5 border-2 border-royal-gold/10 rounded-2xl font-body focus:border-royal-gold outline-none h-40 transition-all text-lg bg-nile-blue/5"
                  />
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSubmitted(true)}
                    className="w-full py-5 bg-nile-blue text-royal-gold font-bold text-xl rounded-2xl shadow-xl hover:shadow-royal-gold/20 transition-all"
                  >
                    إرسال الطلب لتيتا 👑
                  </motion.button>
                </div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="text-6xl mb-4">📜</div>
                  <h3 className="text-2xl font-headline text-nile-blue mb-2">وصلت رسالتكِ بأمان!</h3>
                  <p className="font-body text-gray-500 text-lg">تيتا ستقرأها وترد عليكِ في أقرب وقت يا أميرة.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 text-royal-gold underline font-bold">إرسال رسالة أخرى</button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* تذييل الصفحة الدافئ */}
      <footer className="py-12 text-center text-gray-400 font-body border-t border-gray-100">
        <p>جميع حقوق الوصفات محفوظة لـ "تيتا" وأكاديمية يلا مصري © 2026</p>
      </footer>
    </div>
  );
}
