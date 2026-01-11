"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, ExternalLink, Sparkles, ShieldCheck } from 'lucide-react';

export default function RoyalBookingPage() {
  // 🔗 جلالة الملكة: ضعي رابط الـ Google Form الخاص بكِ هنا بين العلامات
  const googleFormUrl = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform";

  return (
    <div className="min-h-screen bg-[#050c16] text-white py-20 px-4 rtl" dir="rtl">
      <div className="max-w-3xl mx-auto">
        
        {/* رأس الصفحة: الأفاتار الملكي والترحيب */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="relative inline-block"
          >
            <div className="absolute inset-0 bg-gold-500 rounded-full blur-3xl opacity-30 animate-pulse" />
            <img 
              src="/nefertiti-avatar.png" 
              alt="Nefertiti" 
              className="w-32 h-32 rounded-full border-4 border-gold-500 relative z-10 shadow-[0_0_50px_rgba(212,175,55,0.4)]"
            />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-gold-400 mt-8 mb-4 italic"
          >
            مجلس حجز المواعيد الملكية
          </motion.h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            "يا بطل، أنت على بعد خطوة واحدة من بدء رحلتك في تعلم لغة النيل. املأ استمارة الحجز وسيقوم مساعدي الملكي بالتواصل معك."
          </p>
        </div>

        {/* كارت الحجز الاحترافي */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/5 backdrop-blur-xl border-2 border-gold-500/20 rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4">
            <Sparkles className="text-gold-500 opacity-20" size={40} />
          </div>

          <div className="space-y-8 relative z-10">
            <div className="flex items-start gap-6">
              <div className="bg-gold-500/10 p-4 rounded-2xl border border-gold-500/20">
                <ClipboardList className="text-gold-500" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">لماذا نستخدم Google Forms؟</h3>
                <p className="text-gray-400 text-sm italic">لتأمين بياناتك وضمان وصول طلبك مباشرة إلى جلالة الملكة نفرتيتي بأعلى معايير الخصوصية العالمية.</p>
              </div>
            </div>

            {/* الزر السحري */}
            <a 
              href={googleFormUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 text-black font-black py-6 rounded-2xl text-xl shadow-[0_10px_40px_rgba(212,175,55,0.2)] hover:shadow-gold-500/40 transition-all duration-500 active:scale-95 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              ابدأ عملية الحجز الآن
              <ExternalLink size={24} />
            </a>

            <div className="flex justify-center items-center gap-6 pt-4 text-xs font-bold text-gray-500">
              <span className="flex items-center gap-1"><ShieldCheck size={14} className="text-emerald-500"/> آمن 100%</span>
              <span className="flex items-center gap-1"><Sparkles size={14} className="text-gold-500"/> جودة ملكية</span>
            </div>
          </div>
        </motion.div>

        {/* ملاحظة تذييل الصفحة */}
        <p className="text-center mt-12 text-gray-500 text-sm italic">
          * بمجرد إرسال النموذج، سيتم الرد عليك عبر البريد الإلكتروني أو الواتساب خلال أقل من 12 ساعة.
        </p>
      </div>
    </div>
  );
}
