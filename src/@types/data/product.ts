interface Product {
  id: number
  code?: string
  barcode_reg_id?: string

  name: string
  description?: string
  category?: string

  qty: number
  qty_unit: string

  base_cost: number
  default_price: number

  image_file?: File
}

export default Product
