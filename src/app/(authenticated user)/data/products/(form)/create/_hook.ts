// types
import type { Product } from '@/models/table-types/product'
import type { ProductFormProps } from '../_components/product-form/props'
// vendors
import { useRouter } from 'next/navigation'
import dayjs from 'dayjs'
// globals
import { generateOrderedUuid } from '@/functions/generate-ordered-uuid'
import PageUrlEnum from '@/enums/page-url'
// models
import db from '@/models/db'
import { toast } from '@/functions/toast'

/**
 * Custom hook for handling product form creation.
 *
 * @returns An object containing:
 * - `product`: The product form data.
 * - `handleCancel`: Function to navigate back to the previous page.
 * - `handleSubmit`: Function to handle form submission, add a new product to the database, and navigate to the product list page.
 */
export function useHook() {
  const router = useRouter()

  return {
    product: {} as ProductFormProps['data'],

    handleCancel: () => {
      router.back()
    },

    handleSubmit: (values: ProductFormProps['data']) => {
      db.products
        .add({
          ...values,
          uuid: generateOrderedUuid(),
          stocks: [],
          created_at: dayjs().toISOString(),
          updated_at: dayjs().toISOString(),
        } as Product)
        .then(() => {
          router.push(PageUrlEnum.PRODUCT_LIST)
          toast('Produk berhasil ditambahkan')
        })
        .catch(handleFailure)
    },
  }
}

function handleFailure(err: Error) {
  throw err
}
