import type { ISODate } from '@/@types/iso-date'
import type { Permission } from '@/enums/permission'
import type { Role } from '@/enums/role'
import type { UUID } from 'crypto'

/**
 * Represents a user in the system.
 */
export interface User {
  /**
   * The unique identifier for the user.
   */
  uuid: Readonly<UUID>

  /**
   * The name of the user.
   */
  name: string

  /**
   * The email address of the user.
   */
  email: string

  /**
   * The encrypted password of the user.
   */
  password__hashed?: string

  /**
   * The PIN of the user.
   */
  pin__hashed?: string

  /**
   * The security questions and answers for the user
   * to recover their account.
   */
  sequrity_questions?: {
    /**
     * The hashed question.
     */
    question__hashed: string

    /**
     * The hashed answer.
     */
    answer__hashed: string
  }[]

  /**
   * The roles assigned to the user.
   */
  roles: Role[]

  /**
   * The permissions granted to the user.
   */
  permissions: Permission[]

  /**
   * Optional user preferences.
   */
  // preferences?: {

  /**
   * The user's preferred timezone.
   */
  // timezone?: string

  /**
   * The user's preferred locale.
   */
  // locale?: string
  // }

  /**
   * The date and time when the user was created.
   */
  created_at: Readonly<ISODate>

  /**
   * The date and time when the user was last updated
   */
  updated_at?: ISODate

  /**
   * The date and time when the user was last logged in.
   */
  inactivated_at?: ISODate

  /**
   * The user who inactivated this user, if applicable.
   */
  inactivated_by_user_state?: User

  /**
   * The date and time when the user was deleted, if applicable.
   */
  deleted_at?: ISODate

  /**
   * The user who deleted this user, if applicable.
   */
  deleted_by_user_state?: User
}
