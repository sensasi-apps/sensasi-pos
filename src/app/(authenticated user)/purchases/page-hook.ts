import { toast } from '@/functions/toast'
import db from '@/models/db'
import type { ProductMovement } from '@/models/table-types/product-movement'
import { useLiveQuery } from 'dexie-react-hooks'
import { useState } from 'react'

export function usePageHook({
  page,
  rowsPerPage,
}: {
  page: number
  rowsPerPage: number
}) {
  const [toBeDeletedProductMovement, setToBeDeletedProductMovement] =
    useState<ProductMovement>()

  const productMovements = useLiveQuery(
    () =>
      db.productMovements
        .orderBy('created_at')
        .reverse()
        .filter(movement => movement.type === 'purchase')
        .offset((page - 1) * rowsPerPage)
        .limit(rowsPerPage)
        .toArray(),
    [page, rowsPerPage],
  )

  const totalProductMovements = useLiveQuery(() =>
    db.productMovements
      .filter(movement => movement.type === 'purchase')
      .count(),
  )

  const handleDeleteProductMovement = () => {
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
  }

  return {
    productMovements,
    totalProductMovements,
    toBeDeletedProductMovement,
    setToBeDeletedProductMovement,
    handleDeleteProductMovement,
  }
}
