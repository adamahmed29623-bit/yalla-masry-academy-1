export const dynamic = 'force-static';
export function generateStaticParams() { return []; }
import { Suspense } from 'react';

// تأكدي أن تعريف الـ Props يستخدم Promise كما يطلب النظام الجديد
export default async function QuranPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="container mx-auto py-10">
      {/* محتوى الصفحة الخاص بكِ هنا */}
      <h1 className="text-3xl font-bold">سورة {id}</h1>
      {/* بقية تفاصيل الصفحة الملكية */}
    </div>
  );
}
