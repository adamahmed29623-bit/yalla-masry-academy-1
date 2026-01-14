"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "./globals.css"; // تأكدي من مسار ملف التنسيق الخاص بكِ

// 👑 الأوامر الملكية لمنع أخطاء البناء المسبق (تُكتب مرة واحدة فقط)
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <title>أكاديمية يلا مصري | الفريدة من نوعها</title>
        <meta name="description" content="الهوية الملكية للتعليم والتطوير" />
      </head>
      <body>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* 👑 هنا يظهر محتوى الأكاديمية العظيم */}
            <main>
              {children}
            </main>
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}
