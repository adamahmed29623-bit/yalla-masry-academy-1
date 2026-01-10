'use client';

import * as React from "react"
import { cn } from "@/lib/utils"

// --- كود الـ Card الخاص بكِ كما هو بدون تغيير ---
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-lg border bg-card text-card-foreground shadow-sm bg-[#001524]/50 border-[#D4AF37]/30", className)} {...props} />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("text-2xl font-semibold leading-none tracking-tight text-[#D4AF37]", className)} {...props} />
))
CardTitle.displayName = "CardTitle"

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

// --- صفحة التسجيل باستخدام مكوناتكِ ---
export default function SignupPage() {
  return (
    <div className="min-h-screen bg-[#001524] flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-[#D4AF37]/40 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
        <CardHeader className="text-center">
          <CardTitle className="tracking-[0.2em] uppercase">Yalla Masry Academy</CardTitle>
          <p className="text-gray-400 text-sm mt-2">نظام التسجيل الملكي</p>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2 text-right">
              <label className="text-sm font-medium text-[#D4AF37]">الاسم الكامل</label>
              <input className="w-full bg-black/20 border border-[#D4AF37]/20 rounded-md p-2 text-white outline-none focus:border-[#D4AF37]" />
            </div>
            <div className="space-y-2 text-right">
              <label className="text-sm font-medium text-[#D4AF37]">البريد الإلكتروني</label>
              <input type="email" className="w-full bg-black/20 border border-[#D4AF37]/20 rounded-md p-2 text-white outline-none focus:border-[#D4AF37]" />
            </div>
            <button className="w-full bg-[#D4AF37] text-[#001524] font-bold py-2 rounded-md hover:bg-[#b8962d] transition-all mt-4">
              إنشاء الهوية الملكية
            </button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
