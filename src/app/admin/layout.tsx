import React from 'react';
import { MainNav } from '@/components/admin/main-nav';
import TeamSwitcher from '@/components/admin/team-switcher';
import { UserNav } from '@/components/user-nav';
import { Search } from '@/components/admin/search';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <TeamSwitcher />
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <Search />
            <UserNav />
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">{children}</div>
    </div>
  );
}
