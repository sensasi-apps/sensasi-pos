import { toast } from '@/functions/toast'
import db from '@/models/db'
import type { ProductMovement } from '@/models/table-types/product-movement'
import { useLiveQuery } from 'dexie-react-hooks'
import { useState } from 'react'

export function usePageHook() {
  const [toBeDeletedProductMovement, setToBeDeletedProductMovement] =
    useState<ProductMovement>()

  return {
    productMovements: useLiveQuery(() =>
      db.productMovements
        .orderBy('created_at')
        .reverse()
        .filter(movement => movement.type === 'purchase')
        .toArray(),
    ),

    handleDeleteProductMovement: () => {
      if (!toBeDeletedProductMovement) return

      db.productMovements
        .update(toBeDeletedProductMovement.uuid, {
          deleted_at: new Date().toISOString(),
          // deleted_by_user_state: getAuthUser(),
        })
        .then(() => {
          setToBeDeletedProductMovement(undefined)
          toast('Data pembelian berhasil dihapus', 'warning')
        })
        .catch((err: Error) => {
          throw err
        })
    },

    setToBeDeletedProductMovement,
    toBeDeletedProductMovement,
  }
}
