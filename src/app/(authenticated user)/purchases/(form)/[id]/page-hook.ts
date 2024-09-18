'use client'

// types
import type { ProductMovement } from '@/models/table-types/product-movement'
import type { FormValues } from '../_types/form-values'
// vendors
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { validate as validateUuid } from 'uuid'
// globals
import db from '@/models/db'
import { updateStocksOnReceived } from '../_functions/update-stocks-on-received'
import { validateFormValues } from '../_functions/validate-form-values'

export function usePageHook(uuidPageParam: string) {
  const router = useRouter()

  const [formValues, setFormValues] = useState<FormValues>()

  useEffect(() => {
    if (!validateUuid(uuidPageParam)) {
      throw new Error('Invalid UUID')
    }

    getData(uuidPageParam as ProductMovement['uuid'])
      .then(setFormValues)
      .catch(error => {
        throw error
      })

    return () => {
      setFormValues(undefined)
    }
  }, [uuidPageParam])

  return {
    formValues,

    handleCancel: () => {
      router.back()
    },

    handleSubmit: () => {
      if (!formValues) return

      const validated = validateFormValues(formValues)

      if (validated.type !== 'purchase') {
        throw new Error('Invalid type')
      }

      db.productMovements
        .update(validated.uuid, {
          ...validated,
          updated_at: new Date().toISOString(),
        })
        .then(() => {
          if (validated.additional_info.received_at) {
            updateStocksOnReceived(validated)
          }
        })
        .then(() => {
          router.back()
        })
        .catch(error => {
          throw error
        })
    },
  }
}

async function getData(uuid: ProductMovement['uuid']) {
  return new Promise<ProductMovement>((resolve, reject) => {
    db.productMovements
      .get(uuid)
      .then(data => {
        if (!data) {
          reject(new Error('not found'))
          return
        }

        if (data.type !== 'purchase') {
          reject(new Error('not found'))
          return
        }

        if (data.additional_info.received_at ?? data.additional_info.paid_at) {
          reject(
            new Error(
              'Tidak dapat mengubah data yang sudah diterima atau dibayar',
            ),
          )
        }

        resolve(data)
      })
      .catch(reject)
  })
}
