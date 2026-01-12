"use client"
import * as React from "react"
import { cn } from "@/lib/utils"

const Menubar = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex h-10 items-center space-x-1 rounded-md border border-gold-500/20 bg-black p-1", className)} {...props} />
)
const MenubarMenu = ({ children }: { children: React.ReactNode }) => <>{children}</>
const MenubarTrigger = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none hover:bg-gold-500 hover:text-black", className)} {...props} />
)
const MenubarContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("z-50 min-w-[12rem] overflow-hidden rounded-md border border-gold-500/20 bg-black p-1 text-white shadow-md", className)} {...props} />
)
const MenubarItem = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-gold-500/20", className)} {...props} />
)

export { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem }
