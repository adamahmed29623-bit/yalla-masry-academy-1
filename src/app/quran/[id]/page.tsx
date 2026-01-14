import { Suspense } from 'react';

// 1. إخبار النظام أن الصفحة ثابتة ومستقرة
export const dynamic = 'force-static';
export const revalidate = false;

// 2. تجهيز الأبواب الـ 114 مسبقاً (حل مشكلة الخطأ)
export function generateStaticParams() {
  return Array.from({ length: 114 }, (_, i) => ({
    id: (i + 1).toString(),
  }));
}

// 3. واجهة الصفحة الملكية
export default async function QuranPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* تأثير الإضاءة النيون المستوحى من صورتكِ */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,255,255,0.1),transparent_70%)]" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <Suspense fallback={<div className="text-center text-royal-gold">جاري فتح الباب الملكي...</div>}>
          <div className="max-w-4xl mx-auto text-center">
            
            {/* تصميم الباب النيون */}
            <div className="inline-block border-t-4 border-l-2 border-r-2 border-cyan-400 rounded-t-full p-12 mb-10 shadow-[0_0_50px_rgba(6,182,212,0.3)] bg-zinc-900/50">
              <h2 className="text-royal-gold text-2xl mb-4">ترتيل المصحف</h2>
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-b from-cyan-300 to-blue-600 bg-clip-text text-transparent">
                {id}
              </h1>
            </div>

            <div className="mt-10 p-6 border border-zinc-800 rounded-lg bg-zinc-900/30 backdrop-blur-sm">
              <p className="text-xl text-gray-400">
                هنا سيتم عرض محتوى السورة الكريمة بتنسيق يليق بالأكاديمية
              </p>
            </div>

          </div>
        </Suspense>
      </div>

      {/* لمسة الفوانيس الملكية في الزوايا */}
      <div className="fixed bottom-10 right-10 text-4xl opacity-30 animate-pulse">🏮</div>
      <div className="fixed bottom-10 left-10 text-4xl opacity-30 animate-pulse">🏮</div>
    </main>
  );
}
