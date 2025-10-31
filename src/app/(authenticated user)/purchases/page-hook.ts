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
  q,
}: {
  page: number
  rowsPerPage: number
  q: string
}) {
  const [toBeDeletedProductMovement, setToBeDeletedProductMovement] =
    useState<ProductMovement>()
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [search, setSearch] = useState(q)
  const debouncedSearch = useDebounce(search, 300)

  useEffect(() => {
    if (q !== debouncedSearch) {
      const params = new URLSearchParams(searchParams)
      params.set('q', debouncedSearch)
      params.set('page', '1')
      router.push(`${pathname}?${params.toString()}`)
    }
  }, [debouncedSearch, q, searchParams, pathname, router])

  const productMovements = useLiveQuery(() => {
    let query = db.productMovements
      .orderBy('created_at')
      .reverse()
      .filter(movement => movement.type === 'purchase')

    if (q) {
      const lowerCaseQuery = q.toLowerCase()
      query = query.and(movement => {
        const searchInRef =
          movement.ref?.toLowerCase().includes(lowerCaseQuery) ?? false
        const searchInNote =
          movement.note?.toLowerCase().includes(lowerCaseQuery) ?? false
        const searchInProducts =
          movement.items?.some(item =>
            item.product_state?.name?.toLowerCase().includes(lowerCaseQuery),
          ) ?? false

        return searchInRef || searchInNote || searchInProducts
      })
    }

    return query
      .offset((page - 1) * rowsPerPage)
      .limit(rowsPerPage)
      .toArray()
  }, [page, rowsPerPage, q])

  const totalProductMovements = useLiveQuery(() => {
    let query = db.productMovements.filter(
      movement => movement.type === 'purchase',
    )

    if (q) {
      const lowerCaseQuery = q.toLowerCase()
      query = query.and(movement => {
        const searchInRef =
          movement.ref?.toLowerCase().includes(lowerCaseQuery) ?? false
        const searchInNote =
          movement.note?.toLowerCase().includes(lowerCaseQuery) ?? false
        const searchInProducts =
          movement.items?.some(item =>
            item.product_state?.name?.toLowerCase().includes(lowerCaseQuery),
          ) ?? false

        return searchInRef || searchInNote || searchInProducts
      })
    }

    return query.count()
  }, [q])

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
