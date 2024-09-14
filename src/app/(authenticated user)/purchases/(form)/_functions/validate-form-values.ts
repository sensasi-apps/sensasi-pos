import type { ProductMovement } from '@/models/table-types/product-movement'
import type { FormValues } from '../_types/form-values'

export function validateFormValues(formValues: FormValues) {
  return formValues as ProductMovement
}
