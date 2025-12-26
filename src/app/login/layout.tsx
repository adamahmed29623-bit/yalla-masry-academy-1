import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login - Yalla Masry Academy',
  description: 'Login to your account.',
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
