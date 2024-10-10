// vendors
import type { UUID } from 'crypto'
// globals
import type { User } from '@/data/users'
import type { ISODate } from '@/@types/iso-date'

/**
 * Represents a warehouse entity with relevant details.
 */
export interface Warehouse {
  /**
   * Unique identifier for the warehouse.
   * @readonly
   */
  uuid: Readonly<UUID>

  /**
   * Name of the warehouse.
   */
  name: string

  /**
   * Optional note about the warehouse.
   */
  note?: string

  /**
   * Timestamp when the warehouse was created.
   * @readonly
   */
  created_at: Readonly<ISODate>

  /**
   * Timestamp when the warehouse was last updated.
   */
  updated_at: ISODate

  /**
   * User who deleted the warehouse.
   * @readonly
   */
  deleted_by_user?: Readonly<User>

  /**
   * Optional timestamp when the warehouse was deleted.
   */
  deleted_at?: ISODate
}
