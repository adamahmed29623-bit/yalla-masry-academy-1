'use client';

import React from 'react';
import TeamSwitcher from '@/components/admin/team-switcher';
import { MainNav } from '@/components/admin/main-nav';
import { UserNav } from '@/components/user-nav';
import { useFirebase } from '@/firebase';
import { useParams } from 'next/navigation';
import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n-config';

type UserNavDict = Awaited<ReturnType<typeof getDictionary>>['user_nav'];

export default function AdminSidebar() {
  const { user } = useFirebase();
  const params = useParams();
  const lang = params.lang as Locale;
  const [dict, setDict] = React.useState<UserNavDict | null>(null);

  React.useEffect(() => {
    getDictionary(lang).then(d => setDict(d.user_nav));
  }, [lang]);

  if (!user || !dict) {
    return null; // Or a loading state
  }
  
  return (
    <aside className="hidden md:flex w-64 flex-col border-r bg-background p-4 space-y-6">
      <TeamSwitcher />
      <MainNav className="flex-col space-y-2 items-start" />
      <div className="mt-auto flex flex-col space-y-2">
         <p className="text-xs text-muted-foreground">Logged in as:</p>
         <UserNav lang={lang} dict={dict} />
      </div>
    </aside>
  );
}
