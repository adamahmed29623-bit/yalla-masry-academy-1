"use client"

import * as React from "react"

const Collapsible = ({ children, ...props }: { children: React.ReactNode }) => (
  <div {...props}>{children}</div>
)

const CollapsibleTrigger = ({ children, ...props }: { children: React.ReactNode }) => (
  <div className="cursor-pointer" {...props}>{children}</div>
)

const CollapsibleContent = ({ children, ...props }: { children: React.ReactNode }) => (
  <div {...props}>{children}</div>
)

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
