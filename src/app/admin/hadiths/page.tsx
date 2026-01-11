'use client';

import React, { useState } from 'react';
import { useCollection, useFirestore } from '@/firebase';
import { collection, addDoc, doc, deleteDoc } from 'firebase/firestore';

export default function AdminHadithsPage() {
  const [text, setText] = useState('');
  const [narrator, setNarrator] = useState('');
  const firestore = useFirestore();
  
  // استخدام استدعاء مباشر وبسيط لتجنب أخطاء النوع
  const hadithsRef = firestore ? collection(firestore, 'hadiths') : null;
  const { data: hadiths, loading } = useCollection(hadithsRef as any);

  const handleAdd = async () => {
    if (!text || !hadithsRef) return;
    await addDoc(hadithsRef, { 
      text, 
      narrator, 
      createdAt: new Date().toISOString() 
    });
    setText('');
    setNarrator('');
  };

  const handleDelete = async (id: string) => {
    if (!firestore) return;
    await deleteDoc(doc(firestore, 'hadiths', id));
  };

  return (
    <div className="min-h-screen bg-[#050c16] text-white p-8 rtl" dir="rtl">
      <h1 className="text-3xl font-black text-gold-400 mb-8 italic">إدارة الأحاديث الملكية</h1>
      
      <div className="bg-white/5 p-6 rounded-3xl mb-8 space-y-4 border border-gold-500/20">
        <input 
          placeholder="نص الحديث..." 
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full bg-black/40 p-4 rounded-xl border border-white/10 outline-none focus:border-gold-500"
        />
        <input 
          placeholder="الراوي..." 
          value={narrator}
          onChange={(e) => setNarrator(e.target.value)}
          className="w-full bg-black/40 p-4 rounded-xl border border-white/10 outline-none focus:border-gold-500"
        />
        <button onClick={handleAdd} className="w-full bg-gold-500 text-black p-4 rounded-xl font-black">
          إضافة للمجموعة
        </button>
      </div>

      <div className="space-y-4">
        {loading ? <p className="text-gold-500 animate-pulse">جاري التحميل...</p> : 
          (hadiths as any[])?.map((h) => (
            <div key={h.id} className="p-4 bg-white/5 rounded-xl border border-white/5 flex justify-between items-center">
              <p className="font-bold">{h.text} <span className="text-gold-500 text-sm">({h.narrator})</span></p>
              <button onClick={() => handleDelete(h.id)} className="text-red-500 text-sm font-black">حذف</button>
            </div>
          ))
        }
      </div>
    </div>
  );
}
