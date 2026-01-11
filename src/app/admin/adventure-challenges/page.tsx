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
  LayoutDashboard, Users, BookOpen, Star 
} from 'lucide-react';
import { motion } from 'framer-motion';

// تعريف الأنواع لضمان استقرار النظام
type WithId<T> = T & { id: string };

interface AdventureChallenge {
  title: string;
  gulf_phrase: string;
  egyptian_phrase: string;
  points: number;
  status: 'active' | 'locked';
}

export default function AdminAdventurePage() {
  // استخدام useFirestore مباشرة بدلاً من useFirebase المفقودة
  const firestore = useFirestore();
  const [activeTab, setActiveTab] = useState('challenges');

  const challengesCollection = useMemoFirebase(
    () => (firestore ? collection(firestore, 'adventure_challenges') : null),
    [firestore]
  );

  const { data: challenges, isLoading } = useCollection<AdventureChallenge>(challengesCollection);

  return (
    <div className="min-h-screen bg-[#f4f7fe] flex rtl" dir="rtl">
      
      {/* القائمة الجانبية الملكية */}
      <aside className="w-72 bg-[#0a1a31] text-white fixed h-full shadow-2xl">
        <div className="p-8 border-b border-white/5 text-center">
          <div className="w-16 h-16 bg-gold-500 rounded-2xl mx-auto mb-4 flex items-center justify-center rotate-3 shadow-lg">
            <Trophy className="text-[#0a1a31]" size={32} />
          </div>
          <h2 className="text-xl font-black text-gold-400">لوحة نفرتيتي</h2>
        </div>
        
        <nav className="p-4 space-y-2">
          <button onClick={() => setActiveTab('stats')} className={`w-full flex items-center gap-3 px-6 py-4 rounded-xl font-bold transition-all ${activeTab === 'stats' ? 'bg-gold-500 text-black' : 'hover:bg-white/5'}`}>
            <LayoutDashboard size={20} /> الإحصائيات
          </button>
          <button onClick={() => setActiveTab('challenges')} className={`w-full flex items-center gap-3 px-6 py-4 rounded-xl font-bold transition-all ${activeTab === 'challenges' ? 'bg-gold-500 text-black' : 'hover:bg-white/5'}`}>
            <Star size={20} /> إدارة التحديات
          </button>
        </nav>
      </aside>

      {/* المحتوى الرئيسي */}
      <main className="flex-1 mr-72 p-10">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-black text-[#0a1a31]">إدارة الأكاديمية</h1>
          <button className="bg-[#0a1a31] text-white px-8 py-3 rounded-xl font-bold shadow-lg flex items-center gap-2 hover:bg-gold-600 hover:text-black transition-all">
            <Plus size={20} /> إضافة تحدي جديد
          </button>
        </header>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold-500"></div>
          </div>
        ) : (
          <div className="bg-white rounded-[30px] shadow-sm border border-gray-100 overflow-hidden">
            <table className="w-full text-right">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="px-8 py-5 text-gray-500 font-bold">التحدي</th>
                  <th className="px-8 py-5 text-gray-500 font-bold">العبارة (خليجي/مصري)</th>
                  <th className="px-8 py-5 text-gray-500 font-bold">النقاط</th>
                  <th className="px-8 py-5 text-gray-500 font-bold text-left">التحكم</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {challenges?.map((challenge) => (
                  <tr key={challenge.id} className="hover:bg-gray-50 transition-all group">
                    <td className="px-8 py-6 font-bold text-[#0a1a31]">{challenge.title}</td>
                    <td className="px-8 py-6">
                      <div className="text-sm text-gray-400">خليجي: {challenge.gulf_phrase}</div>
                      <div className="text-sm text-gold-600 font-bold">مصري: {challenge.egyptian_phrase}</div>
                    </td>
                    <td className="px-8 py-6 font-black text-emerald-600">{challenge.points}</td>
                    <td className="px-8 py-6 flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-all">
                      <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"><Edit2 size={18} /></button>
                      <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"><Trash2 size={18} /></button>
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
