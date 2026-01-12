"use client"

import { db } from './config';
import { doc, setDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { errorEmitter, FirestorePermissionError } from './error-emitter';

/** ⚡ Yalla Masry Academy - Background Update Engine
 * محرك التحديثات غير المعطلة للواجهة، مع نظام مراقبة ذكي
 */

export const nonBlockingUpdate = async (
  path: string, 
  data: any, 
  options: { merge?: boolean; isDelete?: boolean } = {}
) => {
  const docRef = doc(db, path);
  
  try {
    if (options.isDelete) {
      await deleteDoc(docRef);
    } else if (options.merge) {
      await setDoc(docRef, data, { merge: true });
    } else {
      await updateDoc(docRef, data);
    }
  } catch (error: any) {
    console.error("🔴 Background Update Failed:", error);

    // صياغة الخطأ ليتوافق مع المعايير الجديدة
    const contextualError: FirestorePermissionError = {
      code: error.code || 'permission-denied',
      message: error.message || 'Operation failed',
      name: 'FirestorePermissionError',
      timestamp: Date.now(),
      path: path
    };

    // إرسال التنبيه للنظام المركزي
    errorEmitter.emit('permission-error', contextualError);
    
    throw error; // إعادة رمي الخطأ لمن يحتاجه
  }
};
