"use client";

import { ReactNode, use, useEffect, useState } from 'react';

// تعريف الـ Props
interface LayoutProps {
  children: ReactNode;
  params: Promise<{ id: string }>;
}

export default function ProjectLayout({ children, params }: LayoutProps) {
  // الحل الملكي: استخدام use() لفك تشفير الـ Promise داخل Client Component
  const resolvedParams = use(params);
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
