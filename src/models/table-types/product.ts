import type Base64Blob from '@/@types/base-64-blob'

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

  image_file?: Base64Blob

  created_at: string
  updated_at: string
  deleted_at?: string
}

export default Product
