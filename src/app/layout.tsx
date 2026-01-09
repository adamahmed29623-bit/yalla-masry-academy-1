import './globals.css';
import { Inter } from 'next/font/google';

// إعداد الخط لضمان الفخامة في العرض
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'أكاديمية يلا مصري | Yalla Masry Academy',
  description: 'الصرح الملكي لتعلم العامية المصرية بروح فرعونية أصيلة',
};

// هذا السطر هو "الدرع الملكي" لمنع تضارب المسارات أثناء البناء
export const dynamic = 'force-dynamic';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        {/* يمكنك إضافة أي روابط خطوط إضافية هنا لاحقاً */}
      </head>
      <body 
        className={`${inter.className} min-h-screen bg-[#001524] antialiased`} 
        suppressHydrationWarning
      >
        {/* ملاحظة ملكية: قمنا بإزالة الـ Provider من هنا مؤقتاً 
            لضمان عبور الموقع من بوابة Cloudflare بنجاح.
            سيتم استدعاء الفايربيس داخل الصفحات التي تحتاجه فقط.
        */}
        <main className="relative flex min-h-screen flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
