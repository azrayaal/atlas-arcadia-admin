import { NavLink, Outlet } from "react-router-dom"
import { motion } from "framer-motion"
import { Key, CalendarDays, Gift, CreditCard, Bell, Home } from "lucide-react"
import { cn } from "../../lib/utils"

const tabs = [
  { path: "/resident", label: "Home", icon: Home, end: true },
  { path: "/resident/access", label: "Akses", icon: Key },
  { path: "/resident/booking", label: "Booking", icon: CalendarDays },
  { path: "/resident/rewards", label: "Reward", icon: Gift },
  { path: "/resident/billing", label: "Tagihan", icon: CreditCard },
]

export function ResidentLayout() {
  return (
    <div className="flex items-center justify-center min-h-screen" style={{ background: "#d6d1c9" }}>
      {/* Mobile phone frame */}
      <div className="relative w-[390px] h-[844px] bg-zinc-900 rounded-[50px] shadow-2xl overflow-hidden border-4 border-zinc-800">
        {/* Status bar */}
        <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-8 py-3 bg-transparent">
          <span className="text-white text-xs font-semibold">9:41</span>
          <div className="w-28 h-6 bg-zinc-900 rounded-full absolute left-1/2 -translate-x-1/2 top-0" />
          <div className="flex items-center gap-1">
            <div className="flex gap-0.5 items-end h-3">
              {[2, 3, 4, 4].map((h, i) => (
                <div key={i} className="w-1 bg-white rounded-sm" style={{ height: `${h * 3}px` }} />
              ))}
            </div>
            <svg viewBox="0 0 24 24" fill="white" className="w-3 h-3">
              <path d="M1.51 8.267C3.989 5.86 7.353 4.357 11.036 4.357c3.68 0 7.04 1.5 9.52 3.903l1.458-1.499A15.073 15.073 0 0011.036 2.5C7.02 2.5 3.37 4.12.627 6.77l.883.907z"/>
            </svg>
            <div className="flex items-center gap-0.5">
              <div className="w-5 h-2.5 rounded-sm border border-white relative">
                <div className="absolute inset-0.5 bg-white rounded-sm" style={{ width: "75%" }} />
              </div>
            </div>
          </div>
        </div>

        {/* App content */}
        <div className="absolute inset-0 overflow-hidden flex flex-col bg-zinc-50">
          {/* Header */}
          <div className="pt-12 px-5 pb-3 bg-white border-b border-zinc-100 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <img src="/atlas_arcadia.png" alt="Atlas Arcadia" className="h-6 w-auto object-contain" />
            </div>
            <button className="relative p-1.5 rounded-full bg-zinc-100">
              <Bell size={16} className="text-zinc-600" />
              <span className="absolute top-0.5 right-0.5 w-2 h-2 rounded-full bg-amber-500 border border-white" />
            </button>
          </div>

          {/* Page content */}
          <div className="flex-1 overflow-y-auto scrollbar-hide">
            <motion.div
              key="resident-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Outlet />
            </motion.div>
          </div>

          {/* Bottom nav */}
          <div className="shrink-0 bg-white border-t border-zinc-100 px-2 pt-2 pb-6">
            <div className="flex items-center justify-around">
              {tabs.map((tab) => (
                <NavLink
                  key={tab.path}
                  to={tab.path}
                  end={tab.end}
                  className={({ isActive }) => cn(
                    "flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl transition-all duration-200",
                    isActive ? "text-amber-600" : "text-zinc-400"
                  )}
                >
                  {({ isActive }) => (
                    <>
                      <div className={cn(
                        "p-1.5 rounded-xl transition-all",
                        isActive && "bg-amber-50"
                      )}>
                        <tab.icon size={18} />
                      </div>
                      <span className="text-[10px] font-medium">{tab.label}</span>
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
