"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

const Form = ({ children, ...props }: React.FormHTMLAttributes<HTMLFormElement>) => (
  <form {...props}>{children}</form>
)

const FormItem = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("space-y-2", className)} {...props} />
)

const FormLabel = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof Label>) => (
  <Label className={cn("text-gold-500", className)} {...props} />
)

const FormControl = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className="relative" {...props} />
)

const FormDescription = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn("text-sm text-gray-400", className)} {...props} />
)

const FormMessage = ({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn("text-sm font-medium text-red-500", className)} {...props}>
    {children}
  </p>
)

const FormField = ({ children }: { children: React.ReactNode }) => <>{children}</>

export {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}
