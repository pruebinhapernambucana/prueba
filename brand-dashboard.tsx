"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

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
  const [searchTerm, setSearchTerm] = useState("")

  const filteredBrands = brands.filter(
    (brand) =>
      brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      brand.supplier.toLowerCase().includes(searchTerm.toLowerCase()) ||
      brand.season.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <header className="bg-blue-500 text-white p-5 flex items-center">
        <img src="/logo_comex.png" alt="COMEX SPORT Logo" className="h-12 mr-4" />
        <h1 className="text-2xl font-semibold">Cuadro de Marcas</h1>
      </header>

      {/* Search Bar */}
      <div className="text-center my-5">
        <div className="relative inline-block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Buscar marca..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 w-80 text-base py-3 rounded-lg border border-gray-300"
          />
        </div>
      </div>

      {/* Brand Cards Container */}
      <div className="p-5">
        <div className="flex flex-wrap gap-5 justify-center">
          {filteredBrands.map((brand, index) => (
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

        {/* No results message */}
        {filteredBrands.length === 0 && (
          <div className="text-center text-gray-500 mt-10">
            <p className="text-lg">No se encontraron marcas que coincidan con "{searchTerm}"</p>
          </div>
        )}
      </div>
    </div>
  )
}
