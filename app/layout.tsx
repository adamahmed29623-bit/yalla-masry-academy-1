import './globals.css';
import { FirebaseProvider } from '@/firebase/provider'; 

export const metadata = {
  title: 'Nefertiti Academy',
  description: 'The Future of Learning on Mars',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <FirebaseProvider>
          {children}
        </FirebaseProvider>
      </body>
    </html>
  );
}
