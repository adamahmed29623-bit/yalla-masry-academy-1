'use client';

import React from 'react';
import { useFirebase } from '@/firebase';
import { useRouter } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';
import { Sidebar } from '@/components/Sidebar';
import { User } from 'firebase/auth';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isUserLoading } = useFirebase();
  const router = useRouter();

  React.useEffect(() => {
    // If loading is finished and there's no user, redirect to login
    if (!isUserLoading && !user) {
      router.push('/login');
    }
  }, [user, isUserLoading, router]);

  // While loading, show a skeleton layout
  if (isUserLoading || !user) {
    return (
      <div className="flex min-h-screen bg-background text-foreground">
        <Skeleton className="hidden md:block w-64 border-r border-border" />
        <main className="flex-1 p-4 md:p-8">
          <div className="flex items-center justify-between mb-8">
            <Skeleton className="h-8 w-1/4" />
            <Skeleton className="h-10 w-10 rounded-full" />
          </div>
          <div className="space-y-4">
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-64 w-full" />
          </div>
        </main>
      </div>
    );
  }

  // If there's a user, show the full layout
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar user={user as User} />
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
