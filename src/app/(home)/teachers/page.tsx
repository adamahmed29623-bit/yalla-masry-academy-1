"use client";

import React, { useState } from "react";
import { useFirebase } from "@/context/useFirebase";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, 
  Video, 
  Clock, 
  Globe, 
  Award, 
  Users, 
  Zap,
  ChevronRight,
  ShieldCheck
} from "lucide-react";

// نظام بيانات المعلمات المتطور (المحرك الأساسي)
const TEACHER_DATABASE = [
  {
    id: "T1",
    name: "الأستاذة إيزيس",
    role: "كبيرة معلمات اللغات الشرقية",
    languages: ["العربية", "الأردية", "الفارسية"],
    rating: 5.0,
    students: 1240,
    experience: "10 سنوات",
    bio: "متخصصة في دمج الثقافة المصرية باللغات الآسيوية.",
    availability: ["10:00 AM", "02:00 PM", "06:00 PM"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
  }
];

export default function TeachersPage() {
  const { isUserLoading } = useFirebase() as any;
  const [selectedTeacher, setSelectedTeacher] = useState<any>(null);

  if (isUserLoading) return <div className="h-screen bg-[#fcfaf2] flex items-center justify-center">
    <div className="animate-bounce text-royal-blue font-bold">جاري استدعاء المعلمات...</div>
  </div>;

  return (
    <div className="min-h-screen bg-[#fcfaf2] font-serif">
      {/* هيدر سينمائي */}
      <section className="bg-royal-blue text-white py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/papyros.png')]"></div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-black mb-6"
        >
          نظام حارسات المعرفة
        </motion.h1>
        <p className="text-xl text-gold-300 max-w-2xl mx-auto italic">
          بمجرد انطلاقنا، سيقود هذا المحرك البشري آلاف الطلاب عبر 11 لغة عالمية بروح التاج المصري.
        </p>
      </section>

      <div className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* قائمة المعلمات */}
        <div className="lg:col-span-1 space-y-6">
          <h2 className="text-2xl font-bold text-royal-blue flex items-center gap-3">
            <Users className="w-6 h-6" /> الطاقم التعليمي الحالي
          </h2>
          {TEACHER_DATABASE.map((teacher) => (
            <motion.div
              key={teacher.id}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedTeacher(teacher)}
              className={`p-6 rounded-3xl cursor-pointer border-2 transition-all ${
                selectedTeacher?.id === teacher.id ? "bg-white border-gold-500 shadow-2xl" : "bg-white/50 border-transparent shadow-md"
              }`}
            >
              <div className="flex items-center gap-4">
                <img src={teacher.image} className="w-16 h-16 rounded-2xl object-cover border-2 border-gold-200" />
                <div>
                  <h3 className="font-bold text-royal-blue">{teacher.name}</h3>
                  <div className="flex gap-1">
                    {teacher.languages.slice(0, 2).map(l => (
                      <span key={l} className="text-[10px] bg-gold-100 text-gold-800 px-2 py-0.5 rounded-full font-bold">{l}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* قاعة الدروس والحجز الذكي */}
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            {selectedTeacher ? (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-[40px] shadow-2xl border border-gold-100 p-8 md:p-12"
              >
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h2 className="text-3xl font-black text-royal-blue mb-2">{selectedTeacher.name}</h2>
                    <p className="text-gold-700 font-medium">{selectedTeacher.role}</p>
                  </div>
                  <div className="bg-green-50 text-green-700 px-4 py-2 rounded-2xl flex items-center gap-2 text-sm font-bold">
                    <ShieldCheck className="w-4 h-4" /> معتمة ملكياً
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-10">
                  <div className="bg-gray-50 p-4 rounded-2xl text-center">
                    <Award className="w-6 h-6 mx-auto text-gold-500 mb-2" />
                    <span className="block text-xs text-gray-400">التقييم</span>
                    <span className="font-bold text-royal-blue">{selectedTeacher.rating}</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-2xl text-center">
                    <Zap className="w-6 h-6 mx-auto text-royal-blue mb-2" />
                    <span className="block text-xs text-gray-400">الطلاب</span>
                    <span className="font-bold text-royal-blue">{selectedTeacher.students}</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-2xl text-center">
                    <Globe className="w-6 h-6 mx-auto text-blue-500 mb-2" />
                    <span className="block text-xs text-gray-400">اللغات</span>
                    <span className="font-bold text-royal-blue">11 لغة</span>
                  </div>
                </div>

                {/* نظام الحجز المتطور */}
                <div className="border-t border-gray-100 pt-8">
                  <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Calendar className="w-6 h-6 text-gold-600" /> جدول الجلسات المتاحة
                  </h4>
                  <div className="flex flex-wrap gap-4">
                    {selectedTeacher.availability.map((time: string) => (
                      <button key={time} className="px-6 py-3 bg-[#fcfaf2] border-2 border-gold-200 rounded-2xl font-bold text-royal-blue hover:bg-gold-500 hover:text-white transition-all shadow-sm">
                        <Clock className="w-4 h-4 inline ml-2" /> {time}
                      </button>
                    ))}
                  </div>
                </div>

                <button className="w-full mt-10 bg-royal-blue text-white py-5 rounded-[25px] font-black text-xl flex items-center justify-center gap-4 hover:bg-royal-blue/90 shadow-xl transition-all group">
                  <Video className="w-6 h-6" /> دخول قاعة الدروس الذكية
                  <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                </button>
              </motion.div>
            ) : (
              <div className="h-full bg-white/50 rounded-[40px] border-4 border-dashed border-gold-200 flex flex-col items-center justify-center p-20 text-center">
                <Users className="w-20 h-20 text-gold-300 mb-6" />
                <h3 className="text-2xl font-bold text-gray-400">اختاري إحدى المعلمات لبدء تفعيل المحرك</h3>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
