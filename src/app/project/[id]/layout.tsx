export const dynamic = 'force-static';
export function generateStaticParams() {
  return [];
}
import { ReactNode } from 'react';

// تعريف الـ Props ليتوافق مع Next.js 15
interface LayoutProps {
  children: ReactNode;
  params: Promise<{ id: string }>;
}

export default async function ProjectLayout({ children, params }: LayoutProps) {
  // فك تشفير المعرف (id) لضمان استقرار المشاريع
  const resolvedParams = await params;
  const id = resolvedParams.id;

  return (
    <div className="project-layout-container">
      {/* هذا القسم يحافظ على تفاصيل المشروع الملكي الذي خططتِ له */}
      <nav className="bg-royal-blue text-white p-4 shadow-md">
        <div className="container mx-auto">
          تصفح المشروع: <span className="font-bold text-royal-gold">{id}</span>
        </div>
      </nav>
      
      <section className="project-content">
        {children}
      </section>
    </div>
  );
}
