"use client";
export const dynamic = 'force-dynamic';
import { useFirebase } from "@/context/useFirebase";
import { motion } from "framer-motion"; // للفخامة الحركية
import { Globe, Crown, BookOpen, Star } from "lucide-react";

export default function DashboardPage() {
  // استدعاء البيانات بالهيكلية الجديدة لضمان نجاح الـ Build
  const { user, firestore, isUserLoading } = useFirebase() as any;

  if (isUserLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#fcfaf2]">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="h-16 w-16 border-4 border-gold-500 border-t-royal-blue rounded-full"
        />
        <p className="mr-4 font-serif text-xl text-royal-blue">جاري فتح بوابات الأكاديمية...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fcfaf2] p-6 lg:p-12 font-serif">
      {/* رأس الصفحة الملكي */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b-2 border-gold-200 pb-6">
        <div>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-royal-blue mb-2"
          >
            {user?.displayName ? `أهلاً بك يا ${user.displayName}` : "مرحباً بك في قصرك المعرفي"}
          </motion.h1>
          <p className="text-gold-700 italic">أكاديمية يلا مصري: حيث يتحدث العالم لغة النيل</p>
        </div>
        
        {/* مؤشر العالمية - 11 لغة */}
        <div className="mt-4 md:mt-0 flex items-center bg-white shadow-lg rounded-full px-6 py-2 border border-gold-100">
          <Globe className="w-5 h-5 text-royal-blue ml-2" />
          <span className="text-sm font-medium text-gray-700">11 لغة مفعلة الآن</span>
        </div>
      </header>

      {/* شبكة لوحة التحكم - Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* كارت الحالة الملكية */}
        <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-2xl shadow-xl border-t-4 border-gold-500">
          <div className="flex items-center justify-between mb-4">
            <Crown className="w-8 h-8 text-gold-500" />
            <span className="text-xs font-bold text-gray-400">LEVEL 1</span>
          </div>
          <h3 className="text-lg font-bold text-royal-blue">رتبتك الحالية</h3>
          <p className="text-2xl font-black text-gold-600">طالب ملكي</p>
        </motion.div>

        {/* كارت التقدم في الـ 11 لغة */}
        <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-2xl shadow-xl border-t-4 border-royal-blue">
          <div className="flex items-center justify-between mb-4">
            <BookOpen className="w-8 h-8 text-royal-blue" />
            <span className="text-xs font-bold text-gray-400">COURSES</span>
          </div>
          <h3 className="text-lg font-bold text-royal-blue">الدروس المتاحة</h3>
          <p className="text-2xl font-black text-royal-blue">كل لغات العالم</p>
        </motion.div>

        {/* إضافة المزيد من الكروت الفريدة هنا */}
      </div>

      {/* قسم الخريطة العالمية للتعلم */}
      <section className="mt-12 bg-royal-blue text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4">رؤية نفرتيتي 2026</h2>
          <p className="max-w-2xl text-blue-100 leading-relaxed">
            لقد صممتِ يا جلالة الملكة هذا النظام ليكون جسراً بين الشعوب. 
            اليوم، الأكاديمية تترجم "الروح المصرية" للأردية، الصينية، وكل لغات الأرض.
          </p>
          <button className="mt-6 bg-gold-500 hover:bg-gold-600 text-royal-blue font-bold py-3 px-8 rounded-full transition-all shadow-lg">
            ابدأ الرحلة العالمية
          </button>
        </div>
        {/* خلفية جمالية مستوحاة من البرديات */}
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
           <Star className="w-64 h-64" />
        </div>
      </section>
    </div>
  );
}
