
import { FirebaseProvider } from '@/context/FirebaseContext'; // تأكدي من المسار
// استورد التطبيق والـ auth والـ firestore من ملف الإعدادات الخاص بك

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <FirebaseProvider 
          firebaseApp={firebaseApp} 
          firestore={firestore} 
          auth={auth}
        >
          {children}
        </FirebaseProvider>
      </body>
    </html>
  );
}
