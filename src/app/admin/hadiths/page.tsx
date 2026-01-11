'use client';

import React, { useState } from 'react';
import { useCollection, useFirestore } from '@/firebase';
import { collection, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trash2, Edit2, Plus, Loader2 } from 'lucide-react';

export default function AdminHadithsPage() {
  const [newHadith, setNewHadith] = useState({ text: '', narrator: '', category: '' });
  const firestore = useFirestore();
  const hadithsRef = firestore ? collection(firestore, 'hadiths') : null;
  const { data: hadiths, loading } = useCollection(hadithsRef as any);

  const handleAdd = async () => {
    if (!newHadith.text || !hadithsRef) return;
    await addDoc(hadithsRef, { ...newHadith, createdAt: new Date() });
    setNewHadith({ text: '', narrator: '', category: '' });
  };

  const handleDelete = async (id: string) => {
    if (!firestore) return;
    await deleteDoc(doc(firestore, 'hadiths', id));
  };

  return (
    <div className="min-h-screen bg-[#050c16] text-white p-8 rtl" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-black text-gold-400 mb-8 italic">إدارة شؤون الأحاديث النبوية</h1>
        
        {/* نموذج إضافة حديث جديد */}
        <Card className="bg-white/5 border-gold-500/20 mb-12 overflow-hidden">
          <CardHeader className="bg-gold-500/10">
            <CardTitle className="text-gold-500 text-lg flex items-center gap-2">
              <Plus size={20} /> إضافة حديث جديد للبوابات الملكية
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <Input 
              placeholder="نص الحديث الشريف..." 
              value={newHadith.text}
              onChange={(e) => setNewHadith({...newHadith, text: e.target.value})}
              className="bg-black/20 border-white/10 text-white"
            />
            <div className="grid grid-cols-2 gap-4">
              <Input 
                placeholder="الراوي (مثلاً: البخاري)" 
                value={newHadith.narrator}
                onChange={(e) => setNewHadith({...newHadith, narrator: e.target.value})}
                className="bg-black/20 border-white/10 text-white"
              />
              <Input 
                placeholder="التصنيف (مثلاً: أخلاق)" 
                value={newHadith.category}
                onChange={(e) => setNewHadith({...newHadith, category: e.target.value})}
                className="bg-black/20 border-white/10 text-white"
              />
            </div>
            <Button onClick={handleAdd} className="w-full bg-gold-500 text-black font-black hover:bg-white transition-all">
              نشر في الخزائن
            </Button>
          </CardContent>
        </Card>

        {/* قائمة الأحاديث الحالية */}
        <div className="space-y-4">
          {loading ? (
            <div className="flex justify-center py-10"><Loader2 className="animate-spin text-gold-500" /></div>
          ) : (
            (hadiths as any[])?.map((hadith) => (
              <div key={hadith.id} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex justify-between items-center group hover:border-gold-500/50 transition-all">
                <div>
                  <p className="text-lg font-bold mb-2">"{hadith.text}"</p>
                  <p className="text-gold-500 text-sm italic">{hadith.narrator} - {hadith.category}</p>
                </div>
                <button onClick={() => handleDelete(hadith.id)} className="text-red-500 opacity-0 group-hover:opacity-100 transition-all p-2 hover:bg-red-500/10 rounded-full">
                  <Trash2 size={20} />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
