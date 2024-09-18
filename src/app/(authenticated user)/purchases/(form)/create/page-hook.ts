'use client'

// types
import type { ProductMovement } from '@/models/table-types/product-movement'
// vendors
import { useEffect, useState } from 'react'
// globals
import db from '@/models/db'
import { generateOrderedUuid } from '@/functions/generate-ordered-uuid'
import { useRouter } from 'next/navigation'
import { updateStocksOnReceived } from '../_functions/update-stocks-on-received'

type FormValues = Partial<ProductMovement>

export function usePageHook() {
  const router = useRouter()

  const [formValues, setFormValues] = useState<FormValues>()

  useEffect(() => {
    setFormValues({})

    return () => {
      setFormValues(undefined)
    }
  }, [])

  return {
    formValues,

    handleCancel: () => {
      router.back()
    },

    handleSubmit: () => {
      if (!formValues) return

      const validated = validateFormValues(formValues)

      db.productMovements
        .add({
          ...validated,
          uuid: generateOrderedUuid(),
          type: 'purchase',
          created_at: new Date().toISOString(),
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

function validateFormValues(formValues: FormValues) {
  return formValues as ProductMovement
}
