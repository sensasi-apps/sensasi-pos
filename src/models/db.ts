import Dexie, { type EntityTable } from 'dexie'
import type { Product } from './table-types/product'
import type { ProductMovement } from './table-types/product-movement'
import type { User } from './table-types/user'
import type { Warehouse } from './table-types/warehouse'

interface Tables {
  products: EntityTable<Product, 'uuid'>
  productMovements: EntityTable<ProductMovement, 'uuid'>
  users: EntityTable<User, 'uuid'>
  warehouses: EntityTable<Warehouse, 'uuid'>
}

const db = new Dexie('sensasi-pos-db') as Dexie & Tables

/**
 * @see https://dexie.org/docs/Version/Version.stores()
 */
db.version(1).stores({
  users: '&uuid, &email, name, created_at',
  warehouses: '&uuid, &name, note, created_at',
  products:
    '&uuid, &code, &barcode_reg_id, &name, description, category, created_at',
  productMovements:
    '&uuid, at, type, note, warehouse_state.uuid, item.product_state.uuid, created_at',
})

export default db
