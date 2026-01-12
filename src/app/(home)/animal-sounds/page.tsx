'use client';

import React from 'react';
import { redirect } from 'next/navigation';

// إعادة توجيه أي زائر يحاول دخول صفحة الأطفال إلى الصفحة الرئيسية الملكية
export default function AnimalSoundsPage() {
  redirect('/');
  return null;
}
