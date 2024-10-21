// types
import type { FormValues } from '../_types/form-values'
import type { ProductMovement } from '@/models/table-types/product-movement'
// vendors
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import db from '@/models/db'
// globals
import { generateOrderedUuid } from '@/functions/generate-ordered-uuid'
import { toast } from '@/functions/toast'
// locals
import { updateStocksOnReceived } from '../_functions/update-stocks-on-received'

/**
 * Custom hook for handling the page logic in the purchase form.
 */
export function usePageHook() {
  const formContextValue = useForm<FormValues>()
  const router = useRouter()

  return {
    /**
     * The context value for the form.
     */
    formContextValue,

    /**
     * Handler function to navigate back to the previous page.
     */
    handleCancel: () => {
      router.back()
    },

    /**
     * Handler function to submit the form data.
     *
     * @todo Rekam pengguna yang mengentri data pengadaan.
     */
    handleSubmit: formContextValue.handleSubmit(async formValues => {
      const productMovement = {
        ...formValues,
        type: 'purchase',
        uuid: generateOrderedUuid(),
        // by_user_state: getUser(),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      } as ProductMovement // TODO: Should have other mechanism to determine the type of the product movement instead casting it like this

      await db.productMovements.add(productMovement)

      if (
        'received_at' in productMovement.additional_info &&
        productMovement.additional_info.received_at !== undefined
      ) {
        updateStocksOnReceived(productMovement)
      }

      toast('Data pengadaan berhasil disimpan')
      router.back()
    }),
  }
}
