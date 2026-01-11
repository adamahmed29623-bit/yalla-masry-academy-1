"use client";

import React from "react";
import { useFirebase } from "@/context/useFirebase";
import { motion } from "framer-motion";
import { 
  User, 
  Settings, 
  Globe, 
  ShieldCheck, 
  Award, 
  LogOut, 
  Crown,
  Languages
} from "lucide-react";

export default function ProfilePage() {
  // المفتاح الملكي لتجاوز أخطاء البناء وضمان استلام البيانات
  const { user, isUserLoading, auth } = useFirebase() as any;

  if (isUserLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#fcfaf2]">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="h-12 w-12 border-4 border-gold-500 border-t-royal-blue rounded-full"
        />
      </div>
    );
  }

  const handleLogout = () => {
    if (auth) auth.signOut();
  };

  return (
    <div className="min-h-screen bg-[#fcfaf2] font-serif">
      {/* الجزء العلوي: غطاء ملكي (Hero Header) */}
      <div className="h-64 bg-royal-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/egyptian-hieroglyphs.png')]"></div>
        <div className="absolute -bottom-1 w-full h-20 bg-[#fcfaf2] rounded-t-[50px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-32 relative z-10">
        {/* بطاقة الهوية الملكية */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-2xl p-8 border border-gold-100"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <div className="w-32 h-32 rounded-full border-4 border-gold-500 overflow-hidden bg-gray-100">
                {user?.photoURL ? (
                  <img src={user.photoURL} alt="الملف الملكي" className="w-full h-full object-cover" />
                ) : (
                  <User className="w-full h-full p-6 text-gray-400" />
                )}
              </div>
              <div className="absolute -bottom-2 -right-2 bg-gold-500 p-2 rounded-full shadow-lg">
                <Crown className="w-5 h-5 text-royal-blue" />
              </div>
            </div>

            <div className="text-center md:text-right flex-1">
              <h1 className="text-3xl font-bold text-royal-blue mb-1">
                {user?.displayName || "عضو أكاديمية يلا مصري"}
              </h1>
              <p className="text-gray-500 flex items-center justify-center md:justify-start gap-2">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                {user?.email}
              </p>
              <div className="mt-4 flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="px-4 py-1 bg-gold-100 text-gold-700 rounded-full text-sm font-bold border border-gold-200">
                  طالب ذهبي
                </span>
                <span className="px-4 py-1 bg-royal-blue/10 text-royal-blue rounded-full text-sm font-bold border border-royal-blue/20">
                  عضوية 2026
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* شبكة الإعدادات والمعلومات العالمية */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          
          {/* قسم اللغات - الـ 11 لغة */}
          <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl shadow-lg border-r-4 border-gold-500">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gold-50 rounded-lg">
                <Languages className="w-6 h-6 text-gold-600" />
              </div>
              <h2 className="text-xl font-bold text-royal-blue">تفضيلات اللغة</h2>
            </div>
            <p className="text-sm text-gray-600 mb-4">أكاديميتك تدعم 11 لغة عالمية لتناسب طموحك.</p>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl cursor-pointer hover:bg-gold-50 transition-colors">
              <span className="font-medium">اللغة الحالية</span>
              <span className="text-royal-blue font-bold flex items-center gap-2">
                العربية <Globe className="w-4 h-4" />
              </span>
            </div>
          </motion.div>

          {/* قسم الإنجازات */}
          <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl shadow-lg border-r-4 border-royal-blue">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <Award className="w-6 h-6 text-royal-blue" />
              </div>
              <h2 className="text-xl font-bold text-royal-blue">الإنجازات الملكية</h2>
            </div>
            <p className="text-sm text-gray-600 mb-4">لقد بدأت رحلتك نحو العالمية معنا.</p>
            <div className="text-royal-blue text-sm font-bold">قريباً: الأوسمة والشهادات</div>
          </motion.div>
        </div>

        {/* خيارات التحكم */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 mb-12">
          <button className="flex-1 flex items-center justify-center gap-2 bg-white border-2 border-gold-500 text-gold-700 py-3 rounded-2xl font-bold hover:bg-gold-50 transition-all shadow-md">
            <Settings className="w-5 h-5" /> تعديل الملف الشخصي
          </button>
          <button 
            onClick={handleLogout}
            className="flex-1 flex items-center justify-center gap-2 bg-red-50 text-red-600 py-3 rounded-2xl font-bold hover:bg-red-100 transition-all shadow-md"
          >
            <LogOut className="w-5 h-5" /> تسجيل الخروج
          </button>
        </div>
      </div>
    </div>
  );
}
