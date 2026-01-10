'use client';

import * as React from "react";
import { cn } from "@/lib/utils";

// --- كود الـ Card الملكي الخاص بكِ (مدمج هنا لضمان النجاح) ---
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-lg border bg-[#001524]/80 text-white shadow-xl border-[#D4AF37]/30 backdrop-blur-md", className)} {...props} />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
));

const CardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("text-2xl font-bold leading-none tracking-widest text-[#D4AF37] text-center", className)} {...props} />
));

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));

// --- الصفحة الرئيسية ---
export default function SignupPage() {
  return (
    <div className="min-h-screen bg-[#001524] flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>YALLA MASRY ACADEMY</CardTitle>
          <p className="text-gray-400 text-sm mt-2 text-center uppercase tracking-tighter">نظام التسجيل الملكي</p>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            
            {/* حقل الاسم - بديل لـ Input و Label المفقودين */}
            <div className="space-y-2 text-right">
              <label className="text-sm font-medium text-[#D4AF37] block">الاسم الملكي</label>
              <input 
                className="w-full bg-black/40 border border-[#D4AF37]/20 rounded-md p-3 text-white outline-none focus:border-[#D4AF37] transition-all" 
                placeholder="أدخل اسمك..."
              />
            </div>

            {/* حقل البريد - بديل لـ Input و Label المفقودين */}
            <div className="space-y-2 text-right">
              <label className="text-sm font-medium text-[#D4AF37] block">البريد الإلكتروني</label>
              <input 
                type="email"
                className="w-full bg-black/40 border border-[#D4AF37]/20 rounded-md p-3 text-white outline-none focus:border-[#D4AF37] transition-all" 
                placeholder="email@example.com"
              />
            </div>

            {/* زر الإرسال */}
            <button className="w-full bg-[#D4AF37] text-[#001524] font-bold py-3 rounded-md hover:bg-[#b8962d] transition-all mt-6 shadow-lg uppercase tracking-widest">
              انضم للمملكة
            </button>
            
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
