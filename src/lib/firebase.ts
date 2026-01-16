import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // ضعي بياناتك هنا مباشرة لضمان عملها على هوستنجر دون الحاجة لملف .env
  apiKey: "AIzaSy...", 
  authDomain: "yalla-masry-academy.firebaseapp.com",
  projectId: "yalla-masry-academy", // هذا هو المعرف الذي يطلبه السيرفر
  storageBucket: "yalla-masry-academy.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};

// منع إعادة تهيئة التطبيق إذا كان يعمل بالفعل
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
