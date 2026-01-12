"use client"

import { useState, useEffect } from 'react';
import { db } from '../config';
import { 
  collection, 
  onSnapshot, 
  query, 
  QueryConstraint,
  CollectionReference,
  DocumentData
} from 'firebase/firestore';
import { errorEmitter, FirestorePermissionError } from '@/firebase/error-emitter';

/** 🏛️ Yalla Masry Academy - Data Retrieval Engine
 * هذا الخطاف (Hook) مسؤول عن جلب البيانات الحية من قاعدة البيانات
 * مع نظام مراقبة ملكي للأخطاء.
 */

export type WithId<T> = T & { id: string };

export function useCollection<T = DocumentData>(
  collectionName: string,
  queryConstraints: QueryConstraint[] = []
) {
  const [data, setData] = useState<WithId<T>[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    
    // إعداد المرجع والاستعلام
    const colRef = collection(db, collectionName) as CollectionReference<T>;
    const q = query(colRef, ...queryConstraints);

    // بدء الاستماع الحي للبيانات
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const results: WithId<T>[] = [];
        snapshot.forEach((doc) => {
          results.push({ ...(doc.data() as T), id: doc.id });
        });
        setData(results);
        setLoading(false);
        setError(null);
      },
      (err) => {
        console.error(`🔴 Academy Data Error [${collectionName}]:`, err);
        
        // صياغة الخطأ بتنسيق احترافي متوافق مع نظام التنبيهات القوي
        const contextualError: FirestorePermissionError = {
          code: (err as any).code || 'permission-denied',
          message: err.message,
          name: err.name || 'FirebaseError',
          timestamp: Date.now(),
          path: collectionName
        };

        // إرسال التنبيه للنظام المركزي
        errorEmitter.emit('permission-error', contextualError);
        
        setError(err);
        setLoading(false);
      }
    );

    // تنظيف الاتصال عند مغادرة الصفحة لضمان كفاءة النظام
    return () => unsubscribe();
  }, [collectionName, JSON.stringify(queryConstraints)]);

  return { data, loading, error };
}
