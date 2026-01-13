"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCollection, useFirestore } from '@/firebase';
import { collection, query, where } from 'firebase/firestore';
import { Book, Search, ScrollText, Moon, Library, Download, Loader2, Sparkles } from 'lucide-react';
export const dynamic = 'force-dynamic';
export default function GrandIslamicLibrary() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const firestore = useFirestore();
  const libraryRef = firestore ? collection(firestore, 'islamic_library') : null;

  // استدعاء البيانات من قاعدة البيانات الملكية
  const { data: books, loading } = useCollection(
    activeTab === 'all' 
      ? libraryRef 
      : (libraryRef ? query(libraryRef, where('category', '==', activeTab)) : null) as any
  );

  return (
    <div className="min-h-screen bg-[#050c16] text-white rtl selection:bg-gold-500/30" dir="rtl">
      
      {/* هيدر المكتبة الملكي */}
      <header className="relative py-24 border-b border-gold-500/20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/islamic-bg.png')] opacity-10" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.img 
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            src="/nefertiti-avatar.png" 
            className="w-32 h-32 mx-auto rounded-full border-4 border-gold-500 shadow-[0_0_60px_rgba(212,175,55,0.4)] mb-8"
          />
          <h1 className="text-6xl font-black text-gold-400 mb-4 italic tracking-tighter">مكتبة الأكاديمية الكبرى</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-xl italic leading-relaxed">
            "نضع بين يديكِ يا جلالة الملكة عصارة العلوم الإسلامية من تفاسير وأحاديث وقراءات، محفوظة في سجلاتنا للأبد."
          </p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        {/* شريط الأدوات الملكي */}
        <div className="flex flex-col md:flex-row gap-6 mb-16 items-center justify-between bg-white/5 p-6 rounded-[30px] border border-white/10">
          <div className="flex flex-wrap gap-3 justify-center">
            <TabButton active={activeTab === 'all'} onClick={() => setActiveTab('all')} label="الكل" />
            <TabButton active={activeTab === 'quran'} onClick={() => setActiveTab('quran')} label="القرآن والقراءات" />
            <TabButton active={activeTab === 'hadith'} onClick={() => setActiveTab('hadith')} label="الأحاديث" />
            <TabButton active={activeTab === 'tafseer'} onClick={() => setActiveTab('tafseer')} label="التفاسير" />
          </div>
          
          <div className="relative w-full md:w-80">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gold-500" size={20} />
            <input 
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث في الكنوز الإسلامية..." 
              className="w-full bg-[#0a1a31] border border-gold-500/30 p-4 pr-12 rounded-2xl focus:border-gold-500 outline-none transition-all font-bold"
            />
          </div>
        </div>

        {/* عرض المحتوى */}
        {loading ? (
          <div className="flex flex-col items-center py-40 gap-4">
            <Loader2 className="animate-spin text-gold-500" size={60} />
            <p className="text-gold-400 font-black italic animate-pulse">جاري فتح الخزائن الملكية...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {(books as any[])?.filter(b => b.title.includes(searchQuery)).map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </AnimatePresence>
          </div>
        )}
      </main>
    </div>
  );
}

function BookCard({ book }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -10 }}
      className="bg-[#0a1a31] border border-white/10 rounded-[40px] p-8 relative group overflow-hidden shadow-xl"
    >
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl group-hover:bg-gold-500/20 transition-all" />
      <Sparkles className="absolute top-6 left-6 text-gold-500 opacity-20 group-hover:opacity-100 transition-all" size={24} />
      
      <div className="mb-6 bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-gold-500 transition-colors">
        <Library className="text-gold-500" size={30} />
      </div>
      
      <h3 className="text-2xl font-black text-white mb-2 leading-tight">{book.title}</h3>
      <p className="text-gold-400/80 font-bold text-sm mb-4 italic">{book.author}</p>
      <p className="text-gray-500 text-sm mb-8 line-clamp-3 leading-relaxed">{book.description}</p>
      
      <a 
        href={book.downloadUrl}
        className="flex items-center justify-center gap-2 w-full bg-white/5 border border-white/10 py-4 rounded-2xl font-black hover:bg-gold-500 hover:text-black transition-all group-last:mb-0"
      >
        <Download size={18} /> تحميل المخطوطة
      </a>
    </motion.div>
  );
}

function TabButton({ active, onClick, label }: any) {
  return (
    <button 
      onClick={onClick}
      className={`px-6 py-3 rounded-full font-black text-sm transition-all ${
        active ? 'bg-gold-500 text-black shadow-lg shadow-gold-500/20' : 'bg-white/5 text-gray-400 hover:bg-white/10'
      }`}
    >
      {label}
    </button>
  );
}
