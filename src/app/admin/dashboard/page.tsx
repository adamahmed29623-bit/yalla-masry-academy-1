"use client";

import React, { useState } from 'react';
import { 
  Users, BookOpen, Trophy, Settings, 
  PlusCircle, Trash2, Edit, LayoutDashboard,
  ShieldCheck, Globe, Star, MessageSquare
} from 'lucide-react';
import { motion } from 'framer-motion';

// تعريف نوع البيانات لحل مشكلة TypeScript السابقة
type WithId<T> = T & { id: string };

export const dynamic = 'force-dynamic';
export default function AdminRoyalDashboard() {
  const [activeTab, setActiveTab] = useState('stats');

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex rtl" dir="rtl">
      
      {/* 1. القائمة الجانبية (Sidebar) - هيبة الملكة */}
      <aside className="w-72 bg-royal-blue text-white shadow-2xl fixed h-full z-50">
        <div className="p-8 border-b border-white/10 text-center">
          <div className="w-20 h-20 bg-gold-500 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg rotate-3">
            <ShieldCheck size={40} className="text-royal-blue" />
          </div>
          <h2 className="text-xl font-black text-gold-400">إدارة الأكاديمية</h2>
          <p className="text-xs opacity-60 mt-1 italic">بوابة الملكة نفرتيتي</p>
        </div>

        <nav className="p-4 space-y-2">
          <MenuButton 
            icon={<LayoutDashboard />} 
            label="الإحصائيات العامة" 
            active={activeTab === 'stats'} 
            onClick={() => setActiveTab('stats')} 
          />
          <MenuButton 
            icon={<Users />} 
            label="إدارة الطلاب" 
            active={activeTab === 'users'} 
            onClick={() => setActiveTab('users')} 
          />
          <MenuButton 
            icon={<BookOpen />} 
            label="المناهج والدروس" 
            active={activeTab === 'courses'} 
            onClick={() => setActiveTab('courses')} 
          />
          <MenuButton 
            icon={<Trophy />} 
            label="تحديات الخليج" 
            active={activeTab === 'challenges'} 
            onClick={() => setActiveTab('challenges')} 
          />
          <MenuButton 
            icon={<MessageSquare />} 
            label="المجتمع والدردشة" 
            active={activeTab === 'community'} 
            onClick={() => setActiveTab('community')} 
          />
        </nav>
      </aside>

      {/* 2. المحتوى الرئيسي (Main Content) */}
      <main className="flex-1 mr-72 p-10">
        
        {/* Header */}
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-black text-royal-blue italic">أهلاً بكِ، يا جلالة الملكة نفرتيتي</h1>
            <p className="text-gray-500">لديكِ 120 طالب جديد انضموا اليوم من الخليج والعالم.</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-gold-500 text-black px-6 py-2 rounded-xl font-bold flex items-center gap-2 hover:bg-gold-600 transition-all shadow-md">
              <PlusCircle size={20} /> إضافة درس جديد
            </button>
          </div>
        </header>

        {/* Content Tabs */}
        {activeTab === 'stats' && <StatsGrid />}
        {activeTab === 'challenges' && <ChallengesManager />}
        
        {/* ملحوظة: يمكنك إضافة باقي الأقسام هنا */}
      </main>
    </div>
  );
}

// مكونات فرعية للوحة القيادة
function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <StatCard icon={<Users className="text-blue-500" />} title="إجمالي الطلاب" value="5,420" color="bg-blue-50" />
      <StatCard icon={<Globe className="text-emerald-500" />} title="الدول المشاركة" value="28 دولة" color="bg-emerald-50" />
      <StatCard icon={<Star className="text-gold-600" />} title="أوسمة ممنوحة" value="12.5k" color="bg-gold-50" />
    </div>
  );
}

function StatCard({ icon, title, value, color }: any) {
  return (
    <div className={`${color} p-8 rounded-[30px] shadow-sm border border-black/5 flex items-center gap-6`}>
      <div className="p-4 bg-white rounded-2xl shadow-sm">{icon}</div>
      <div>
        <p className="text-sm font-bold text-gray-500">{title}</p>
        <p className="text-3xl font-black text-royal-blue">{value}</p>
      </div>
    </div>
  );
}

function ChallengesManager() {
  return (
    <div className="bg-white rounded-[40px] shadow-xl p-8 border border-gray-100">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-xl font-black text-royal-blue">التحكم في تحديات الخليج والمحروسة</h3>
        <span className="text-sm bg-blue-100 text-blue-600 px-4 py-1 rounded-full font-bold">11 لغة نشطة</span>
      </div>
      
      <table className="w-full text-right">
        <thead>
          <tr className="border-b border-gray-100 text-gray-400 text-sm">
            <th className="pb-4">اسم التحدي</th>
            <th className="pb-4">اللهجة المقابلة</th>
            <th className="pb-4">النقاط</th>
            <th className="pb-4 text-left">الإجراءات</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          <tr className="group hover:bg-gray-50 transition-all">
            <td className="py-4 font-bold text-royal-blue">خان الخليلي</td>
            <td className="py-4 italic text-gray-600">وش علومك؟ → إيه الأخبار؟</td>
            <td className="py-4"><span className="text-emerald-600 font-black">150</span></td>
            <td className="py-4 flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-all">
              <button className="p-2 text-blue-500 hover:bg-blue-100 rounded-lg"><Edit size={18} /></button>
              <button className="p-2 text-red-500 hover:bg-red-100 rounded-lg"><Trash2 size={18} /></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function MenuButton({ icon, label, active, onClick }: any) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all ${active ? 'bg-gold-500 text-black shadow-lg' : 'hover:bg-white/10 text-white/70'}`}
    >
      {icon} {label}
    </button>
  );
}
