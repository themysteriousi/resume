import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 disabled:pointer-events-none disabled:opacity-50";
    
    const variantStyles = {
      default: "bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-sm",
      outline: "border border-slate-800 bg-slate-950/60 hover:bg-slate-900 hover:text-white text-slate-300",
      ghost: "hover:bg-slate-900 hover:text-white text-slate-400",
      secondary: "bg-slate-900 text-slate-100 hover:bg-slate-800 border border-slate-800"
    };

    const sizeStyles = {
      default: "h-9 px-4 py-2 text-xs rounded-md",
      sm: "h-7 px-2.5 py-1 text-xs rounded-md",
      lg: "h-11 px-8 text-sm rounded-md",
      icon: "h-8 w-8 rounded-md"
    };

    return (
      <button
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
