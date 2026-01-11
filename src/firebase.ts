import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, doc, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // ضعي بياناتك هنا (apiKey, authDomain, إلخ)
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// إصلاح الدوال المطلوبة في لوحة التحكم (Dashboard) والبروفايل
export const useFirebase = () => {
  return { db, auth, app };
};

export const useDoc = (collectionName: string, id: string) => {
  // منطق جلب مستند واحد
  return { data: null, loading: false, error: null };
};

export const useCollection = (collectionName: string) => {
  // منطق جلب مجموعة كاملة (مثل المعلمين أو الكتب)
  return { data: [], loading: false, error: null };
};

export const useMemoFirebase = () => {
  return { db, auth };
};

export const useFirestore = () => db;
