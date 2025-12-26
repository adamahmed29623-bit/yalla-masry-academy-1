'use client';

import { useState, useEffect } from 'react';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

export function FirebaseErrorListener() {
  const [error, setError] = useState<FirestorePermissionError | null>(null);

  useEffect(() => {
    const handleError = (error: FirestorePermissionError) => {
      setError(error);
    };

    // الاشتراك في مراقب الأخطاء
    errorEmitter.on('permission-error', handleError);

    return () => {
      // تنظيف الاشتراك عند إغلاق المكون
      errorEmitter.off('permission-error', handleError);
    };
  }, []);

  if (error) {
    // رمي الخطأ ليتم التقاطه بواسطة Error Boundary الخاص بـ Next.js
    throw error;
  }

  return null;
}
