"use client";

import React from 'react';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection } from 'firebase/firestore';
import { Trophy, Plus, Trash2, Edit2, LayoutDashboard, Star, Loader2 } from 'lucide-react';

export default function AdminAdventurePage() {
  const firestore = useFirestore();
  const challengesCollection = firestore ? collection(firestore, 'adventure_challenges') : null;
  
  useMemoFirebase(); 

  // التعديل النهائي: إزالة <any> لأن دالة مشروعك لا تدعم التوصيف النوعي هنا
  const { data: challenges, loading } = useCollection(challengesCollection as any);

  return (
    <div className="min-h-screen bg-[#f4f7fe] flex rtl" dir="rtl">
      {/* القائمة الجانبية الملكية */}
      <aside className="w-72 bg-[#0a1a31] text-white fixed h-full shadow-2xl z-50">
        <div className="p-8 border-b border-white/5 text-center">
          <div className="relative w-24 h-24 mx-auto mb-4 group">
            <div className="absolute inset-0 bg-gold-500 rounded-full blur-lg opacity-20 animate-pulse" />
            <img 
              src="/nefertiti-avatar.png" 
              alt="Queen Nefertiti" 
              className="rounded-full border-2 border-gold-500 shadow-2xl object-cover w-full h-full relative z-10"
            />
          </div>
          <h2 className="text-xl font-black text-gold-400">لوحة نفرتيتي</h2>
          <p className="text-[10px] opacity-50 uppercase mt-1 italic tracking-widest">إدارة الأكاديمية</p>
        </div>
        
        <nav className="p-4 mt-4 space-y-2">
          <button className="w-full flex items-center gap-3 px-6 py-4 rounded-xl font-bold bg-gold-500 text-black shadow-lg">
            <Star size={18} /> إدارة التحديات
          </button>
          <button className="w-full flex items-center gap-3 px-6 py-4 rounded-xl font-bold hover:bg-white/5 text-gray-400">
            <LayoutDashboard size={18} /> الإحصائيات العامة
          </button>
        </nav>
      </aside>

      {/* المحتوى الرئيسي */}
      <main className="flex-1 mr-72 p-10">
        <header className="flex justify-between items-center mb-10 border-b border-gray-200 pb-8">
          <div>
            <h1 className="text-3xl font-black text-[#0a1a31] mb-1">مركز التحكم في التحديات</h1>
            <p className="text-gray-500 italic text-sm">أهلاً بكِ في مملكتكِ الخاصة يا جلالة الملكة.</p>
          </div>
          <button className="bg-[#0a1a31] text-white px-8 py-4 rounded-2xl font-black shadow-xl flex items-center gap-2 hover:bg-gold-500 hover:text-black transition-all">
            <Plus size={20} /> إضافة تحدي ملكي
          </button>
        </header>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 gap-4">
            <Loader2 className="animate-spin text-gold-500" size={48} />
            <p className="text-gray-400 font-bold italic">جاري استدعاء البيانات السامية...</p>
          </div>
        ) : (
          <div className="bg-white rounded-[40px] shadow-sm border border-gray-100 overflow-hidden">
             <table className="w-full text-right">
              <thead className="bg-gray-50/50 border-b border-gray-100">
                <tr>
                  <th className="px-8 py-6 text-gray-400 font-bold text-xs uppercase">المهمة</th>
                  <th className="px-8 py-6 text-gray-400 font-bold text-xs uppercase">القاموس</th>
                  <th className="px-8 py-6 text-gray-400 font-bold text-xs uppercase text-left">الإجراءات</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {(challenges as any[])?.map((challenge) => (
                  <tr key={challenge.id} className="hover:bg-blue-50/30 transition-all group">
                    <td className="px-8 py-6 font-black text-[#0a1a31]">{challenge.title}</td>
                    <td className="px-8 py-6">
                      <div className="text-xs text-gray-400 italic mb-1">خليجي: {challenge.gulf_phrase}</div>
                      <div className="text-sm font-bold text-gold-600">مصري: {challenge.egyptian_phrase}</div>
                    </td>
                    <td className="px-8 py-6 text-left">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-all">
                       <button className="p-2 text-blue-500"><Edit2 size={16} /></button>
                       <button className="p-2 text-red-400"><Trash2 size={16} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}
