import './globals.css';
import { FirebaseProvider } from '@/firebase/provider';
import { app, auth, db } from '@/firebase/config'; 

// هذا السطر يخبر Cloudflare ألا يحاول بناء الصفحات بشكل ثابت جداً مما يكسر الدوامة
export const dynamic = 'force-dynamic';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {/* نتحقق من البيئة: إذا كنا في المتصفح، نشغل الفايربيس */}
        {typeof window !== 'undefined' && app && db && auth ? (
          <FirebaseProvider firebaseApp={app} firestore={db} auth={auth}>
            {children}
          </FirebaseProvider>
        ) : (
          <main>{children}</main>
        )}
      </body>
    </html>
  );
}
