'use client';

import * as React from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const Carousel = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("relative w-full overflow-hidden", className)}>{children}</div>
)

const CarouselContent = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("flex w-full transition-transform duration-300", className)}>{children}</div>
)

const CarouselItem = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("min-w-0 shrink-0 grow-0 basis-full", className)}>{children}</div>
)

const CarouselPrevious = ({ className }: { className?: string }) => (
  <button className={cn("absolute left-4 top-1/2 -translate-y-1/2 bg-gold-500 p-2 rounded-full text-black", className)}>
    <ArrowLeft className="h-4 w-4" />
  </button>
)

const CarouselNext = ({ className }: { className?: string }) => (
  <button className={cn("absolute right-4 top-1/2 -translate-y-1/2 bg-gold-500 p-2 rounded-full text-black", className)}>
    <ArrowRight className="h-4 w-4" />
  </button>
)

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext }
