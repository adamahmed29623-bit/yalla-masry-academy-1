import { Suspense } from 'react';

export const dynamic = 'force-static';
export const revalidate = false;

// تجهيز مسارات الأحاديث أو الكتب مسبقاً (مثلاً 40 للأربعين النووية أو أي عدد تفضلينه)
export function generateStaticParams() {
  return Array.from({ length: 40 }, (_, i) => ({
    id: (i + 1).toString(),
  }));
}

export default async function SunnahPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-black text-white relative">
      <div className="container mx-auto px-4 py-20 relative z-10 text-center">
        {/* تصميم الباب النيون الخاص بالسنة */}
        <div className="inline-block border-t-4 border-l-2 border-r-2 border-amber-500 rounded-t-full p-12 mb-10 shadow-[0_0_50px_rgba(245,158,11,0.3)] bg-zinc-900/50">
          <h2 className="text-royal-gold text-2xl mb-4">السنة النبوية</h2>
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-b from-amber-200 to-yellow-600 bg-clip-text text-transparent">
            {id}
          </h1>
        </div>
      </div>
      {/* الفوانيس الملكية المستوحاة من صورتكِ */}
      <div className="fixed bottom-10 right-10 text-4xl opacity-20">🏮</div>
    </main>
  );
}
