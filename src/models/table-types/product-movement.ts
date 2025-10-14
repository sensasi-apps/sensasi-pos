// vendor
import type { UUID } from 'crypto'
// app types
import type { File } from '@/@types/file'
import type { ISODate } from '@/@types/iso-date'
// other models
import type { User } from './user'
// local types
import type { ProductMovementItem } from './product-movement/item'
import type { ProductMovementAdditionalCost } from './product-movement/additional-cost'
import type { ProductMovementPurchaseAdditionalInfo } from './product-movement/purchase-additional-info'
import type { ProductMovementSaleAdditionalInfo } from './product-movement/sale-additional-info'

/**
 * Interface representing the base structure for product movement.
 */
interface BaseProductMovement {
  /**
   * Unique identifier for the product movement.
   * @readonly
   */
  uuid: Readonly<UUID>

  /**
   * The date and time when the product movement occurred.
   */
  at: ISODate

  /**
   * User who initiated the product movement.
   * @readonly
   */
  by_user_state: Readonly<User>

  /**
   * Optional note associated with the product movement.
   */
  note?: string

  /**
   * Optional reference identifier for the product movement.
   */
  ref?: string

  /**
   * List of items involved in the product movement.
   */
  items: ProductMovementItem[]

  /**
   * Additional costs associated with the product movement.
   */
  additional_costs: ProductMovementAdditionalCost[]

  /**
   * List of files associated with the product movement.
   */
  files: File[]

  /**
   * The date and time when the product movement was created.
   * @readonly
   */
  created_at: Readonly<ISODate>

  /**
   * The date and time when the product movement was last updated.
   */
  updated_at: ISODate

  /**
   * User who deleted the product movement.
   */
  deleted_by_user_state?: User

  /**
   * The date and time when the product movement was deleted.
   */
  deleted_at?: ISODate
}

/**
 * Additional information for a product movement purchase.
 */

interface WithPurchaseAdditionalInfoProps {
  /**
   * Type of the product movement.
   */
  type: 'purchase'

  /**
   * Additional information for the product movement.
   */
  additional_info: ProductMovementPurchaseAdditionalInfo
}

/**
 * Additional information for a product movement sale.
 */
interface WithSaleAdditionalInfoProps {
  /**
   * Type of the product movement.
   */
  type: 'sale'

  /**
   * Additional information for the product movement.
   */
  additional_info: ProductMovementSaleAdditionalInfo
}

/**
 * Interface representing a product movement.
 */
export type ProductMovement = BaseProductMovement &
  (WithPurchaseAdditionalInfoProps | WithSaleAdditionalInfoProps)
