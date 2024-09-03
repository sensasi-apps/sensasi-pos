interface Product {
  id: number
  name: string
  description: string
  base_cost: number
  default_price: number
  // image: string
  category: string | null
  qty: number
  qty_unit: string
}

export default Product
