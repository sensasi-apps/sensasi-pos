import type { ProductMovement } from '@/models/table-types/product-movement'

export type FormValues = Partial<ProductMovement> & {
  items: Partial<ProductMovement['items'][0]>[]
  additional_costs: Partial<ProductMovement['additional_costs'][0]>[]
}
