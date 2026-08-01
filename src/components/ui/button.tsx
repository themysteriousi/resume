import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";
    
    const variantStyles = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
      outline: "border border-border bg-background/60 hover:bg-card hover:text-foreground text-secondary-foreground",
      ghost: "hover:bg-card hover:text-foreground text-muted-foreground",
      secondary: "bg-card text-foreground hover:bg-muted border border-border"
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
