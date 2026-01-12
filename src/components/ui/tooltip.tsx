"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const TooltipProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>

const Tooltip = ({ children }: { children: React.ReactNode }) => {
  return <div className="relative group inline-block">{children}</div>
}

const TooltipTrigger = ({ children }: { children: React.ReactNode }) => <>{children}</>

const TooltipContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "absolute z-[110] invisible group-hover:visible opacity-0 group-hover:opacity-100 bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-1.5 text-xs text-black bg-gold-500 rounded shadow-md transition-all duration-200 whitespace-nowrap pointer-events-none",
      className
    )}
    {...props}
  />
))
TooltipContent.displayName = "TooltipContent"

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
