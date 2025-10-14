import type { ProductMovement } from '@/models/table-types/product-movement'
import db from '@/models/db'

export function updateStocksOnReceived(productMovement: ProductMovement) {
  productMovement.items.forEach(item => {
    db.products
      .update(item.product_state.uuid, product => {
        const inQty = item.qty
        const inWorth = item.qty * item.price

        const existsStock = product.stock

        const existsQty = existsStock?.qty ?? 0
        const existsWorth = existsStock?.cost ?? 0

        const newQty = existsQty + inQty
        const newWorth = existsWorth + inWorth
        const newCost = newWorth / newQty

        existsStock.qty = newQty
        existsStock.cost = newCost
      })
      .catch(error => {
        throw error
      })
  })
}
