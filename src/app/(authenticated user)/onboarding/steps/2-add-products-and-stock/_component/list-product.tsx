import db from '@/models/db'
import { Alert } from '@heroui/alert'
import { useLiveQuery } from 'dexie-react-hooks'

export function ProductList() {
  const products = useLiveQuery(() => db.products.toArray(), [])

  if (!products || products.length === 0) {
    return (
      <Alert
        color="warning"
        variant="faded"
        className="flex flex-col text-center">
        Anda belum menambahkan produk, beserta stok nya.
      </Alert>
    )
  }

  return (
    <div className="mt-4">
      <ul className="list-inside list-disc">
        {products.map(p => (
          <li key={p.uuid as string}>
            {p.name} ({p.stock.qty} {p.qty_unit})
          </li>
        ))}
      </ul>
    </div>
  )
}
