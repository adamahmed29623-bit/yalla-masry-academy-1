import './globals.css';
import { FirebaseProvider } from '@/firebase/provider';
import { app, auth, db } from '@/firebase/config'; 

export const metadata = {
  title: 'أكاديمية يلا مصري',
  description: 'هوية ملكية لتعلم العامية المصرية بنظام فريد',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {/* نغلف التطبيق بـ FirebaseProvider مع ضمان عدم تكرار الاستدعاءات */}
        <FirebaseProvider 
          firebaseApp={app} 
          firestore={db} 
          auth={auth}
        >
          <main>
            {children}
          </main>
        </FirebaseProvider>
      </body>
    </html>
  );
}
