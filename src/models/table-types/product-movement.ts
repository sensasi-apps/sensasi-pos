import type { UUID } from 'crypto'
import type { Warehouse } from './warehouse'
import type { Product } from './product'
import type { Base64Blob } from '@/@types/base-64-blob'
import type { ISODate } from '@/@types/iso-date'

export interface ProductMovement {
  uuid: Readonly<UUID>

  at: ISODate
  type: 'sale' | 'purchase' | 'return' | 'adjustment'
  note?: string

  warehouse_state: Readonly<Warehouse>

  details: {
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
