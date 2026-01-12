"use client"
import * as React from "react"
import { cn } from "@/lib/utils"

const Switch = ({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input type="checkbox" className={cn("peer h-6 w-11 cursor-pointer appearance-none rounded-full border border-gold-500/20 bg-zinc-900 checked:bg-gold-500 transition-colors", className)} {...props} />
)

export { Switch }
