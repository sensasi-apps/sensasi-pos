import type { UUID } from 'node:crypto'
import { v7 as generateUuid } from 'uuid'

export function generateOrderedUuid(): UUID {
  return generateUuid() as UUID
}
