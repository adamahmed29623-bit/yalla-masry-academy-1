"use client"
import * as React from "react"
import { cn } from "@/lib/utils"

const NavigationMenu = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <nav className={cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className)}>{children}</nav>
)

const NavigationMenuList = ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
  <ul className={cn("group flex flex-1 list-none items-center justify-center space-x-1", className)} {...props} />
)

const NavigationMenuItem = ({ children }: { children: React.ReactNode }) => <li>{children}</li>

export { NavigationMenu, NavigationMenuList, NavigationMenuItem }
