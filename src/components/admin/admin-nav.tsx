'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function AdminNav() {
  const pathname = usePathname();
  const links = [
    { href: "/admin/dashboard", label: "Overview" },
    { href: "/admin/phrases", label: "Content" },
    { href: "/admin/store-management", label: "Store" },
  ];

  return (
    <nav className="flex items-center space-x-6 text-white/70">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-[#D4AF37]",
            pathname === link.href ? "text-[#D4AF37] font-bold" : ""
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
