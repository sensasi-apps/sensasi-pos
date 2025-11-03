import { toast } from '@/functions/toast'
import db from '@/models/db'
import type { ProductMovement } from '@/models/table-types/product-movement'
import { useLiveQuery } from 'dexie-react-hooks'
import { useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebounce } from '@/hooks/use-debounce'
import useAuth from '@/hooks/use-auth'

export function usePageHook({
  page,
  rowsPerPage,
  q,
}: {
  page: number
  rowsPerPage: number
  q: string
}) {
  const { user } = useAuth()
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

  const productMovements = useLiveQuery(
    () =>
      createQuery(q)
        .offset((page - 1) * rowsPerPage)
        .limit(rowsPerPage)
        .toArray(),
    [page, rowsPerPage, q],
  )

  const totalProductMovements = useLiveQuery(() => createQuery(q).count(), [q])

  const handleDeleteProductMovement = () => {
    if (!toBeDeletedProductMovement) return

    db.productMovements
      .update(toBeDeletedProductMovement.uuid, {
        deleted_at: new Date().toISOString(),
        deleted_by_user_state: user,
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

function createQuery(q: string) {
  const query = db.productMovements
    .orderBy('created_at')
    .reverse()
    .filter(movement => movement.type === 'purchase')

  if (q) {
    query.and(({ ref, note, by_user_state, items }) => {
      const lowerCaseQuery = q.toLowerCase()

      return (
        ref?.toLowerCase().includes(lowerCaseQuery) ||
        note?.toLowerCase().includes(lowerCaseQuery) ||
        //
        items.some(
          ({ product_state: { name, uuid } }) =>
            name?.toLowerCase().includes(lowerCaseQuery) ||
            uuid?.toLowerCase().includes(lowerCaseQuery),
        ) ||
        //
        by_user_state?.name
          ?.toLowerCase()
          .includes(lowerCaseQuery) ||
        by_user_state?.email?.toLowerCase().includes(lowerCaseQuery) ||
        by_user_state?.uuid?.toLowerCase().includes(lowerCaseQuery)
      )
    })
  }

  return query
}
