import db from '@/models/db'
import { useLiveQuery } from 'dexie-react-hooks'

export function usePageHook() {
  const productMovements = useLiveQuery(() =>
    db.productMovements
      .orderBy('created_at')
      .reverse()
      .filter(movement => movement.type === 'purchase')
      .toArray(),
  )

  return { productMovements }
}
