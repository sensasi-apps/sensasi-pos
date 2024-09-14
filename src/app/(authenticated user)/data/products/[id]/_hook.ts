// types
import type { Product } from '@/models/table-types/product'
import type { ProductFormProps } from '../_components/product-form/_props'
// vendors
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
// models
import db from '@/models/db'
import dayjs from 'dayjs'
import PageUrlEnum from '@/enums/page-url'

export function useHook(idParam: string) {
  const router = useRouter()
  const [product, setProduct] = useState<ProductFormProps['data']>()

  useEffect(() => {
    if (idParam !== 'create' && isNaN(parseInt(idParam))) {
      handleFailure(new Error('Invalid ID'))
    }

    if (idParam === 'create') {
      setProduct({})
    }

    if (!isNaN(parseInt(idParam))) {
      db.products.get(parseInt(idParam)).then(setProduct).catch(handleFailure)
    }

    return () => {
      setProduct(undefined)
    }
  }, [idParam])

  function handleSuccess() {
    router.push(PageUrlEnum.PRODUCT_LIST)
  }

  return {
    product,

    handleCancel: () => router.back(),

    handleSubmit: (values: ProductFormProps['data']) => {
      if (values.id) {
        db.products
          .update(values.id, {
            ...values,
            updated_at: dayjs().toISOString(),
          })
          .then(handleSuccess)
          .catch(handleFailure)
      } else {
        db.products
          .add({
            ...values,
            created_at: dayjs().toISOString(),
            updated_at: dayjs().toISOString(),
          } as Product)
          .then(newProductId => {
            if (!values.code && newProductId) {
              db.products
                .update(newProductId, {
                  code: newProductId.toString(),
                })
                .then(handleSuccess)
                .catch(handleFailure)
            } else {
              handleSuccess()
            }
          })
          .catch(handleFailure)
      }
    },
  }
}

function handleFailure(err: Error) {
  throw err
}
