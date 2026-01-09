import './globals.css';
import { FirebaseProvider } from '@/firebase/provider';
import { app, auth, db } from '@/firebase/config'; 

export const metadata = {
  title: 'أكاديمية يلا مصري',
  description: 'صرح ملكي لتعلم العامية المصرية بروح فرعونية',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body suppressHydrationWarning className="min-h-screen">
        {/* نضمن عدم تشغيل الفايربيس إلا إذا كانت البيئة جاهزة تماماً */}
        {app && db && auth ? (
          <FirebaseProvider 
            firebaseApp={app} 
            firestore={db} 
            auth={auth}
          >
            {children}
          </FirebaseProvider>
        ) : (
          <main>{children}</main>
        )}
      </body>
    </html>
  );
}
