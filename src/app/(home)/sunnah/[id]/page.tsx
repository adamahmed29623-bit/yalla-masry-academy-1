export const dynamic = 'force-static';
export function generateStaticParams() { return []; }
import { Suspense } from 'react';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function QuranPage({ params }: PageProps) {
  // هنا نقوم بفك تشفير الرابط "await" ليعمل بكل قوة
  const resolvedParams = await params;
  const id = resolvedParams.id;

  return (
    <main className="min-h-screen bg-royal-gold/5 pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-royal-blue mb-8">
          سورة {id}
        </h1>
        {/* هنا تضعين المكون الخاص بعرض الآيات */}
        <Suspense fallback={<div className="text-center">جاري تحميل الآيات الملكية...</div>}>
          {/* <QuranReader id={id} /> */}
        </Suspense>
      </div>
    </main>
  );
}
