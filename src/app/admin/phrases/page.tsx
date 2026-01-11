'use client';

import React, { useState } from 'react';
import { useCollection, useFirestore } from '@/firebase';
import { collection, addDoc, doc, deleteDoc } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2, Trash2, Plus } from 'lucide-react';

export default function AdminPhrasesPage() {
  const [arabic, setArabic] = useState('');
  const [english, setEnglish] = useState('');
  const firestore = useFirestore();
  
  const phrasesRef = firestore ? collection(firestore, 'phrases') : null;
  const { data: phrases, loading } = useCollection(phrasesRef as any);

  const handleAdd = async () => {
    if (!arabic || !english || !phrasesRef) return;
    await addDoc(phrasesRef, { 
      arabic, 
      english, 
      createdAt: new Date().toISOString() 
    });
    setArabic('');
    setEnglish('');
  };

  const handleDelete = async (id: string) => {
    if (!firestore) return;
    await deleteDoc(doc(firestore, 'phrases', id));
  };

  return (
    <div className="min-h-screen bg-[#050c16] text-white p-8 rtl" dir="rtl">
      <h1 className="text-3xl font-black text-gold-400 mb-8 italic">إدارة قاموس العبارات الملكية</h1>
      
      <div className="bg-white/5 p-6 rounded-3xl mb-8 space-y-4 border border-gold-500/20 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input 
            placeholder="العبارة بالعربية..." 
            value={arabic}
            onChange={(e) => setArabic(e.target.value)}
            className="bg-black/40 border-white/10 text-white h-14"
          />
          <Input 
            placeholder="Translation in English..." 
            value={english}
            onChange={(e) => setEnglish(e.target.value)}
            className="bg-black/40 border-white/10 text-white h-14 text-left"
            dir="ltr"
          />
        </div>
        <Button onClick={handleAdd} className="w-full bg-gold-500 text-black h-14 font-black hover:bg-white transition-all">
          <Plus className="ml-2" /> إضافة للقاموس الملكي
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {loading ? (
          <div className="flex justify-center py-10"><Loader2 className="animate-spin text-gold-500" /></div>
        ) : (
          (phrases as any[])?.map((phrase) => (
            <div key={phrase.id} className="p-5 bg-white/5 rounded-2xl border border-white/5 flex justify-between items-center group hover:border-gold-500/30 transition-all">
              <div>
                <p className="text-xl font-bold mb-1">{phrase.arabic}</p>
                <p className="text-gold-500/60 italic text-sm font-serif">{phrase.english}</p>
              </div>
              <button onClick={() => handleDelete(phrase.id)} className="text-red-500 opacity-0 group-hover:opacity-100 transition-all p-2 hover:bg-red-500/10 rounded-full">
                <Trash2 size={20} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
