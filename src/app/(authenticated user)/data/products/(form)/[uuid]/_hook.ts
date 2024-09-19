// types
import type { Product } from '@/models/table-types/product'
import type { ProductFormProps } from '../_components/product-form/props'
// vendors
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
// globals
import { isUuidString } from '@/functions/is-uuid-string'
import PageUrlEnum from '@/enums/page-url'
// models
import db from '@/models/db'

/**
 * Custom hook to manage product data update and form submission.
 *
 * @param {string} uuidFromPageParam - The UUID of the product from the page parameter.
 * @returns {object} An object containing the product data, handleCancel, and handleSubmit functions.
 *
 * @property {ProductFormProps['data'] | undefined} product - The product data fetched from the database.
 * @property {function} handleCancel - Function to navigate back to the previous page.
 * @property {function} handleSubmit - Function to handle form submission and update the product data in the database.
 *
 * @throws {Error} If the UUID from the page parameter is invalid.
 */
export function useHook(uuidFromPageParam: string) {
  const router = useRouter()
  const [product, setProduct] = useState<ProductFormProps['data']>()

  useEffect(() => {
    if (!isUuidString(uuidFromPageParam)) {
      handleFailure(new Error('Invalid UUID'))
    }

    db.products
      .get(uuidFromPageParam as Product['uuid'])
      .then(setProduct)
      .catch(handleFailure)

    return () => {
      setProduct(undefined)
    }
  }, [uuidFromPageParam])

  function handleSuccess() {
    router.push(PageUrlEnum.PRODUCT_LIST)
  }

  return {
    product,

    handleCancel: () => {
      router.back()
    },

    handleSubmit: (values: ProductFormProps['data']) => {
      if (!values.uuid) {
        handleFailure(new Error('Invalid UUID'))
        return
      }

      db.products
        .update(values.uuid, {
          ...values,
          updated_at: dayjs().toISOString(),
        })
        .then(handleSuccess)
        .catch(handleFailure)
    },
  }
}

function handleFailure(err: Error) {
  throw err
}
