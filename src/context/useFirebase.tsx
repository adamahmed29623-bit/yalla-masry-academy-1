// هذا التعديل يضمن أن لوحة التحكم "ترى" المستخدم وبياناته فوراً
export function useFirebase() {
  // ... (كود الإعداد الخاص بكِ)
  
  return {
    user: currentUser,      // الملك/الطالب الحالي
    firestore: db,          // كنوز البيانات
    auth: auth,             // حارس البوابة
    isUserLoading: loading, // بواب انتظار البيانات
    app: firebaseApp        // أساس القصر
  };
}
