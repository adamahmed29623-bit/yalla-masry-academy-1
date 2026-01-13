"use client";

import React, { useEffect, useState } from 'react';
import { db, auth } from '@/lib/firebase';
import { collection, query, orderBy, limit, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

// هذا السطر يخبر السيرفر ألا يحاول بناء الصفحة مسبقاً بدون المفاتيح
export const dynamic = 'force-dynamic';

export default function CommunityPage() {
  const [user] = useAuthState(auth);
  const [posts, setPosts] = useState<any[]>([]);
  const [newPost, setNewPost] = useState('');
  const [loading, setLoading] = useState(true);

  // جلب المنشورات من Firebase
  useEffect(() => {
    async function fetchPosts() {
      if (!db) return; // حماية في حال عدم تهيئة القاعدة
      try {
        const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'), limit(20));
        const querySnapshot = await getDocs(q);
        const fetchedPosts = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  const handlePostSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.trim() || !user || !db) return;

    try {
      await addDoc(collection(db, 'posts'), {
        text: newPost,
        authorId: user.uid,
        authorName: user.displayName || 'عضو في الأكاديمية',
        authorPhoto: user.photoURL,
        createdAt: serverTimestamp(),
      });
      setNewPost('');
      // تحديث بسيط للقائمة بعد النشر
      window.location.reload(); 
    } catch (error) {
      alert("عذراً ملكتنا، حدث خطأ أثناء النشر.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 dir-rtl">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gold-600">مجتمع أكاديمية يلا مصري</h1>
        <p className="text-gray-600">هنا نتبادل المعرفة ونبني المستقبل</p>
      </header>

      {user ? (
        <form onSubmit={handlePostSubmit} className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-gold-500 outline-none"
            placeholder="ماذا يدور في ذهنك اليوم؟"
            rows={3}
          />
          <button
            type="submit"
            className="mt-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
          >
            نشر في المجتمع
          </button>
        </form>
      ) : (
        <div className="mb-8 p-4 bg-yellow-50 text-yellow-800 rounded-lg text-center">
          يرجى تسجيل الدخول لتتمكن من المشاركة في مجتمع الأكاديمية.
        </div>
      )}

      <div className="space-y-6">
        {loading ? (
          <p className="text-center text-gray-500">جاري تحميل نبض المجتمع...</p>
        ) : posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="bg-white p-6 rounded-lg shadow border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gold-200 rounded-full flex items-center justify-center font-bold text-gold-700">
                  {post.authorName?.charAt(0)}
                </div>
                <div className="mr-3">
                  <h3 className="font-semibold text-gray-800">{post.authorName}</h3>
                  <span className="text-xs text-gray-400">منذ قليل</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{post.text}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">لا توجد منشورات بعد، كن أول من يضع بصمته!</p>
        )}
      </div>
    </div>
  );
}
