// types
import type { ProductMovement } from '@/models/table-types/product-movement'
// globals
import db from '@/models/db'
import { generateOrderedUuid } from '@/functions/generate-ordered-uuid'
import { useRouter } from 'next/navigation'
import { updateStocksOnReceived } from '../_functions/update-stocks-on-received'
import { toast } from '@/functions/toast'
import { useForm } from 'react-hook-form'

/**
 * Custom hook for handling the page logic in the purchase form.
 */
export function usePageHook() {
  const formContextValue = useForm<ProductMovement>()
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
    handleSubmit: formContextValue.handleSubmit(
      async (formValues: ProductMovement) => {
        formValues.type = 'purchase'

        await db.productMovements.add({
          ...formValues,
          uuid: generateOrderedUuid(),
          // by_user_state: getUser(),
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        })

        if (
          'received_at' in formValues.additional_info &&
          formValues.additional_info.received_at !== undefined
        ) {
          updateStocksOnReceived(formValues)
        }

        toast('Data pengadaan berhasil disimpan')
        router.back()
      },
    ),
  }
}
