import db from '@/models/db'
import { useLiveQuery } from 'dexie-react-hooks'

export function useHook() {
  const products = useLiveQuery(() => db.products.toArray())
  const nProducts = products?.length ?? 0
  const categories =
    products
      ?.map(product => product.category)
      .filter((v, i, a) => v && a.indexOf(v) === i) ?? []

  return { products, nProducts, categories }
}
