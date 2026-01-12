"use client"
import * as React from "react"
import { cn } from "@/lib/utils"

const Select = ({ children, ...props }: any) => <div className="relative w-full">{children}</div>
const SelectGroup = ({ children }: { children: React.ReactNode }) => <>{children}</>
const SelectValue = ({ placeholder }: { placeholder?: string }) => <span>{placeholder}</span>
const SelectTrigger = ({ className, children, ...props }: any) => (
  <div className={cn("flex h-10 w-full items-center justify-between rounded-md border border-gold-500/20 bg-black px-3 py-2 text-sm text-white", className)} {...props}>
    {children}
  </div>
)
const SelectContent = ({ children }: { children: React.ReactNode }) => <div className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border border-gold-500/20 bg-black p-1 shadow-md">{children}</div>
const SelectItem = ({ className, children, ...props }: any) => (
  <div className={cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-gold-500/20 text-white", className)} {...props}>
    {children}
  </div>
)

export { Select, SelectGroup, SelectValue, SelectTrigger, SelectContent, SelectItem }
