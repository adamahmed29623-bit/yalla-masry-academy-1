'use client';

import * as React from "react"
import { cn } from "@/lib/utils"

// مكونات بديلة بسيطة لا تعتمد على مكتبات خارجية
const AlertDialog = ({ children }: { children: React.ReactNode }) => <div className="hidden">{children}</div>
const AlertDialogTrigger = ({ children }: { children: React.ReactNode }) => <>{children}</>
const AlertDialogContent = ({ children }: { children: React.ReactNode }) => <div>{children}</div>
const AlertDialogHeader = ({ children }: { children: React.ReactNode }) => <div>{children}</div>
const AlertDialogFooter = ({ children }: { children: React.ReactNode }) => <div>{children}</div>
const AlertDialogTitle = ({ children }: { children: React.ReactNode }) => <h2>{children}</h2>
const AlertDialogDescription = ({ children }: { children: React.ReactNode }) => <p>{children}</p>
const AlertDialogAction = ({ children }: { children: React.ReactNode }) => <button>{children}</button>
const AlertDialogCancel = ({ children }: { children: React.ReactNode }) => <button>{children}</button>

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}
