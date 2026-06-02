import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"

// Layouts
import { OwnerLayout } from "../components/layouts/OwnerLayout"

// Owner — Operasional
import { OwnerDashboard } from "../modules/owner-dashboard/OwnerDashboard"
import { OccupancyPage } from "../modules/owner-dashboard/OccupancyPage"
import { RevenuePage } from "../modules/owner-dashboard/RevenuePage"
import { FinancialPage } from "../modules/owner-dashboard/FinancialPage"
import { CCTVPage } from "../modules/owner-dashboard/CCTVPage"
import { ResidentsPage } from "../modules/owner-dashboard/ResidentsPage"

// Owner — Potensi Bisnis (investor view integrated)
import { BusinessUnitsPage } from "../modules/owner-dashboard/BusinessUnitsPage"
import { SmartEcosystemPage } from "../modules/owner-dashboard/SmartEcosystemPage"
import { PropertyPage } from "../modules/owner-dashboard/PropertyPage"


const router = createBrowserRouter([
  // { path: "/", element: <OwnerLayout /> },
  {
    path: "/",
    element: <OwnerLayout />,
    children: [
      { index: true, element: <OwnerDashboard /> },
      { path: "occupancy", element: <OccupancyPage /> },
      { path: "revenue", element: <RevenuePage /> },
      { path: "financial", element: <FinancialPage /> },
      { path: "cctv", element: <CCTVPage /> },
      { path: "residents", element: <ResidentsPage /> },
      { path: "reports", element: <Navigate to="/owner/revenue" replace /> },
      { path: "settings", element: <Navigate to="/owner" replace /> },
      // Potensi Bisnis (investor-integrated)
      { path: "business", element: <BusinessUnitsPage /> },
      { path: "ecosystem", element: <SmartEcosystemPage /> },
      { path: "property", element: <PropertyPage /> },
    ],
  },
  // Redirect old investor routes
  { path: "/investor/*", element: <Navigate to="/owner/business" replace /> },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}
