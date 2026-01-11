import { Suspense } from 'react';
import { notFound } from 'next/navigation';

// تعريف الـ Props وفق أحدث معايير الأمان والقوة
interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function TeacherProfilePage({ params }: PageProps) {
  // 1. فك تشفير المعرف (ID) لضمان عدم حدوث خطأ أثناء البناء
  const resolvedParams = await params;
  const teacherId = resolvedParams.id;

  if (!teacherId) {
    return notFound();
  }

  return (
    // استخدام خلفية ملكية هادئة مع تدرج فخم
    <main className="min-h-screen bg-[#FDFBF7] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* قسم الهوية البصرية للمعلمة - مجهز للتصميم الفخم */}
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-royal-gold/10">
          <div className="h-48 bg-gradient-to-r from-[#1A237E] to-[#C5A059] opacity-90" />
          
          <div className="relative -mt-24 px-8 pb-8 flex flex-col md:flex-row items-center md:items-end gap-6">
            {/* إطار صورة المعلمة الملكي */}
            <div className="w-48 h-48 rounded-2xl border-4 border-white shadow-lg overflow-hidden bg-gray-200">
               {/* هنا ستوضع صورة المعلمة لاحقاً */}
               <div className="w-full h-full flex items-center justify-center text-gray-400">
                  صورة المعلمة
               </div>
            </div>
            
            <div className="flex-1 text-center md:text-right mb-4">
              <h1 className="text-4xl font-bold text-[#1A237E] mb-2">اسم المعلمة الملكي</h1>
              <p className="text-lg text-[#C5A059] font-medium italic">خبيرة في اللغة العربية والدراسات الإسلامية</p>
            </div>

            {/* زر الحجز - ليضاهي بيربلي بل ويتفوق عليه */}
            <button className="mb-4 px-10 py-4 bg-[#C5A059] text-white rounded-full font-bold shadow-lg hover:bg-[#A38241] transition-all transform hover:scale-105">
              احجزي جلستكِ الملكية الآن
            </button>
          </div>
        </div>

        {/* مساحة للمحتوى التفصيلي - بانتظار صوركِ لتنسيقها */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#1A237E] mb-4 border-r-4 border-[#C5A059] pr-4">نبذة عن المعلمة</h2>
              <p className="text-gray-700 leading-relaxed">جاري استحضار السيرة الذاتية الفاخرة...</p>
            </section>
          </div>

          <aside className="space-y-8">
            {/* قسم إحصائيات المعلمة مثل التقييم وعدد الطلاب */}
            <div className="bg-[#1A237E] text-white p-8 rounded-2xl shadow-xl">
               <h3 className="text-xl font-bold mb-4 border-b border-white/20 pb-2 text-center">إحصائيات النجاح</h3>
               {/* محتوى الإحصائيات */}
            </div>
          </aside>
        </div>

      </div>
    </main>
  );
}
