'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookText, Languages, Drama, ScrollText } from 'lucide-react';
import React from 'react';

const contentLinks = [
  { name: 'Phrases', href: '/admin/phrases', icon: Languages },
  { name: 'Books', href: '/admin/books', icon: BookText },
  { name: 'Hadiths', href: '/admin/hadiths', icon: ScrollText },
  { name: 'Adventures', href: '/admin/adventure-challenges', icon: Drama },
];

export default function ContentLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Determine the active tab by checking if the pathname includes the link's href
  const activeTab = contentLinks.find((link) => pathname.startsWith(link.href))?.name || 'Phrases';

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Content Management</h1>
        <p className="text-muted-foreground">Manage the educational materials for the platform.</p>
      </div>
      <Tabs value={activeTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 md:w-auto">
          {contentLinks.map((link) => (
            <TabsTrigger key={link.name} value={link.name} asChild>
              <Link href={link.href} className="flex items-center gap-2">
                <link.icon className="h-4 w-4" />
                {link.name}
              </Link>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <div className="mt-8">{children}</div>
    </div>
  );
}
