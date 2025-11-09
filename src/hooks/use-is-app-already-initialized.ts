import db from '@/models/db'
import { useLiveQuery } from 'dexie-react-hooks'

export default function useIsAppAlreadyInitialized() {
  return useLiveQuery(async () => {
    const userCount = await db.users.count()
    return userCount > 0
  }, [])
}
