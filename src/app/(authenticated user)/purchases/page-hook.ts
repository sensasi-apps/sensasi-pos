import { toast } from '@/functions/toast'
import db from '@/models/db'
import type { ProductMovement } from '@/models/table-types/product-movement'
import { useLiveQuery } from 'dexie-react-hooks'
import { useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebounce } from '@/hooks/use-debounce'

export function usePageHook({
  page,
  rowsPerPage,
  ref,
}: {
  page: number
  rowsPerPage: number
  ref: string
}) {
  const [toBeDeletedProductMovement, setToBeDeletedProductMovement] =
    useState<ProductMovement>()
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [search, setSearch] = useState(ref)
  const debouncedSearch = useDebounce(search, 300)

  useEffect(() => {
    if (ref !== debouncedSearch) {
      const params = new URLSearchParams(searchParams)
      params.set('ref', debouncedSearch)
      params.set('page', '1')
      router.push(`${pathname}?${params.toString()}`)
    }
  }, [debouncedSearch, ref, searchParams, pathname, router])

  const productMovements = useLiveQuery(() => {
    let query = db.productMovements
      .orderBy('created_at')
      .reverse()
      .filter(movement => movement.type === 'purchase')

    if (ref) {
      query = query.and(
        movement =>
          movement.ref?.toLowerCase().includes(ref.toLowerCase()) || false,
      )
    }

    return query
      .offset((page - 1) * rowsPerPage)
      .limit(rowsPerPage)
      .toArray()
  }, [page, rowsPerPage, ref])

  const totalProductMovements = useLiveQuery(() => {
    let query = db.productMovements.filter(
      movement => movement.type === 'purchase',
    )

    if (ref) {
      query = query.and(
        movement =>
          movement.ref?.toLowerCase().includes(ref.toLowerCase()) || false,
      )
    }

    return query.count()
  }, [ref])

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
    search,
    setSearch,
  }
}
