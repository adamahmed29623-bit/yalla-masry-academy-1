"use client";

import React, { useEffect, useState } from 'react';
import { db, auth } from '@/lib/firebase';
import { collection, query, orderBy, limit, getDocs, addDoc, serverTimestamp, onAuthStateChanged } from 'firebase/firestore';

// منع التعارض مع السيرفر أثناء البناء
export const dynamic = 'force-dynamic';

export default function CommunityPage() {
  const [user, setUser] = useState<any>(null);
  const [posts, setPosts] = useState<any[]>([]);
  const [newPost, setNewPost] = useState('');
  const [loading, setLoading] = useState(true);

  // مراقبة حالة تسجيل دخول المستخدم
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  // جلب المنشورات
  useEffect(() => {
    async function fetchPosts() {
      if (!db) return;
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
        createdAt: serverTimestamp(),
      });
      setNewPost('');
      alert("تم النشر بنجاح في رحاب الأكاديمية!");
      window.location.reload(); 
    } catch (error) {
      alert("عذراً، حدث خطأ أثناء النشر.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4" style={{ direction: 'rtl' }}>
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-blue-900">مجتمع أكاديمية يلا مصري</h1>
        <p className="text-gray-600 mt-2">مساحتكم الخاصة لتبادل المعرفة</p>
      </header>

      {user ? (
        <form onSubmit={handlePostSubmit} className="mb-8 bg-white p-6 rounded-lg shadow-sm border">
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-right"
            placeholder="ماذا تودين أن تشاركي الأكاديمية اليوم؟"
            rows={3}
          />
          <button
            type="submit"
            className="mt-2 bg-blue-600 text-white px-8 py-2 rounded-full hover:bg-blue-700 transition"
          >
            نشر الآن
          </button>
        </form>
      ) : (
        <div className="mb-8 p-4 bg-blue-50 text-blue-800 rounded-lg text-center border border-blue-100">
          أهلاً بكِ جلالة الملكة، يرجى تسجيل الدخول لتتمكني من النشر.
        </div>
      )}

      <div className="space-y-4">
        {loading ? (
          <p className="text-center text-gray-500">جاري تحميل المحتوى...</p>
        ) : posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-800">
                  {post.authorName?.charAt(0)}
                </div>
                <div className="mr-3 text-right">
                  <h3 className="font-semibold text-gray-800">{post.authorName}</h3>
                </div>
              </div>
              <p className="text-gray-700 text-right">{post.text}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">لا توجد منشورات حتى الآن.</p>
        )}
      </div>
    </div>
  );
}
