import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// 1. جلب المفاتيح من بيئة العمل (Cloudflare أو .env)
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// 2. التحقق من صحة المفاتيح والتهيئة الذكية
// هذا السطر يضمن عدم انهيار الموقع أثناء الـ Build إذا لم تكن المفاتيح متاحة للسيرفر مؤقتاً
const isConfigValid = firebaseConfig.apiKey && firebaseConfig.projectId;

const app = (getApps().length > 0) 
  ? getApp() 
  : (isConfigValid ? initializeApp(firebaseConfig) : null);

// 3. تصدير الخدمات للعمل الفعلي في الأكاديمية
// إذا كان app موجوداً سيعمل النظام، وإذا لم يوجد (أثناء الـ Build فقط) لن ينهار المشروع
export const db = app ? getFirestore(app) : null as any;
export const auth = app ? getAuth(app) : null as any;
export const storage = app ? getStorage(app) : null as any;

export default app;
