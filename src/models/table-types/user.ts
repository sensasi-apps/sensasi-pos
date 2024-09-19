import type { ISODate } from '@/@types/iso-date'
import type { Permission } from '@/enums/permission'
import type { UUID } from 'crypto'

type UserRole = 'owner' | 'manager' | 'cashier' | 'stocker'

/**
 * Represents a user in the system.
 */
export interface User {
  /**
   * The unique identifier for the user.
   */
  uuid: Readonly<UUID>

  /**
   * The encrypted email address of the user.
   */
  email__hashed: string

  /**
   * The encrypted password of the user.
   */
  password__hashed: string

  /**
   * The roles assigned to the user.
   */
  roles: UserRole[]

  /**
   * The permissions granted to the user.
   */
  permissions: Permission[]

  /**
   * Optional user preferences.
   */
  preferences?: {
    /**
     * The user's preferred timezone.
     */
    timezone?: string

    /**
     * The user's preferred locale.
     */
    locale?: string
  }

  /**
   * The date and time when the user was created.
   */
  created_at: Readonly<ISODate>

  /**
   * The date and time when the user was last updated
   */
  updated_at: ISODate

  /**
   * The date and time when the user was deleted, if applicable.
   */
  deleted_at?: ISODate
}
