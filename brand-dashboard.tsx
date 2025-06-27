import { Card, CardContent } from "@/components/ui/card"

interface Brand {
  name: string
  season: string
  supplier: string
  lastUpdate: string
}

const brands: Brand[] = [
  { name: "CALLAWAY", season: "ATS 2025", supplier: "CALLAWAY", lastUpdate: "2025-06-23 00:00:00" },
  { name: "CALVIN KLEIN", season: "ATS 2025", supplier: "PVH", lastUpdate: "2025-06-20 00:00:00" },
  { name: "CALVIN KLEIN", season: "ATS 2025", supplier: "PVH", lastUpdate: "2025-06-20 00:00:00" },
  { name: "CROCS", season: "ATS 2025", supplier: "ADAM", lastUpdate: "2025-06-19 00:00:00" },
  { name: "CUISINART", season: "ATS 2025", supplier: "CUISINART", lastUpdate: "2025-06-24 00:00:00" },
  { name: "FJALLRAVEN", season: "ATS", supplier: "ENERBIKE", lastUpdate: "2025-06-20 00:00:00" },
  { name: "Rossignol", season: "ATS", supplier: "Rossignol", lastUpdate: "2025-06-18 00:00:00" },
  { name: "SPYDERCO", season: "ATS 2025", supplier: "SPYDERCO", lastUpdate: "2025-06-17 00:00:00" },
  { name: "TAYLORMADE", season: "ATS 2025", supplier: "TAYLORMADE", lastUpdate: "2025-06-23 00:00:00" },
  { name: "5.11", season: "SS26", supplier: "5.11", lastUpdate: "2025-06-17 00:00:00" },
  { name: "CALVIN KLEIN (APPAREL MEN)", season: "SS26", supplier: "PVH", lastUpdate: "2025-06-20 00:00:00" },
  { name: "CALVIN KLEIN (ACCESSORIES-HATS)", season: "SS26", supplier: "PVH", lastUpdate: "2025-06-20 00:00:00" },
  { name: "CALVIN KLEIN ( APPAREL WOMEN)", season: "SS26", supplier: "PVH", lastUpdate: "2025-06-20 00:00:00" },
  { name: "CAMPER", season: "SS26", supplier: "CAMPER", lastUpdate: "2025-06-17 00:00:00" },
  { name: "CONVERSE", season: "SP26", supplier: "REGENCY BRANDS", lastUpdate: "2025-06-26 00:00:00" },
  { name: "HYDRAPAK", season: "SS26", supplier: "HYDRAPAK", lastUpdate: "2025-06-24 00:00:00" },
  { name: "NEW ERA", season: "SS26 EMEA", supplier: "NEW ERA", lastUpdate: "2025-06-23 00:00:00" },
  { name: "SUN68", season: "SS26", supplier: "SUN68", lastUpdate: "2025-06-17 00:00:00" },
  { name: "VAUDE", season: "SS26", supplier: "VAUDE", lastUpdate: "2025-06-17 00:00:00" },
  { name: "VIVOBAREFOOT", season: "Summer 2026", supplier: "VIVOBAREFOOT", lastUpdate: "2025-06-27 00:00:00" },
  { name: "ALLURA", season: "Closeout", supplier: "CAREISMATIC BRANDS", lastUpdate: "2025-06-17 00:00:00" },
  { name: "CALVIN KLEIN", season: "STOCK 2025", supplier: "PVH", lastUpdate: "2025-06-20 00:00:00" },
  { name: "CALVIN KLEIN", season: "STOCK 2025", supplier: "PVH", lastUpdate: "2025-06-20 00:00:00" },
  { name: "CHEROKEE", season: "Closeout", supplier: "CAREISMATIC BRANDS", lastUpdate: "2025-06-17 00:00:00" },
  { name: "CONVERSE", season: "STOCK 2025", supplier: "REGENCY GRANDS", lastUpdate: "2025-06-17 00:00:00" },
  { name: "Havaianas", season: "Stock 2025", supplier: "Alpargatas S.A", lastUpdate: "2025-06-18 00:00:00" },
  { name: "HEALING HANDS", season: "Closeout", supplier: "CAREISMATIC BRANDS", lastUpdate: "2025-06-17 00:00:00" },
  { name: "HEART SOUL", season: "Closeout", supplier: "CAREISMATIC BRANDS", lastUpdate: "2025-06-17 00:00:00" },
  { name: "INFINITY", season: "Closeout", supplier: "CAREISMATIC BRANDS", lastUpdate: "2025-06-17 00:00:00" },
  { name: "INSPIRA", season: "Closeout", supplier: "CAREISMATIC BRANDS", lastUpdate: "2025-06-17 00:00:00" },
  { name: "MED COUTURE", season: "Closeout", supplier: "CAREISMATIC BRANDS", lastUpdate: "2025-06-17 00:00:00" },
  { name: "NEW BALANCE", season: "STOCK 2025", supplier: "MIM", lastUpdate: "2025-06-20 00:00:00" },
  { name: "NIKE", season: "STOCK", supplier: "NORTHBAY", lastUpdate: "2025-06-20 00:00:00" },
  { name: "PERFUMES", season: "STOCK 2025", supplier: "PABLO LESME", lastUpdate: "2025-06-24 00:00:00" },
  { name: "TOMMY HILFIGER", season: "STOCK 2025", supplier: "PVH", lastUpdate: "2025-06-20 00:00:00" },
]

export default function BrandDashboard() {
  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <header className="bg-blue-500 text-white p-5 flex items-center">
        <img src="/logo_comex.png" alt="COMEX SPORT Logo" className="h-12 mr-4" />
        <h1 className="text-2xl font-semibold">Cuadro de Marcas</h1>
      </header>

      {/* Brand Cards Container */}
      <div className="p-5">
        <div className="flex flex-wrap gap-5 justify-center">
          {brands.map((brand, index) => (
            <Card key={index} className="w-64 bg-white shadow-md">
              <CardContent className="p-4 text-center">
                <h2 className="text-lg font-semibold mb-2 text-gray-800">{brand.name}</h2>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>
                    <span className="font-medium">Temporada:</span> {brand.season}
                  </p>
                  <p>
                    <span className="font-medium">Proveedor:</span> {brand.supplier}
                  </p>
                  <p>
                    <span className="font-medium">Última Actualización:</span> {brand.lastUpdate}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
