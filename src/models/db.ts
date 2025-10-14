import Dexie, { type EntityTable } from 'dexie'
import type { Product } from './table-types/product'
import type { ProductMovement } from './table-types/product-movement'
import type { User } from './table-types/user'

interface Tables {
  products: EntityTable<Product, 'uuid'>
  productMovements: EntityTable<ProductMovement, 'uuid'>
  users: EntityTable<User, 'uuid'>
}

const db = new Dexie('sensasi-pos-db') as Dexie & Tables

/**
 * @see https://dexie.org/docs/Version/Version.stores()
 */
db.version(1).stores({
  users: '&uuid, &email, name, *roles, created_at',
  products:
    '&uuid, &code, &barcode_reg_id, &name, description, category, created_at',
  productMovements:
    '&uuid, at, type, note, item.product_state.uuid, created_at',
})

export default db
