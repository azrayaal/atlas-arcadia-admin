import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"

// Layouts
import { OwnerLayout } from "../components/layouts/OwnerLayout"
import { ResidentLayout } from "../components/layouts/ResidentLayout"

// Pages
import { LandingPage } from "../pages/LandingPage"

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

// Resident App
import { ResidentHome } from "../modules/resident-app/ResidentHome"
import { AccessPage } from "../modules/resident-app/AccessPage"
import { BookingPage } from "../modules/resident-app/BookingPage"
import { RewardsPage } from "../modules/resident-app/RewardsPage"
import { BillingPage } from "../modules/resident-app/BillingPage"

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  {
    path: "/owner",
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
  {
    path: "/resident",
    element: <ResidentLayout />,
    children: [
      { index: true, element: <ResidentHome /> },
      { path: "access", element: <AccessPage /> },
      { path: "booking", element: <BookingPage /> },
      { path: "rewards", element: <RewardsPage /> },
      { path: "billing", element: <BillingPage /> },
    ],
  },
  // Redirect old investor routes
  { path: "/investor/*", element: <Navigate to="/owner/business" replace /> },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}
