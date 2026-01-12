"use client"
import * as React from "react"
import { cn } from "@/lib/utils"

const Slider = ({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    type="range"
    className={cn(
      "h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-zinc-800 accent-gold-500",
      className
    )}
    {...props}
  />
)

export { Slider }
