import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up - Yalla Masry Academy',
  description: 'Create a new account.',
};

export default function SignupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
