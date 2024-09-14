import type { Warehouse } from './warehouse'
import type { Product } from './product'
import type { Base64Blob } from '@/@types/base-64-blob'
import type { ISODate } from '@/@types/iso-date'

interface BaseProductMovement {
  id: Readonly<number>
  at: ISODate
  note?: string

  ref: string

  warehouse_state: Readonly<Warehouse>

  items: {
    product_state: Readonly<Product>

    qty: number
    price: number
  }[]

  additional_costs: {
    name: string
    value: number
  }[]

  created_at: ISODate
  updated_at: ISODate

  files: {
    blob: Base64Blob
    description?: string
  }[]
}
interface PurchaseType {
  type: 'purchase'

  purchase_detail: {
    received_at: ISODate
    paid_at: ISODate
  }
}

interface SaleType {
  type: 'sale'

  sale_detail: {
    receipt_no: number
  }
}

interface OtherType {
  type: 'return' | 'refund' | 'adjustment'
}

export type ProductMovement = BaseProductMovement &
  (PurchaseType | SaleType | OtherType)
