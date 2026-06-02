import { cn } from "../../lib/utils"
import { type ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "gold" | "danger"
  size?: "sm" | "md" | "lg" | "icon"
}

const variants = {
  default: "bg-zinc-900 text-white hover:bg-zinc-800",
  outline: "border border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50",
  ghost: "bg-transparent text-zinc-600 hover:bg-zinc-100",
  gold: "gradient-gold text-white hover:opacity-90 shadow-gold",
  danger: "bg-red-600 text-white hover:bg-red-700",
}

const sizes = {
  sm: "px-3 py-1.5 text-xs rounded-lg",
  md: "px-4 py-2 text-sm rounded-xl",
  lg: "px-6 py-3 text-base rounded-xl",
  icon: "p-2 rounded-xl",
}

export function Button({ variant = "default", size = "md", className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
