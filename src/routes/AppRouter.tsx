import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"

// Layouts
import { OwnerLayout } from "../components/layouts/OwnerLayout"
import { ResidentLayout } from "../components/layouts/ResidentLayout"
import { InvestorLayout } from "../components/layouts/InvestorLayout"

// Pages
import { LandingPage } from "../pages/LandingPage"

// Owner
import { OwnerDashboard } from "../modules/owner-dashboard/OwnerDashboard"
import { OccupancyPage } from "../modules/owner-dashboard/OccupancyPage"
import { RevenuePage } from "../modules/owner-dashboard/RevenuePage"
import { FinancialPage } from "../modules/owner-dashboard/FinancialPage"
import { CCTVPage } from "../modules/owner-dashboard/CCTVPage"
import { ResidentsPage } from "../modules/owner-dashboard/ResidentsPage"

// Resident
import { ResidentHome } from "../modules/resident-app/ResidentHome"
import { AccessPage } from "../modules/resident-app/AccessPage"
import { BookingPage } from "../modules/resident-app/BookingPage"
import { RewardsPage } from "../modules/resident-app/RewardsPage"
import { BillingPage } from "../modules/resident-app/BillingPage"

// Investor
import { InvestorOverview } from "../modules/investor-dashboard/InvestorOverview"
import { BusinessUnitsPage } from "../modules/investor-dashboard/BusinessUnitsPage"
import { SmartEcosystemPage } from "../modules/investor-dashboard/SmartEcosystemPage"
import { PropertyPage } from "../modules/investor-dashboard/PropertyPage"

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
  {
    path: "/investor",
    element: <InvestorLayout />,
    children: [
      { index: true, element: <InvestorOverview /> },
      { path: "business", element: <BusinessUnitsPage /> },
      { path: "ecosystem", element: <SmartEcosystemPage /> },
      { path: "property", element: <PropertyPage /> },
    ],
  },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}
