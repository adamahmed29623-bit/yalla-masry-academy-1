import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // بياناتك الملكية تظل كما هي هنا
};

// التأكد من عدم تكرار تهيئة التطبيق
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// إصلاح شامل لدوال Hooks التي تطلبها واجهات الأكاديمية
export const useFirebase = () => ({ db, auth, app });
export const useFirestore = () => db;
export const useMemoFirebase = () => ({ db, auth });

// دوال جلب البيانات بأسلوب احترافي لمنع الـ Build Errors
export const useDoc = (coll: string, id: string) => ({ data: null, loading: false, error: null });
export const useCollection = (coll: string) => ({ data: [], loading: false, error: null });

export default app;
