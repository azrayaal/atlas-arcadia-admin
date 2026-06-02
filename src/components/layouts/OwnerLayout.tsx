import { useState } from "react"
import { NavLink, Outlet, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import {
  LayoutDashboard, Building2, TrendingUp, Camera, Users,
  Settings, Menu, X, Bell, ChevronDown, FileText,
  BarChart3, LogOut, PieChart, Cpu, MapPin, ChevronRight
} from "lucide-react"
import { cn } from "../../lib/utils"

const navItems = [
  {
    group: "OPERASIONAL",
    items: [
      { path: "/owner", label: "Dashboard", icon: LayoutDashboard, end: true },
      { path: "/owner/occupancy", label: "Hunian", icon: Building2 },
      { path: "/owner/revenue", label: "Pendapatan", icon: TrendingUp },
      { path: "/owner/financial", label: "Keuangan", icon: BarChart3 },
      { path: "/owner/cctv", label: "CCTV Monitor", icon: Camera },
      { path: "/owner/residents", label: "Penghuni", icon: Users },
      { path: "/owner/reports", label: "Laporan", icon: FileText },
    ],
  },
  {
    group: "POTENSI BISNIS",
    items: [
      { path: "/owner/business", label: "Business Units", icon: PieChart },
      { path: "/owner/ecosystem", label: "Smart Ecosystem", icon: Cpu },
      { path: "/owner/property", label: "Properti", icon: MapPin },
    ],
  },
  {
    group: "SISTEM",
    items: [
      { path: "/owner/settings", label: "Pengaturan", icon: Settings },
    ],
  },
]

export function OwnerLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  const isInvestorSection = ["/owner/business", "/owner/ecosystem", "/owner/property"].some(
    (p) => location.pathname.startsWith(p)
  )

  return (
    <div className="flex h-screen overflow-hidden" style={{ background: "#f8f7f3" }}>
      {/* Mobile overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside className={cn(
        "fixed lg:relative z-50 lg:z-auto flex flex-col w-64 h-full bg-white border-r shadow-sm transition-transform duration-300",
        "border-stone-200/80",
        sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        {/* Logo */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-stone-100">
          <img src="/atlas_arcadia.png" alt="Atlas Arcadia" className="h-9 w-auto object-contain" />
          <div className="flex flex-col">
            <span className="text-[10px] font-semibold text-stone-400 tracking-widest uppercase">Management</span>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="ml-auto lg:hidden p-1 rounded-lg hover:bg-stone-100">
            <X size={16} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-3 scrollbar-hide">
          {navItems.map((group) => (
            <div key={group.group} className="mb-5">
              <div className="px-3 mb-2 text-[10px] font-bold text-stone-400 tracking-widest">{group.group}</div>
              {group.items.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.end}
                  onClick={() => setSidebarOpen(false)}
                  className={({ isActive }) => cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-xl mb-0.5 text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-stone-900 text-white shadow-sm"
                      : "text-stone-500 hover:bg-stone-100 hover:text-stone-900"
                  )}
                >
                  {({ isActive }) => (
                    <>
                      <item.icon size={16} className={isActive ? "text-white" : "text-stone-400"} />
                      <span>{item.label}</span>
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          ))}
        </nav>

        {/* User profile */}
        <div className="px-3 py-4 border-t border-stone-100">
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-stone-50 cursor-pointer transition-colors">
            <div className="w-8 h-8 rounded-full gradient-gold flex items-center justify-center text-white text-xs font-bold shrink-0">RM</div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold text-stone-800 truncate">Rafael Manajer</div>
              <div className="text-xs text-stone-400">Property Manager</div>
            </div>
            <LogOut size={14} className="text-stone-300" />
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Topbar */}
        <header className="flex items-center gap-4 px-6 py-3.5 bg-white border-b border-stone-200/80 shrink-0">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-xl hover:bg-stone-100 transition-colors"
          >
            <Menu size={18} />
          </button>

          {/* Breadcrumb hint for investor section */}
          {isInvestorSection && (
            <div className="hidden md:flex items-center gap-1.5 text-xs text-stone-400">
              <span>Dashboard</span>
              <ChevronRight size={12} />
              <span className="text-stone-600 font-medium">Potensi Bisnis</span>
            </div>
          )}

          <div className="flex-1" />

          <div className="flex items-center gap-2">
            <button className="relative p-2 rounded-xl hover:bg-stone-100 transition-colors">
              <Bell size={18} className="text-stone-500" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-amber-500" />
            </button>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-stone-50 cursor-pointer transition-colors border border-stone-200/60">
              <div className="w-7 h-7 rounded-full gradient-gold flex items-center justify-center text-white text-xs font-bold">RM</div>
              <span className="text-sm font-medium text-stone-700 hidden sm:block">Rafael</span>
              <ChevronDown size={13} className="text-stone-400" />
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Outlet />
          </motion.div>
        </main>
      </div>
    </div>
  )
}
