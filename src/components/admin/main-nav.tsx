import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()

  const links = [
    { href: "/admin/dashboard", label: "Overview" },
    { href: "/admin/student-analytics", label: "Students" },
    { href: "/admin/tutor-analytics", label: "Tutors" },
    { href: "/admin/challenge-analytics", label: "Challenges" },
    { href: "/admin/phrases", label: "Content" },
    { href: "/admin/store-management", label: "Store" },
  ]

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {links.map((link) => (
         <Link
          key={link.href}
          href={link.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            !pathname.startsWith(link.href) && "text-muted-foreground"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
