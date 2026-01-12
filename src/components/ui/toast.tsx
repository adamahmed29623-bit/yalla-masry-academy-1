"use client"
import * as React from "react"
import { cn } from "@/lib/utils"

const ToastProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>
const ToastViewport = ({ ...props }) => <div className="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]" {...props} />

const Toast = ({ className, ...props }: any) => (
  <div className={cn("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border border-gold-500/20 bg-black p-6 shadow-lg transition-all", className)} {...props} />
)

const ToastTitle = ({ className, ...props }: any) => <div className={cn("text-sm font-semibold text-gold-500", className)} {...props} />
const ToastDescription = ({ className, ...props }: any) => <div className={cn("text-sm opacity-90 text-white", className)} {...props} />
const ToastClose = ({ className, ...props }: any) => <button className={cn("absolute right-2 top-2 rounded-md p-1 text-gold-500/50 hover:text-gold-500", className)} {...props}>✕</button>
const ToastAction = ({ className, ...props }: any) => <button className={cn("inline-flex h-8 shrink-0 items-center justify-center rounded-md border border-gold-500 bg-transparent px-3 text-sm font-medium text-gold-500 hover:bg-gold-500 hover:text-black", className)} {...props} />

export {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}
