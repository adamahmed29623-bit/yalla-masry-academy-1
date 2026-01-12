"use client"

import { useEffect } from 'react';
import { errorEmitter, FirestorePermissionError } from '@/firebase/error-emitter';
import { useToast } from '@/hooks/use-toast';

export const FirebaseErrorListener = () => {
  const { toast } = useToast();

  useEffect(() => {
    const handleError = (error: FirestorePermissionError) => {
      console.error("🔒 Firebase Permission Denied:", error);
      toast({
        variant: "destructive",
        title: "خطأ في الصلاحيات",
        description: "عذراً، لا تملك الصلاحية الكافية للوصول إلى هذه البيانات الملكية.",
      });
    };

    // التسجيل في نظام مراقبة الأخطاء
    const unsubscribe = errorEmitter.on('permission-error', handleError);

    return () => unsubscribe();
  }, [toast]);

  return null; // مكون مراقبة خلفي لا يحتاج لعناصر واجهة
};
