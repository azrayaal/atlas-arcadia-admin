import { createBrowserRouter, RouterProvider, Navigate, useRouteError, isRouteErrorResponse } from "react-router-dom"

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

function RootErrorBoundary() {
  const error = useRouteError()
  const is404 = isRouteErrorResponse(error) && error.status === 404

  return (
    <div className="flex min-h-screen items-center justify-center bg-stone-50">
      <div className="text-center px-6">
        <p className="text-6xl font-bold text-stone-200">{is404 ? "404" : "Oops"}</p>
        <h1 className="mt-4 text-xl font-semibold text-stone-800">
          {is404 ? "Halaman tidak ditemukan" : "Terjadi kesalahan"}
        </h1>
        <p className="mt-2 text-sm text-stone-500">
          {is404
            ? "Halaman yang Anda cari tidak ada atau telah dipindahkan."
            : "Silakan muat ulang halaman atau kembali ke dashboard."}
        </p>
        <a
          href="/owner"
          className="mt-6 inline-block px-5 py-2.5 rounded-xl bg-stone-900 text-white text-sm font-medium hover:bg-stone-700 transition-colors"
        >
          Kembali ke Dashboard
        </a>
      </div>
    </div>
  )
}

const router = createBrowserRouter([
  { index: true, element: <Navigate to="/owner" replace /> },
  {
    path: "/owner",
    element: <OwnerLayout />,
    errorElement: <RootErrorBoundary />,
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
  // Catch-all 404
  { path: "*", element: <RootErrorBoundary /> },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}
