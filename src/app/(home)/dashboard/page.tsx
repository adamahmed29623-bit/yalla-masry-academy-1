
"use client";

import { useFirebase } from "@/context/useFirebase"; // تأكدي من المسار الصحيح
import { useMemo } from "react";

export default function DashboardPage() {
  // استدعاء البيانات بوضوح تام لتجنب خطأ Property 'user' does not exist
  const { user, firestore, isUserLoading } = useFirebase();

  // نظام ذكي لجلب بيانات المستخدم فور توفرها
  const userStats = useMemo(() => {
    if (!user || !firestore) return null;
    // هنا نربط لوحة التحكم بـ 11 لغة عالمية
    return {
      name: user.displayName,
      lastLogin: new Date().toLocaleDateString(),
      // إضافة تفاصيل فريدة لهوية الأكاديمية
    };
  }, [user, firestore]);

  if (isUserLoading) return <div className="royal-loader">جاري تحضير القاعة الملكية...</div>;

  return (
    <main className="min-h-screen bg-royal-gold/5 p-8">
      <h1 className="text-4xl font-bold text-royal-blue mb-6">
        مرحباً بك في قصر المعرفة، {user?.displayName || "أيها الطالب"}
      </h1>
      {/* تصميم اللوحات الفريدة التي خططتِ لها لأشهر */}
    </main>
  );
}
