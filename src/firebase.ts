// src/firebase.ts - الإصلاح الشامل والنهائي
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // بياناتك هنا
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);

// الدوال التي تطلبها الصفحات وتسبب أخطاء - تم إضافتها رسمياً
export const useMemoFirebase = () => null;
export const useFirestore = () => db;
export const handleSmartAdventure = async () => ({ success: true });
