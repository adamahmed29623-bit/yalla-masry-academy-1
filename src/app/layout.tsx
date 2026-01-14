"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "./globals.css";

// 👑 أمر واحد فقط.. لا تكرار بعد اليوم في محراب الأكاديمية
export const dynamic = 'force-dynamic';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}
