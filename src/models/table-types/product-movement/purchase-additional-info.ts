import { ISODate } from '@/@types/iso-date'

/**
 * Interface representing additional information for product movement purchases.
 */
export interface ProductMovementPurchaseAdditionalInfo {
  /**
   * The date and time when the purchase was received.
   */
  received_at?: ISODate

  /**
   * The date and time when the purchase was paid.
   */
  paid_at?: ISODate

  /**
   * The date and time when the purchase payment is due.
   */
  due_at?: ISODate
}
