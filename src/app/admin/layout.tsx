'use client';

import React from 'react';
import { useFirebase } from '@/firebase';
import { useRouter, useParams } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';
import AdminSidebar from '@/components/admin/AdminSidebar';
import { Locale } from '@/i18n-config';

// This is a simplified check. In a real app, you'd want to check a 'role' field from Firestore.
const isAdmin = (user: any | null): boolean => {
  // For now, let's assume any logged-in user can access the admin panel for prototyping.
  // In production, you would check: return user && user.firestoreData?.role === 'admin';
  return !!user;
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isUserLoading } = useFirebase();
  const router = useRouter();
  const params = useParams();
  const lang = params.lang as Locale;

  React.useEffect(() => {
    if (!isUserLoading) {
      if (!user) {
        // Not logged in, redirect to login
        router.push(`/${lang}/login`);
      } else if (!isAdmin(user)) {
        // Logged in but not an admin, redirect to home
        router.push(`/${lang}/dashboard`);
      }
    }
  }, [user, isUserLoading, router, lang]);

  if (isUserLoading || !user || !isAdmin(user)) {
    // Show a loading skeleton or a blank page while we verify the user
    return (
      <div className="flex min-h-screen">
        <Skeleton className="hidden md:block w-64 border-r" />
        <main className="flex-1 p-8">
          <Skeleton className="h-full w-full" />
        </main>
      </div>
    );
  }

  // User is authenticated and is an admin
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <AdminSidebar />
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
