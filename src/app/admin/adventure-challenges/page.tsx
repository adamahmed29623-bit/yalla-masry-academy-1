"use client";

import React, { useState } from 'react';
import { 
  useCollection, 
  useFirestore, 
  useMemoFirebase 
} from '@/firebase';
import { 
  collection, 
  addDoc, 
  doc, 
  updateDoc, 
  deleteDoc 
} from 'firebase/firestore';
import { 
  Trophy, Plus, Trash2, Edit2, 
  LayoutDashboard, Star, Loader2 
} from 'lucide-react';

// تعريف الأنواع لضمان استقرار النظام الملكي
type WithId<T> = T & { id: string };

interface AdventureChallenge {
  title: string;
  gulf_phrase: string;
  egyptian_phrase: string;
  points: number;
  status: 'active' | 'locked';
}

export default function AdminAdventurePage() {
  const firestore = useFirestore();

  // تعديل: إزالة المصفوفة الثانية ليتوافق مع تعريف useMemoFirebase في مشروعك
  const challengesCollection = useMemoFirebase(
    () => (firestore ? collection(firestore, 'adventure_challenges') : null)
  );

  const { data: challenges, isLoading } = useCollection<AdventureChallenge>(challengesCollection);

  return (
    <div className="min-h-screen bg-[#f4f7fe] flex rtl" dir="rtl">
      
      {/* القائمة الجانبية الملكية */}
      <aside className="w-72 bg-[#0a1a31] text-white fixed h-full shadow-2xl z-50">
        <div className="p-8 border-b border-white/5 text-center">
          <div className="w-16 h-16 bg-gold-500 rounded-2xl mx-auto mb-4 flex items-center justify-center rotate-3 shadow-lg">
            <Trophy className="text-[#0a1a31]" size={32} />
          </div>
          <h2 className="text-xl font-black text-gold-400">مجلس الإدارة</h2>
          <p className="text-[10px] opacity-50 uppercase tracking-widest mt-1">الملكة نفرتيتي</p>
        </div>
        
        <nav className="p-4 mt-4 space-y-2">
          <div className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">الرئيسية</div>
          <button className="w-full flex items-center gap-3 px-6 py-4 rounded-xl font-bold bg-gold-500 text-black shadow-lg shadow-gold-500/20 transition-all">
            <Star size={20} /> إدارة التحديات
          </button>
          <button className="w-full flex items-center gap-3 px-6 py-4 rounded-xl font-bold hover:bg-white/5 text-gray-400 transition-all">
            <LayoutDashboard size={20} /> الإحصائيات
          </button>
        </nav>
      </aside>

      {/* المحتوى الرئيسي */}
      <main className="flex-1 mr-72 p-10">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-black text-[#0a1a31] mb-2">تحديات المغامرة</h1>
            <p className="text-gray-500 font-medium">تحكمي في المحتوى الذي يظهر لأبناء الخليج في الأكاديمية.</p>
          </div>
          <button className="bg-[#0a1a31] text-white px-8 py-4 rounded-2xl font-black shadow-xl flex items-center gap-2 hover:bg-gold-500 hover:text-black transition-all active:scale-95">
            <Plus size={22} /> إضافة مهمة ملكية
          </button>
        </header>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-32 gap-4">
            <Loader2 className="animate-spin text-gold-500" size={48} />
            <p className="text-gray-400 font-bold italic animate-pulse">جاري استدعاء البيانات الملكية...</p>
          </div>
        ) : (
          <div className="bg-white rounded-[40px] shadow-sm border border-gray-100 overflow-hidden">
            <table className="w-full text-right">
              <thead className="bg-gray-50/50 border-b border-gray-100">
                <tr>
                  <th className="px-8 py-6 text-gray-400 font-bold text-sm uppercase">عنوان التحدي</th>
                  <th className="px-8 py-6 text-gray-400 font-bold text-sm uppercase">القاموس (خليجي ↔ مصري)</th>
                  <th className="px-8 py-6 text-gray-400 font-bold text-sm uppercase">القيمة</th>
                  <th className="px-8 py-6 text-gray-400 font-bold text-sm uppercase text-left">التحكم</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {challenges?.map((challenge) => (
                  <tr key={challenge.id} className="hover:bg-blue-50/30 transition-all group">
                    <td className="px-8 py-6 font-black text-[#0a1a31] text-lg">{challenge.title}</td>
                    <td className="px-8 py-6">
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-bold text-gray-400">الخليجي: {challenge.gulf_phrase}</span>
                        <span className="text-sm font-black text-gold-600">المصري: {challenge.egyptian_phrase}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className="bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full font-black text-sm">
                        +{challenge.points} نقطة
                      </span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-all">
                        <button className="p-3 text-blue-500 hover:bg-white rounded-xl shadow-sm border border-transparent hover:border-blue-100 transition-all">
                          <Edit2 size={18} />
                        </button>
                        <button className="p-3 text-red-500 hover:bg-white rounded-xl shadow-sm border border-transparent hover:border-red-100 transition-all">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {challenges?.length === 0 && (
              <div className="p-20 text-center">
                <p className="text-gray-400 font-bold italic text-xl">لا توجد تحديات مضافة حالياً في السجل الملكي.</p>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
