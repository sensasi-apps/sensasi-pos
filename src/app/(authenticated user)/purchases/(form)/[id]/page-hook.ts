'use client'

import type { ProductMovement } from '@/models/table-types/product-movement'
import type { FormValues } from '../_types/form-values'

import db from '@/models/db'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { updateStocksOnReceived } from '../_functions/update-stocks-on-received'
import { validateFormValues } from '../_functions/validate-form-values'

export function usePageHook(idParam: string) {
  const router = useRouter()

  const [formValues, setFormValues] = useState<FormValues>()

  useEffect(() => {
    if (isNaN(parseInt(idParam))) {
      throw new Error('Invalid ID')
    }

    getData(parseInt(idParam))
      .then(setFormValues)
      .catch(error => {
        throw error
      })

    return () => {
      setFormValues(undefined)
    }
  }, [idParam])

  return {
    formValues,

    handleCancel: () => {
      router.back()
    },

    handleSubmit: () => {
      if (!formValues) return

      const validated = validateFormValues(formValues)

      db.productMovements
        .update(validated.id, {
          ...validated,
          updated_at: new Date().toISOString(),
        })
        .then(() => {
          if (validated.type !== 'purchase') {
            throw new Error('Invalid type')
          }

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

async function getData(id: number) {
  return new Promise<ProductMovement>((resolve, reject) => {
    db.productMovements
      .get(id)
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
