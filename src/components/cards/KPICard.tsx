import { motion } from "framer-motion"
import { TrendingUp, TrendingDown } from "lucide-react"
import { cn } from "../../lib/utils"

interface KPICardProps {
  label: string
  value: string | number
  change?: number
  changeLabel?: string
  icon?: React.ReactNode
  color?: "default" | "gold" | "success" | "warning"
  suffix?: string
  className?: string
  delay?: number
}

export function KPICard({ label, value, change, changeLabel, icon, color = "default", suffix, className, delay = 0 }: KPICardProps) {
  const isPositive = (change ?? 0) >= 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -2 }}
      className={cn("card-base p-5 group cursor-default", className)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={cn(
          "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
          color === "gold" && "bg-amber-50 text-amber-600 group-hover:bg-amber-100",
          color === "default" && "bg-zinc-100 text-zinc-500 group-hover:bg-zinc-200",
          color === "success" && "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100",
          color === "warning" && "bg-orange-50 text-orange-600 group-hover:bg-orange-100",
        )}>
          {icon}
        </div>
        {change !== undefined && (
          <div className={cn(
            "flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full",
            isPositive ? "text-emerald-700 bg-emerald-50" : "text-red-600 bg-red-50"
          )}>
            {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
            {isPositive ? "+" : ""}{change}%
          </div>
        )}
      </div>
      <div>
        <div className="text-2xl font-bold text-zinc-900 tracking-tight">
          {value}{suffix}
        </div>
        <div className="text-xs text-zinc-500 mt-1 font-medium">{label}</div>
        {changeLabel && (
          <div className="text-xs text-zinc-400 mt-0.5">{changeLabel}</div>
        )}
      </div>
    </motion.div>
  )
}
