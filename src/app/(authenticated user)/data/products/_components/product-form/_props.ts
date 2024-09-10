import type Product from '@/models/table-types/product'

export interface ProductFormProps {
  id: HTMLFormElement['id']
  data: Partial<Product>
  onSubmit?: (values: Partial<Product>) => void
}
