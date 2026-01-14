import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// 1. المفاتيح الملكية - تأكدي من تسميتها بنفس الأسماء في Cloudflare
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// 2. التحقق الذكي: منع الانهيار إذا كانت المفاتيح غائبة أثناء البناء (Build)
const isConfigValid = !!firebaseConfig.projectId;

// 3. تهيئة التطبيق بأسلوب يمنع تكرار الإعلان (Singleton Pattern)
const app = (getApps().length === 0 && isConfigValid) 
  ? initializeApp(firebaseConfig) 
  : getApps().length > 0 
    ? getApp() 
    : null; // يعيد null إذا كنا في مرحلة البناء بدون مفاتيح

// 4. تصدير الخدمات (التي ستستخدمينها في الأكاديمية)
export const auth = app ? getAuth(app) : null;
export const db = app ? getFirestore(app) : null;
export const storage = app ? getStorage(app) : null;

export default app;
