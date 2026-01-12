'use client';

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const Accordion = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full space-y-2">{children}</div>
)

const AccordionItem = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("border-b border-gold-500/20", className)}>{children}</div>
)

const AccordionTrigger = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <button 
      onClick={() => setIsOpen(!isOpen)}
      className={cn("flex w-full items-center justify-between py-4 font-bold text-gold-500 transition-all hover:text-gold-400", className)}
    >
      {children}
      <ChevronDown className={cn("h-4 w-4 shrink-0 transition-transform duration-200", isOpen && "rotate-180")} />
    </button>
  )
}

const AccordionContent = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("text-sm transition-all text-gray-300 pb-4", className)}>
    {children}
  </div>
)

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
