"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCollection, useFirestore } from '@/firebase';
import { collection, addDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { MessageSquare, Heart, Send, Share2, Award, UserCheck, Sparkles } from 'lucide-react';
export const dynamic = 'force-dynamic';
export default function RoyalCommunity() {
  const [newPost, setNewPost] = useState("");
  const firestore = useFirestore();
  const communityRef = firestore ? collection(firestore, 'community_posts') : null;
  
  // جلب المنشورات من الأحدث للأقدم
  const { data: posts, loading } = useCollection(
    communityRef ? query(communityRef, orderBy('createdAt', 'desc')) : null as any
  );

  const handlePostSubmit = async () => {
    if (!newPost.trim() || !communityRef) return;
    await addDoc(communityRef, {
      content: newPost,
      author: "Student Name", // سيتم ربطه لاحقاً ببيانات الطالب المسجل
      authorAvatar: "/nefertiti-avatar.png",
      likes: 0,
      createdAt: serverTimestamp(),
    });
    setNewPost("");
  };

  return (
    <div className="min-h-screen bg-[#050c16] text-white py-20 px-4 rtl" dir="rtl">
      <div className="max-w-4xl mx-auto">
        
        {/* هيدر المجلس */}
        <div className="text-center mb-16">
          <motion.img 
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            src="/nefertiti-avatar.png" className="w-24 h-24 mx-auto rounded-full border-2 border-gold-500 mb-4 shadow-2xl"
          />
          <h1 className="text-4xl font-black text-gold-400 italic">مجلس نفرتيتي للتفاعل</h1>
          <p className="text-gray-500 mt-2 italic">"هنا تلتقي عقول الطلاب لتتبادل لغة النيل وعلوم الدين."</p>
        </div>

        {/* صندوق كتابة منشور جديد */}
        <div className="bg-white/5 border border-white/10 p-6 rounded-[35px] mb-12 shadow-2xl">
          <textarea 
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="ماذا تعلمتِ اليوم في رحاب الأكاديمية؟"
            className="w-full bg-transparent border-none outline-none text-lg resize-none h-24 placeholder:text-gray-600 font-bold"
          />
          <div className="flex justify-between items-center border-t border-white/5 pt-4">
            <div className="flex gap-4 text-gray-500">
              <Sparkles size={20} className="hover:text-gold-500 cursor-pointer transition-colors" />
            </div>
            <button 
              onClick={handlePostSubmit}
              className="bg-gold-500 text-black px-8 py-3 rounded-2xl font-black flex items-center gap-2 hover:scale-105 transition-all shadow-lg shadow-gold-500/20"
            >
              نشر في المجلس <Send size={18} />
            </button>
          </div>
        </div>

        {/* عرض المنشورات */}
        <div className="space-y-8">
          {loading ? (
            <div className="text-center py-20 animate-pulse text-gold-500 font-black italic">جاري فتح سجلات المجلس...</div>
          ) : (
            (posts as any[])?.map((post) => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#0a1a31] border border-white/5 p-8 rounded-[40px] shadow-xl relative group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img src={post.authorAvatar} className="w-12 h-12 rounded-full border border-gold-500" />
                  <div>
                    <h4 className="font-black text-white flex items-center gap-2">
                      {post.author} <UserCheck size={14} className="text-emerald-500" />
                    </h4>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">عضو في الأكاديمية الملكية</p>
                  </div>
                </div>
                
                <p className="text-xl text-gray-200 leading-relaxed mb-8 font-medium italic">
                  "{post.content}"
                </p>

                <div className="flex items-center gap-8 border-t border-white/5 pt-6 text-gray-400">
                  <button className="flex items-center gap-2 hover:text-red-500 transition-colors">
                    <Heart size={20} /> <span className="text-sm font-bold">{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-gold-500 transition-colors">
                    <MessageSquare size={20} /> <span className="text-sm font-bold">الردود</span>
                  </button>
                  <button className="flex items-center gap-2 mr-auto hover:text-white transition-colors">
                    <Share2 size={20} />
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
