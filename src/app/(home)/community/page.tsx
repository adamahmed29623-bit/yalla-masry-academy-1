"use client";

import React, { useState } from "react";
import { useFirebase } from "@/context/useFirebase";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageSquare, 
  Users, 
  Globe, 
  Send, 
  PlusCircle, 
  MessageCircle, 
  TrendingUp,
  Heart,
  Share2
} from "lucide-react";

// بيانات تجريبية للمجتمع (سيتم ربطها بـ Firestore لاحقاً)
const INITIAL_POSTS = [
  {
    id: 1,
    author: "لينغ من الصين",
    content: "كيف يمكنني قول 'أنا أحب مصر' بـ 5 لهجات مختلفة؟ بدأت رحلتي في الأكاديمية اليوم!",
    likes: 24,
    comments: 5,
    tags: ["استفسار", "صيني"],
    time: "منذ ساعتين"
  },
  {
    id: 2,
    author: "أرجون من الهند",
    content: "تحدي اليوم في المغامرة الذكية كان مذهلاً. شكرًا للملكة نفرتيتي على هذا النظام.",
    likes: 89,
    comments: 12,
    tags: ["إنجاز", "هندي"],
    time: "منذ 5 ساعات"
  }
];

export default function CommunityPage() {
  const { user, isUserLoading } = useFirebase() as any;
  const [posts, setPosts] = useState(INITIAL_POSTS);
  const [newPost, setNewPost] = useState("");

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.trim()) return;
    
    const post = {
      id: Date.now(),
      author: user?.displayName || "مستكشف ملكي",
      content: newPost,
      likes: 0,
      comments: 0,
      tags: ["عام"],
      time: "الآن"
    };
    setPosts([post, ...posts]);
    setNewPost("");
  };

  if (isUserLoading) return <div className="h-screen bg-[#fcfaf2] flex items-center justify-center font-serif text-royal-blue">جاري فتح بوابات المجتمع...</div>;

  return (
    <div className="min-h-screen bg-[#fcfaf2] font-serif pb-20">
      {/* رأس الصفحة الملكي */}
      <header className="bg-royal-blue py-16 px-6 relative overflow-hidden text-center shadow-2xl">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/egyptian-hieroglyphs.png')]"></div>
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
          <h1 className="text-5xl font-black text-white mb-4">مجتمع نفرتيتي العالمي</h1>
          <p className="text-gold-300 text-xl italic max-w-2xl mx-auto">
            هنا يتحدث العالم بـ 11 لغة.. شارك، اسأل، وتفاعل مع طلاب من كل قارات الأرض.
          </p>
        </motion.div>
      </header>

      <div className="max-w-6xl mx-auto mt-12 px-6 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* الجانب الأيمن: إحصائيات وتفاعلات (3 أعمدة) */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-white p-8 rounded-[35px] shadow-xl border-t-4 border-gold-500">
            <h3 className="text-xl font-bold text-royal-blue mb-6 flex items-center gap-2">
              <TrendingUp className="text-gold-600" /> نشاط الإمبراطورية
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-gray-50 p-4 rounded-2xl">
                <span className="text-gray-500">متصل الآن</span>
                <span className="font-bold text-green-600 flex items-center gap-1">
                  <span className="h-2 w-2 bg-green-600 rounded-full animate-pulse"></span> 1,240
                </span>
              </div>
              <div className="flex justify-between items-center bg-gray-50 p-4 rounded-2xl">
                <span className="text-gray-500">دول مشاركة</span>
                <span className="font-bold text-royal-blue tracking-wider">45 دولة</span>
              </div>
            </div>
          </div>

          <div className="bg-royal-blue text-white p-8 rounded-[35px] shadow-xl relative overflow-hidden group">
            <Globe className="absolute -right-10 -bottom-10 w-40 h-40 text-white/5 group-hover:rotate-12 transition-transform duration-700" />
            <h3 className="text-xl font-bold mb-4">غرف الـ 11 لغة</h3>
            <p className="text-blue-100 text-sm mb-6 leading-relaxed">انضم إلى غرف الدردشة المتخصصة للتدريب مع ناطقين أصليين.</p>
            <button className="w-full bg-gold-500 text-royal-blue py-3 rounded-xl font-black hover:bg-gold-600 transition-all">
              استعرض الغرف
            </button>
          </div>
        </aside>

        {/* المنتصف: ساحة التفاعل والمنشورات (8 أعمدة) */}
        <main className="lg:col-span-8 space-y-8">
          {/* صندوق كتابة المنشور */}
          <section className="bg-white p-6 rounded-[35px] shadow-2xl border-2 border-gold-100">
            <form onSubmit={handlePostSubmit}>
              <div className="flex gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center text-white font-bold text-xl">
                  {user?.displayName?.[0] || "N"}
                </div>
                <textarea 
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  placeholder="يا جلالة الملكة، العالم ينتظر كلماتك.. أو اطرح سؤالك هنا بـ 11 لغة!"
                  className="flex-1 bg-gray-50 rounded-2xl p-4 outline-none border-2 border-transparent focus:border-gold-500 transition-all resize-none h-24"
                />
              </div>
              <div className="flex justify-end">
                <button type="submit" className="bg-royal-blue text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-royal-blue/90 shadow-lg">
                  <Send className="w-4 h-4" /> نشر في المجتمع
                </button>
              </div>
            </form>
          </section>

          {/* قائمة المنشورات */}
          <section className="space-y-6">
            <AnimatePresence>
              {posts.map((post) => (
                <motion.div 
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white p-8 rounded-[35px] shadow-lg border border-gray-100 hover:border-gold-200 transition-all"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gold-100 rounded-2xl">
                        <Users className="w-6 h-6 text-gold-700" />
                      </div>
                      <div>
                        <h4 className="font-bold text-royal-blue">{post.author}</h4>
                        <span className="text-xs text-gray-400">{post.time}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {post.tags.map(tag => (
                        <span key={tag} className="text-[10px] bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-bold">#{tag}</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">"{post.content}"</p>
                  
                  <div className="flex items-center gap-6 border-t pt-6 border-gray-50">
                    <button className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors">
                      <Heart className="w-5 h-5" /> <span className="text-sm font-bold">{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-400 hover:text-royal-blue transition-colors">
                      <MessageCircle className="w-5 h-5" /> <span className="text-sm font-bold">{post.comments}</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-400 hover:text-green-500 transition-colors ml-auto">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </section>
        </main>
      </div>
    </div>
  );
}
