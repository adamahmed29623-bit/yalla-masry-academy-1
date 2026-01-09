import './globals.css';
import { FirebaseProvider } from '@/firebase/provider';
import { app, auth, db } from '@/firebase/config'; 

export const metadata = {
  title: 'أكاديمية يلا مصري',
  description: 'صرح ملكي لتعلم العامية المصرية بروح فرعونية',
};

// مكوّن لعزل الفايربيس لضمان عدم حدوث دوامة برمجية أثناء البناء
function ClientWrapper({ children }: { children: React.ReactNode }) {
  // إذا كنا في مرحلة البناء (Server Side) ولا توجد إعدادات، نمرر الأطفال مباشرة
  if (!app || !db || !auth) {
    return <>{children}</>;
  }

  return (
    <FirebaseProvider firebaseApp={app} firestore={db} auth={auth}>
      {children}
    </FirebaseProvider>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body suppressHydrationWarning className="min-h-screen bg-background font-sans">
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
