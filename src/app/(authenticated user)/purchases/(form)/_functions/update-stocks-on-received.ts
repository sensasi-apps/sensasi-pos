import db from '@/models/db'
import { ProductMovement } from '@/models/table-types/product-movement'

export function updateStocksOnReceived(productMovement: ProductMovement) {
  productMovement.items.forEach(item => {
    db.products
      .update(item.product_state.id, product => {
        const inQty = item.qty
        const inWorth = item.qty * item.price

        const existsStock = product.stocks.find(
          stock => stock.warehouse_id === productMovement.warehouse_state.id,
        )

        const existsQty = existsStock?.qty ?? 0
        const existsWorth = existsStock?.cost ?? 0

        const newQty = existsQty + inQty
        const newWorth = existsWorth + inWorth
        const newCost = newWorth / newQty

        if (existsStock) {
          existsStock.qty = newQty
          existsStock.cost = newCost
        } else {
          product.stocks.push({
            warehouse_id: productMovement.warehouse_state.id,
            qty: newQty,
            cost: newCost,
          })
        }
      })
      .catch(error => {
        throw error
      })
  })
}
