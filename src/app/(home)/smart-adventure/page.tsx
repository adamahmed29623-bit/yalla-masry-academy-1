"use client";

import React, { useState } from "react";
import { useFormState } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useFirebase } from "@/context/useFirebase";
import { 
  Sword, 
  Map as MapIcon, 
  Compass, 
  Sparkles, 
  Trophy, 
  Flame, 
  Globe,
  Scroll,
  Send,
  ArrowRight
} from "lucide-react";

// --- هيكل التحديات الملكي ---
const CHALLENGES = [
  {
    id: 1,
    title: "بعثة وادي اللغات",
    difficulty: "متوسط",
    reward: "100 وسام ذهبي",
    description: "عليك فك شفرة نص قديم بـ 11 لغة مختلفة لفتح بوابة المعرفة الأولى.",
    icon: <Scroll className="w-8 h-8 text-gold-600" />
  },
  {
    id: 2,
    title: "تحدي حارس النيل الذكي",
    difficulty: "أسطوري",
    reward: "تاج المعرفة",
    description: "مبارزة مع الذكاء الاصطناعي لاختبار سرعة بديهتك في النطق والترجمة.",
    icon: <Sword className="w-8 h-8 text-royal-blue" />
  }
];

export default function SmartAdventure() {
  // استدعاء بيانات Firebase بطريقة تضمن عدم حدوث Error أثناء الـ Build
  const { user, isUserLoading } = useFirebase() as any;

  // إعداد الحالة الأولية للمغامرة لتجنب خطأ useFormState السابق
  const [initialState] = useState({ 
    success: false, 
    message: "", 
    text: "" 
  });

  // محرك المغامرة الذكي
  const [state, formAction] = useFormState((state: any, payload: FormData) => {
    const input = payload.get("adventure-input");
    return { 
      success: true, 
      message: `بدأت رحلتك يا ${user?.displayName || "بطلنا"} نحو: ${input}`, 
      text: "المحرك يحلل البيانات الآن..." 
    };
  }, initialState);

  const [selectedChallenge, setSelectedChallenge] = useState<typeof CHALLENGES[0] | null>(null);

  if (isUserLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#fcfaf2]">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="h-16 w-16 border-4 border-gold-500 border-t-royal-blue rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fcfaf2] font-serif text-royal-blue overflow-x-hidden">
      {/* نقش هيروغليفي خفيف في الخلفية */}
      <div className="fixed inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/papyros.png')]"></div>

      <main className="relative z-10 max-w-7xl mx-auto p-4 md:p-12">
        {/* رأس الصفحة الإمبراطوري */}
        <header className="flex flex-col md:flex-row justify-between items-center mb-12 bg-white/90 backdrop-blur-md p-8 rounded-[40px] border-b-8 border-gold-500 shadow-2xl">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-royal-blue rounded-3xl shadow-xl shadow-blue-200">
              <Compass className="w-10 h-10 text-gold-400 animate-pulse" />
            </div>
            <div>
              <h1 className="text-4xl font-black tracking-tight text-royal-blue">
                محرك المغامرات الذكي
              </h1>
              <p className="text-gold-700 text-lg font-medium flex items-center gap-2">
                <Globe className="w-5 h-5" /> استكشاف المعرفة بـ 11 لغة
              </p>
            </div>
          </div>
          <div className="mt-6 md:mt-0 px-8 py-3 bg-gold-100 rounded-full border-2 border-gold-200 text-gold-800 font-bold">
            مرحباً بالملك: {user?.displayName || "نفرتيتي"}
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* قائمة التحديات (3 أعمدة) */}
          <section className="lg:col-span-4 space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
              <Flame className="w-8 h-8 text-red-600" /> قائمة البعثات
            </h2>
            {CHALLENGES.map((challenge) => (
              <motion.div
                key={challenge.id}
                whileHover={{ scale: 1.02, x: 10 }}
                onClick={() => setSelectedChallenge(challenge)}
                className={`cursor-pointer p-6 rounded-3xl border-2 transition-all shadow-lg relative overflow-hidden ${
                  selectedChallenge?.id === challenge.id 
                  ? "border-gold-500 bg-gold-50 shadow-gold-100" 
                  : "border-white bg-white hover:border-royal-blue/20"
                }`}
              >
                <div className="flex items-center gap-5 relative z-10">
                  <div className="p-4 bg-[#fcfaf2] rounded-2xl shadow-inner">
                    {challenge.icon}
                  </div>
                  <div>
                    <h3 className="font-black text-xl mb-1">{challenge.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold bg-royal-blue text-white px-2 py-0.5 rounded-full uppercase">
                        {challenge.difficulty}
                      </span>
                      <span className="text-xs text-gold-700 font-bold">{challenge.reward}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </section>

          {/* ساحة التحدي المركزية (8 أعمدة) */}
          <section className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {selectedChallenge ? (
                <motion.div
                  key="active-arena"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  className="bg-white rounded-[50px] shadow-2xl border-2 border-gold-100 p-10 md:p-16 min-h-[600px] flex flex-col relative overflow-hidden"
                >
                  {/* علامة مائية ملكية */}
                  <Trophy className="absolute top-10 right-10 w-64 h-64 text-gold-500/5 rotate-12" />

                  <div className="flex-1">
                    <span className="inline-flex items-center gap-2 px-5 py-2 bg-royal-blue text-white rounded-full text-sm font-bold mb-8">
                      <Sparkles className="w-4 h-4 text-gold-400" /> مغامرة نشطة بـ 11 لغة
                    </span>
                    <h2 className="text-5xl font-black text-royal-blue mb-6 leading-tight">
                      {selectedChallenge.title}
                    </h2>
                    <p className="text-2xl text-gray-600 leading-relaxed max-w-2xl mb-10">
                      {selectedChallenge.description}
                    </p>

                    {/* عرض رد المحرك الذكي */}
                    {state?.message && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-royal-blue/5 p-8 rounded-3xl border-r-8 border-royal-blue mb-10"
                      >
                        <p className="text-royal-blue text-xl font-bold italic leading-relaxed">
                          "{state.message}"
                        </p>
                      </motion.div>
                    )}
                  </div>

                  {/* نموذج الإدخال (Action) */}
                  <form action={formAction} className="relative mt-auto">
                    <input 
                      name="adventure-input"
                      required
                      placeholder="اكتب ردك هنا لفك الشفرة..."
                      className="w-full p-6 pr-16 rounded-3xl border-4 border-gray-50 focus:border-gold-500 outline-none transition-all shadow-2xl text-xl bg-gray-50"
                    />
                    <button 
                      type="submit"
                      className="absolute left-4 top-4 bg-royal-blue hover:bg-gold-600 text-white p-4 rounded-2xl transition-all group shadow-xl"
                    >
                      <Send className="w-6 h-6 rotate-180 group-hover:-translate-y-1 transition-transform" />
                    </button>
                    <div className="absolute right-6 top-6 text-gold-500">
                      <MapIcon className="w-8 h-8" />
                    </div>
                  </form>
                </motion.div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center p-20 bg-white/40 rounded-[50px] border-4 border-dashed border-gold-200/50">
                  <div className="w-32 h-32 bg-gold-100 rounded-full flex items-center justify-center mb-8">
                    <MapIcon className="w-16 h-16 text-gold-500" />
                  </div>
                  <h3 className="text-3xl font-black text-royal-blue mb-4">في انتظار اختيارك يا ملكة</h3>
                  <p className="text-gray-500 text-xl max-w-md">
                    اختاري أحد التحديات من القائمة الجانبية لبدء المغامرة الفعلية في أكاديمية نفرتيتي.
                  </p>
                </div>
              )}
            </AnimatePresence>
          </section>
        </div>
      </main>
    </div>
  );
}
