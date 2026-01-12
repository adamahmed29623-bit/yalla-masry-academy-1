"use client"

import { useState, useEffect } from 'react';
import { db } from '../config';
import { 
  doc, 
  onSnapshot, 
  DocumentReference,
  DocumentData
} from 'firebase/firestore';
import { errorEmitter, FirestorePermissionError } from '@/firebase/error-emitter';

/** 🛡️ Yalla Masry Academy - Single Document Engine
 * هذا الخطاف مسؤول عن جلب بيانات وثيقة واحدة بشكل حي
 */

export type WithId<T> = T & { id: string };

export function useDoc<T = DocumentData>(
  collectionName: string,
  docId: string | undefined
) {
  const [data, setData] = useState<WithId<T> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // إذا لم يتوفر معرف الوثيقة، نتوقف بهدوء
    if (!docId) {
      setLoading(false);
      return;
    }

    setLoading(true);
    
    // إعداد المرجع للوثيقة المطلوبة
    const docRef = doc(db, collectionName, docId) as DocumentReference<T>;

    // بدء الاستماع الحي
    const unsubscribe = onSnapshot(
      docRef,
      (snapshot) => {
        if (snapshot.exists()) {
          setData({ ...(snapshot.data() as T), id: snapshot.id });
        } else {
          setData(null);
        }
        setLoading(false);
        setError(null);
      },
      (err) => {
        console.error(`🔴 Academy Doc Error [${collectionName}/${docId}]:`, err);
        
        // صياغة الخطأ ليتوافق مع نظام المراقبة القوي الخاص بكِ
        const contextualError: FirestorePermissionError = {
          code: (err as any).code || 'permission-denied',
          message: err.message,
          name: err.name || 'FirebaseError',
          timestamp: Date.now(),
          path: `${collectionName}/${docId}`
        };

        // إرسال التنبيه فوراً
        errorEmitter.emit('permission-error', contextualError);
        
        setError(err);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [collectionName, docId]);

  return { data, loading, error };
}
