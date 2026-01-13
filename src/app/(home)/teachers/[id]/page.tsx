export const dynamic = 'force-static';
export function generateStaticParams() { return []; }
import { Suspense } from 'react';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function TeacherProfilePage({ params }: PageProps) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  return (
    <main className="min-h-screen bg-[#0A0F1E] text-white pt-24 pb-12 font-sans">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* الهيدر الملكي المستوحى من صورة (منهج يلا مصري الملكي) */}
        <div className="relative rounded-t-3xl overflow-hidden border-b-4 border-[#C5A059] bg-[#111827]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A237E]/50 to-transparent"></div>
          <div className="relative p-10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-44 h-44 rounded-2xl border-2 border-[#C5A059] overflow-hidden shadow-[0_0_20px_rgba(197,160,89,0.3)]">
              <img src="/api/placeholder/400/400" alt="معلمة ملكية" className="w-full h-full object-cover" />
            </div>
            <div className="text-right flex-1">
              <h1 className="text-4xl font-bold text-[#C5A059] mb-2">اسم المعلمة الملكي</h1>
              <p className="text-xl text-gray-300 italic">خبير متمكن في اللهجة المصرية وإتيكيت الحوار</p>
              <div className="mt-4 flex gap-4">
                <span className="bg-[#C5A059]/10 text-[#C5A059] px-4 py-1 rounded-full border border-[#C5A059]/30 text-sm">إتقان بنسبة 95%</span>
              </div>
            </div>
            <button className="bg-[#C5A059] hover:bg-[#A38241] text-black font-bold py-4 px-10 rounded-xl transition-all shadow-lg hover:scale-105">
              احجزي جلستك الملكية
            </button>
          </div>
        </div>

        {/* أركان المنهج (مستوحاة من الصورة الثالثة: أركان المنهج الأساسية) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800 text-center hover:border-[#C5A059] transition-colors">
            <div className="text-[#C5A059] text-3xl mb-3">👑</div>
            <h3 className="text-[#C5A059] font-bold mb-2">اللهجة الملكية</h3>
            <p className="text-gray-400 text-sm">مخارج حروف دقيقة وتراكيب لغوية منتقاة بعناية</p>
          </div>
          <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800 text-center hover:border-[#C5A059] transition-colors">
            <div className="text-[#C5A059] text-3xl mb-3">🎭</div>
            <h3 className="text-[#C5A059] font-bold mb-2">الثقافة والإتيكيت</h3>
            <p className="text-gray-400 text-sm">فهم أعمق للبروتوكول المصري في المجالس والمناسبات</p>
          </div>
          <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800 text-center hover:border-[#C5A059] transition-colors">
            <div className="text-[#C5A059] text-3xl mb-3">💎</div>
            <h3 className="text-[#C5A059] font-bold mb-2">الذكاء الاجتماعي</h3>
            <p className="text-gray-400 text-sm">مهارات إدارة الحوار بأسلوب ساحر ومقنع</p>
          </div>
        </div>

        {/* مسار التعلم (مستوحى من الصورة الخامسة: رحلة التميز) */}
        <div className="mt-12 bg-[#111827] p-10 rounded-3xl border border-gray-800">
          <h2 className="text-2xl font-bold text-[#C5A059] mb-8 border-r-4 border-[#C5A059] pr-4">رحلة تميز الطالب مع المعلمة</h2>
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 relative">
            <div className="flex-1">
              <h4 className="text-orange-500 font-bold mb-2">مرحلة التأسيس</h4>
              <p className="text-sm text-gray-400">بناء مخزون المفردات الراقي</p>
            </div>
            <div className="flex-1">
              <h4 className="text-orange-500 font-bold mb-2">مرحلة الانطلاق</h4>
              <p className="text-sm text-gray-400">إدارة الحوارات اليومية بطلاقة</p>
            </div>
            <div className="flex-1 border-t-2 border-[#C5A059] pt-4 md:border-t-0 md:pt-0">
              <h4 className="text-[#C5A059] font-bold mb-2 text-xl">الاحتراف الملكي</h4>
              <p className="text-sm text-gray-300 font-bold">التحدث كأصل من أصول القاهرة</p>
            </div>
          </div>
        </div>

        {/* رسالة من القلب (مستوحاة من الصورة التاسعة) */}
        <footer className="mt-12 text-center p-8 bg-gradient-to-b from-transparent to-[#1A237E]/20 rounded-3xl">
          <p className="text-xl italic text-gray-300 max-w-2xl mx-auto mb-4">
            "اللغة هي مرآة الروح، وعندما تتعلمي المصرية برقي، فأنتِ تعكسين للعالم جمال جوهرك وثقافتك."
          </p>
          <span className="text-[#C5A059] font-bold">— رؤية "نوف" الإبداعية</span>
        </footer>
      </div>
    </main>
  );
}
