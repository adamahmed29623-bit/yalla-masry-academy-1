'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FirebaseLogo } from '@/components/icons';
import {
  LayoutDashboard,
  GraduationCap,
  Users,
  BookOpen,
  Scroll,
  Pyramid,
  Sparkles,
  Swords,
  Store,
  Ship,
  UserCog,
  Palette,
  Mic2,
  Users2,
  UserCircle,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { UserNav } from './user-nav';
import { User } from 'firebase/auth';

const navLinks = [
    { href: '/dashboard', label: "Dashboard", icon: LayoutDashboard },
    { href: '/profile', label: "Profile", icon: UserCircle },
    { href: '/egyptian-school', label: "School", icon: GraduationCap },
    { href: '/teachers', label: "Teachers", icon: Users2 },
    { href: '/community', label: "Community", icon: Users },
    { href: '/quran', label: "Quran", icon: BookOpen },
    { href: '/sunnah', label: "Sunnah", icon: Scroll },
    { href: '/museum', label: "Museum", icon: Pyramid },
    { href: '/smart-adventure', label: "Smart Adventure", icon: Sparkles },
    { href: '/challenge', label: "Challenge", icon: Swords },
    { href: '/store', label: "Store", icon: Store },
    { href: '/gulf', label: "Gulf Council", icon: Ship },
    { href: '/animal-sounds', label: "Animal Sounds", icon: Mic2 },
    { href: '/coloring', label: "Coloring Game", icon: Palette },
    { href: '/teacher-dashboard', label: "Teacher Dashboard", icon: UserCog },
];

export function Sidebar({ user }: { user: User }) {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex w-64 flex-col border-r bg-background">
      <div className="p-4 border-b">
        <Link href="/" className="flex items-center space-x-2">
          <FirebaseLogo className="h-8 w-8 text-primary" />
          <span className="font-bold sm:inline-block font-headline text-lg">
            Yalla Masry
          </span>
        </Link>
      </div>
      <div className="flex-1 overflow-y-auto">
        <nav className="flex flex-col space-y-1 p-4">
          {navLinks.map(link => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent',
                  isActive ? 'bg-accent text-primary' : 'text-foreground/70'
                )}
              >
                <link.icon className="h-5 w-5" />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="p-4 border-t mt-auto">
        <UserNav />
      </div>
    </aside>
  );
}
