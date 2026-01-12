"use client"
import * as React from "react"
import { Circle } from "lucide-react"
import { cn } from "@/lib/utils"

const RadioGroup = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("grid gap-2", className)} {...props} />
)

const RadioGroupItem = ({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) => (
  <div className="flex items-center space-x-2">
    <input type="radio" className={cn("h-4 w-4 border-gold-500 text-gold-500 focus:ring-gold-500", className)} {...props} />
  </div>
)

export { RadioGroup, RadioGroupItem }
