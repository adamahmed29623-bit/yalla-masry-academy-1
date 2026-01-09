import './globals.css';
import { FirebaseProvider } from '@/firebase/provider';
import { app, auth, db } from '@/firebase/config'; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        {/* تمرير المفاتيح المطلوبة لحل خطأ البناء وتفعيل هوية الأكاديمية */}
        <FirebaseProvider 
          firebaseApp={app} 
          firestore={db} 
          auth={auth}
        >
          {children}
        </FirebaseProvider>
      </body>
    </html>
  );
}
