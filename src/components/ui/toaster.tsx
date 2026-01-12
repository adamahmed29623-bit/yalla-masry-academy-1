"use client"

import * as React from "react"
import { useToast } from "@/components/ui/use-toast"

// المكونات الداخلية مدمجة لضمان عدم حدوث خطأ استيراد
const ToastProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>
const ToastViewport = () => <div className="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]" />

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <div key={id} className="group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border border-gold-500/20 bg-black p-6 shadow-lg transition-all">
            <div className="grid gap-1">
              {title && <div className="text-sm font-semibold text-gold-500">{title}</div>}
              {description && (
                <div className="text-sm opacity-90 text-white">{description}</div>
              )}
            </div>
            {action}
            <button 
              onClick={() => props.onOpenChange?.(false)}
              className="absolute right-2 top-2 rounded-md p-1 text-gold-500/50 hover:text-gold-500"
            >✕</button>
          </div>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
