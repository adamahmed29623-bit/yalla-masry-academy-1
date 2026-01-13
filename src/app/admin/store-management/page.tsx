'use client';
import React, { useState } from 'react';
import { useCollection, useFirestore } from '@/firebase';
import { collection, addDoc, doc, deleteDoc } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2, Trash2, Plus, ShoppingBag } from 'lucide-react';

export const dynamic = 'force-dynamic';
export default function AdminStorePage() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const firestore = useFirestore();
  
  const productsRef = firestore ? collection(firestore, 'products') : null;
  const { data: products, loading } = useCollection(productsRef as any);

  const handleAdd = async () => {
    if (!name || !price || !productsRef) return;
    await addDoc(productsRef, { 
      name, 
      price: Number(price), 
      createdAt: new Date().toISOString() 
    });
    setName('');
    setPrice('');
  };

  const handleDelete = async (id: string) => {
    if (!firestore) return;
    await deleteDoc(doc(firestore, 'products', id));
  };

  return (
    <div className="min-h-screen bg-[#050c16] text-white p-8 rtl" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-black text-gold-400 mb-8 italic flex items-center gap-3">
          <ShoppingBag className="text-gold-500" /> إدارة الخزانة الملكية (المتجر)
        </h1>
        
        <div className="bg-white/5 p-6 rounded-3xl mb-8 space-y-4 border border-gold-500/20 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input 
              placeholder="اسم المنتج (مثلاً: كورس المستوى الأول)..." 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-black/40 border-white/10 text-white h-14"
            />
            <Input 
              placeholder="السعر (بالدولار)..." 
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="bg-black/40 border-white/10 text-white h-14"
            />
          </div>
          <Button onClick={handleAdd} className="w-full bg-gold-500 text-black h-14 font-black hover:bg-white transition-all">
            <Plus className="ml-2" /> إضافة منتج جديد
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {loading ? (
            <div className="flex justify-center py-10"><Loader2 className="animate-spin text-gold-500" /></div>
          ) : (
            (products as any[])?.map((product) => (
              <div key={product.id} className="p-5 bg-white/5 rounded-2xl border border-white/5 flex justify-between items-center group hover:border-gold-500/30 transition-all">
                <div>
                  <p className="text-xl font-bold mb-1">{product.name}</p>
                  <p className="text-gold-400 font-black font-mono">${product.price}</p>
                </div>
                <button onClick={() => handleDelete(product.id)} className="text-red-500 opacity-0 group-hover:opacity-100 transition-all p-2 hover:bg-red-500/10 rounded-full">
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
