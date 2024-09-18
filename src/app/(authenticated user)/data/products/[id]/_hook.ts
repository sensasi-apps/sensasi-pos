// types
import type { Product } from '@/models/table-types/product'
import type { ProductFormProps } from '../_components/product-form/_props'
// vendors
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { validate as validateUuid } from 'uuid'
// models
import db from '@/models/db'
import dayjs from 'dayjs'
import PageUrlEnum from '@/enums/page-url'
import { generateOrderedUuid } from '@/functions/generate-ordered-uuid'

/**
 *
 * @todo split the 'create' handling into a separate hook
 */
export function useHook(uuidFromPageParam: string) {
  const router = useRouter()
  const [product, setProduct] = useState<ProductFormProps['data']>()

  useEffect(() => {
    if (uuidFromPageParam !== 'create' && !validateUuid(uuidFromPageParam)) {
      handleFailure(new Error('Invalid UUID'))
    }

    if (uuidFromPageParam === 'create') {
      setProduct({})
    } else {
      db.products
        .get(uuidFromPageParam as Product['uuid'])
        .then(setProduct)
        .catch(handleFailure)
    }

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
      if (values.uuid) {
        db.products
          .update(values.uuid, {
            ...values,
            updated_at: dayjs().toISOString(),
          })
          .then(handleSuccess)
          .catch(handleFailure)
      } else {
        db.products
          .add({
            ...values,
            uuid: generateOrderedUuid(),
            stocks: [],
            created_at: dayjs().toISOString(),
            updated_at: dayjs().toISOString(),
          } as Product)
          .then(handleSuccess)
          .catch(handleFailure)
      }
    },
  }
}

function handleFailure(err: Error) {
  throw err
}
