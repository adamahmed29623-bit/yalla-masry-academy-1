import { Suspense } from 'react';

// 1. إعدادات الإنتاج المستقرة
export const dynamic = 'force-static';
export const revalidate = false;

// 2. تجهيز مسارات المعلمين (سنجهز 20 مساراً كمثال، ويمكنك زيادتهم)
export function generateStaticParams() {
  return Array.from({ length: 20 }, (_, i) => ({
    id: (i + 1).toString(),
  }));
}

export default async function TeacherPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-black text-white relative">
      {/* خلفية بتأثير ضوئي خفيف */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black" />

      <div className="container mx-auto px-4 py-20 relative z-10 text-center">
        {/* إطار نيون ملكي لملف المعلم */}
        <div className="inline-block border-2 border-royal-gold rounded-full p-1 w-32 h-32 mb-6 shadow-[0_0_20px_rgba(218,165,32,0.4)]">
          <div className="w-full h-full rounded-full bg-zinc-800 flex items-center justify-center text-royal-gold text-4xl">
            👤
          </div>
        </div>

        <h2 className="text-royal-gold text-xl mb-2">الملف الشخصي للمعلم</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
          الأستاذ رقم {id}
        </h1>

        <div className="max-w-2xl mx-auto p-8 border border-zinc-800 bg-zinc-900/50 backdrop-blur-md rounded-2xl">
          <p className="text-gray-400 text-lg">
            هنا تظهر السيرة الذاتية الملكية وتفاصيل الإجازات والترتيل الخاص بالمعلم.
          </p>
        </div>
      </div>

      {/* لمسة الفوانيس الملكية */}
      <div className="fixed bottom-10 right-10 text-3xl opacity-20">🏮</div>
    </main>
  );
}
