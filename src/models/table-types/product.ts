import type { Base64Blob } from '@/@types/base-64-blob'
import type { ISODate } from '@/@types/iso-date'
import type { Warehouse } from './warehouse'

export interface Product {
  id: Readonly<number>

  code?: string
  barcode_reg_id?: string

  name: string
  description?: string
  category?: string

  image_file?: Base64Blob

  created_at: ISODate
  updated_at: ISODate
  deleted_at?: ISODate

  qty_unit: string
  default_price: number // per unit

  low_qty_threshold?: number

  stocks: {
    warehouse_id: Warehouse['id']

    qty: number
    cost: number // per unit
    default_price?: number // use parent product.default_price_per_unit if not set
    low_qty_threshold?: number // use parent product.low_qty_threshold if not set
  }[]
}
