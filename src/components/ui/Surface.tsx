import * as React from "react"
import { cn } from "@/lib/utils"

export function Surface({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("rounded-lg border border-border bg-surface text-primary-text shadow-sm", className)}
      {...props}
    />
  )
}
