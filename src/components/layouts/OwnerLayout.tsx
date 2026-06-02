import { useState } from "react"
import { NavLink, Outlet } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import {
  LayoutDashboard, Building2, TrendingUp, Camera, Users,
  Settings, Menu, X, Bell, ChevronDown, FileText,
  BarChart3, LogOut
} from "lucide-react"
import { cn } from "../../lib/utils"

const navItems = [
  {
    group: "MENU",
    items: [
      { path: "/owner", label: "Dashboard", icon: LayoutDashboard, end: true },
      { path: "/owner/occupancy", label: "Hunian", icon: Building2 },
      { path: "/owner/revenue", label: "Pendapatan", icon: TrendingUp },
      { path: "/owner/financial", label: "Keuangan", icon: BarChart3 },
      { path: "/owner/cctv", label: "CCTV Monitor", icon: Camera },
      { path: "/owner/residents", label: "Penghuni", icon: Users },
      { path: "/owner/reports", label: "Laporan", icon: FileText },
    ]
  },
  {
    group: "SISTEM",
    items: [
      { path: "/owner/settings", label: "Pengaturan", icon: Settings },
    ]
  }
]

export function OwnerLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-zinc-50 overflow-hidden">
      {/* Sidebar */}
      <AnimatePresence>
        {(sidebarOpen || true) && (
          <>
            {/* Mobile overlay */}
            {sidebarOpen && (
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                onClick={() => setSidebarOpen(false)}
              />
            )}
            <motion.aside
              initial={{ x: -280 }} animate={{ x: 0 }}
              className={cn(
                "fixed lg:relative z-50 lg:z-auto flex flex-col w-64 h-full bg-white border-r border-zinc-100 shadow-sm",
                !sidebarOpen && "hidden lg:flex"
              )}
            >
              {/* Logo */}
              <div className="flex items-center gap-3 px-6 py-5 border-b border-zinc-100">
                <img src="/atlas_arcadia.png" alt="Atlas Arcadia" className="h-8 w-auto object-contain" />
                <div>
                  <div className="text-xs text-zinc-400">Management Portal</div>
                </div>
                <button onClick={() => setSidebarOpen(false)} className="ml-auto lg:hidden p-1 rounded-lg hover:bg-zinc-100">
                  <X size={16} />
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 overflow-y-auto py-4 px-3 scrollbar-hide">
                {navItems.map((group) => (
                  <div key={group.group} className="mb-6">
                    <div className="px-3 mb-2 text-[10px] font-semibold text-zinc-400 tracking-widest">{group.group}</div>
                    {group.items.map((item) => (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        end={item.end}
                        onClick={() => setSidebarOpen(false)}
                        className={({ isActive }) => cn(
                          "flex items-center gap-3 px-3 py-2.5 rounded-xl mb-0.5 text-sm font-medium transition-all duration-200",
                          isActive
                            ? "bg-zinc-900 text-white shadow-sm"
                            : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
                        )}
                      >
                        <item.icon size={16} />
                        {item.label}
                      </NavLink>
                    ))}
                  </div>
                ))}
              </nav>

              {/* User profile */}
              <div className="px-3 py-4 border-t border-zinc-100">
                <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-zinc-50 cursor-pointer transition-colors">
                  <div className="w-8 h-8 rounded-full gradient-gold flex items-center justify-center text-white text-xs font-bold">RM</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold text-zinc-900 truncate">Rafael Manajer</div>
                    <div className="text-xs text-zinc-400">Property Manager</div>
                  </div>
                  <LogOut size={14} className="text-zinc-400" />
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Topbar */}
        <header className="flex items-center gap-4 px-6 py-4 bg-white border-b border-zinc-100 shrink-0">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-xl hover:bg-zinc-100 transition-colors"
          >
            <Menu size={18} />
          </button>
          <div className="flex-1" />
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-xl hover:bg-zinc-100 transition-colors">
              <Bell size={18} className="text-zinc-600" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-amber-500" />
            </button>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-zinc-50 cursor-pointer transition-colors">
              <div className="w-7 h-7 rounded-full gradient-gold flex items-center justify-center text-white text-xs font-bold">RM</div>
              <span className="text-sm font-medium text-zinc-700 hidden sm:block">Rafael</span>
              <ChevronDown size={14} className="text-zinc-400" />
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
