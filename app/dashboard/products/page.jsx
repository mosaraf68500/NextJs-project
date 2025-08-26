"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Edit, Trash2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const mockProducts = [
  { id: 1, name: "iPhone 15", price: 999, stock: 20, category: "Electronics" },
  { id: 2, name: "MacBook Air", price: 1299, stock: 5, category: "Computers" },
  { id: 3, name: "Nike Air Max", price: 150, stock: 0, category: "Shoes" },
  { id: 4, name: "Galaxy S24", price: 899, stock: 10, category: "Electronics" },
]

export default function ManageProductPage() {
  const { toast } = useToast()
  const [search, setSearch] = useState("")
  const [products, setProducts] = useState(mockProducts)

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )

  const handleDelete = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id))
    toast({
      title: "Product deleted",
      description: `Product ID ${id} has been removed.`,
      variant: "destructive",
    })
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8 px-4 py-10">
      {/* Section 1: Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Products</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">
            {products.length}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>In Stock</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">
            {products.filter((p) => p.stock > 0).length}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Out of Stock</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold text-destructive">
            {products.filter((p) => p.stock === 0).length}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Categories</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">
            {[...new Set(products.map((p) => p.category))].length}
          </CardContent>
        </Card>
      </div>

      {/* Section 2: Search Bar */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Manage Products</h2>
        <Input
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-64"
        />
      </div>

      {/* Section 3: Product Table */}
      <div className="border rounded-md overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.id}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>${product.price}</TableCell>
                  <TableCell>
                    {product.stock > 0 ? (
                      <span className="text-green-600">In Stock</span>
                    ) : (
                      <span className="text-red-600">Out of Stock</span>
                    )}
                  </TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button size="sm" variant="outline">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDelete(product.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-6 text-muted-foreground">
                  No products found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Section 4: Pagination Placeholder */}
      <div className="flex justify-between items-center pt-4">
        <span className="text-sm text-muted-foreground">
          Showing {filteredProducts.length} of {products.length} products
        </span>
        <div className="space-x-2">
          <Button variant="outline" size="sm">Previous</Button>
          <Button variant="outline" size="sm">Next</Button>
        </div>
      </div>
    </div>
  )
}
