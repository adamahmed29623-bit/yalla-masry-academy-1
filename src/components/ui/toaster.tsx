"use client"

import * as React from "react"

// --- القسم الأول: منطق البرمجة (useToast Logic) ---
const TOAST_LIMIT = 1
type ToasterToast = {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

let count = 0
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

const listeners: Array<(state: { toasts: ToasterToast[] }) => void> = []
let memoryState: { toasts: ToasterToast[] } = { toasts: [] }

function dispatch(action: any) {
  if (action.type === "ADD_TOAST") {
    memoryState = { ...memoryState, toasts: [action.toast].slice(0, TOAST_LIMIT) }
  } else if (action.type === "DISMISS_TOAST") {
    memoryState = { ...memoryState, toasts: memoryState.toasts.map((t) => ({ ...t, open: false })) }
  }
  listeners.forEach((listener) => listener(memoryState))
}

export function useToast() {
  const [state, setState] = React.useState(memoryState)
  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) listeners.splice(index, 1)
    }
  }, [])

  return {
    ...state,
    toast: (props: Omit<ToasterToast, "id">) => {
      const id = genId()
      dispatch({ type: "ADD_TOAST", toast: { ...props, id, open: true } })
    },
  }
}

// --- القسم الثاني: واجهة المستخدم (UI Components) ---
const ToastProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>
const ToastViewport = () => <div className="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]" />

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <div key={id} className="group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border border-gold-500/20 bg-black p-6 shadow-lg transition-all animate-in fade-in slide-in-from-top-full sm:slide-in-from-bottom-full">
            <div className="grid gap-1">
              {title && <div className="text-sm font-semibold text-gold-500">{title}</div>}
              {description && (
                <div className="text-sm opacity-90 text-white">{description}</div>
              )}
            </div>
            {action}
            <button 
              onClick={() => dispatch({ type: "DISMISS_TOAST" })}
              className="absolute right-2 top-2 rounded-md p-1 text-gold-500/50 hover:text-gold-500"
            >✕</button>
          </div>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
