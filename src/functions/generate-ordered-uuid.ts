import type { UUID } from 'crypto'
import { v6 as uuidv6 } from 'uuid'

export function generateOrderedUuid(): UUID {
  return uuidv6() as UUID
}
