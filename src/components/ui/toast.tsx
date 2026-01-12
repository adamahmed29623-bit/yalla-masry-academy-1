"use client"
import * as React from "react"
import { cn } from "@/lib/utils"

const Toast = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border border-gold-500/20 bg-black p-6 pr-8 shadow-lg", className)} {...props} />
)

export { Toast }
