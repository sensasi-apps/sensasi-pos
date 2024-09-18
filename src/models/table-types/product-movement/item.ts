import type { Product } from '../product'

/**
 * Definition for the `ProductMovement.items[]` property.
 */
export interface ProductMovementItem {
  /**
   * Product state at the time of the movement.
   */
  product_state: Readonly<Product>

  /**
   * Quantity of the product.
   */
  qty: number

  /**
   * Price of the product at the time of the movement. Wether it's a purchase or a sale.
   */
  price: number
}
