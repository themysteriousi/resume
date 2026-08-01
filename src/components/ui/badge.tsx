import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "destructive";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const baseStyles = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-mono font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";
  
  const variantStyles = {
    default: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
    secondary: "border-slate-800 bg-slate-900 text-slate-300",
    outline: "border-slate-700 text-slate-400",
    destructive: "border-red-500/30 bg-red-500/10 text-red-400"
  };

  return (
    <div className={cn(baseStyles, variantStyles[variant], className)} {...props} />
  )
}

export { Badge }
