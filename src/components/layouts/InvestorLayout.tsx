import { NavLink, Outlet } from "react-router-dom"
import { motion } from "framer-motion"
import { TrendingUp, Building2, Cpu, PieChart, ChevronRight } from "lucide-react"
import { cn } from "../../lib/utils"

const navItems = [
  { path: "/investor", label: "Overview", icon: TrendingUp, end: true },
  { path: "/investor/business", label: "Business Units", icon: PieChart },
  { path: "/investor/ecosystem", label: "Smart Ecosystem", icon: Cpu },
  { path: "/investor/property", label: "Property", icon: Building2 },
]

export function InvestorLayout() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Top navigation */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-8">
          <div className="flex items-center gap-3">
            <img src="/atlas_arcadia.png" alt="Atlas Arcadia" className="h-8 w-auto object-contain brightness-110" />
            <div className="text-[10px] text-zinc-500 tracking-wide">INVESTOR PRESENTATION</div>
          </div>

          <nav className="hidden md:flex items-center gap-1 flex-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.end}
                className={({ isActive }) => cn(
                  "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                )}
              >
                <item.icon size={15} />
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3 ml-auto">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-xl">
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-xs font-medium text-amber-400">Live Data</span>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 gradient-gold rounded-xl text-xs font-semibold text-white shadow-gold">
              <span>Export PDF</span>
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav */}
      <div className="md:hidden sticky top-[65px] z-40 bg-zinc-950/90 backdrop-blur-xl border-b border-white/5 px-4 py-2">
        <div className="flex gap-1 overflow-x-auto scrollbar-hide">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={({ isActive }) => cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all",
                isActive ? "bg-white/10 text-white" : "text-zinc-400"
              )}
            >
              <item.icon size={13} />
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Outlet />
      </motion.main>
    </div>
  )
}
