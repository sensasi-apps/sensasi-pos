import Dexie, { type EntityTable } from 'dexie'
import type { Product } from './table-types/product'
import type { Warehouse } from './table-types/warehouse'
import type { ProductMovement } from './table-types/product-movement'

interface Tables {
  warehouses: EntityTable<Warehouse, 'id'>
  products: EntityTable<Product, 'id'>
  productMovements: EntityTable<ProductMovement, 'uuid'>
}

const db = new Dexie('sensasi-pos-db') as Dexie & Tables

/**
 * @see https://dexie.org/docs/Version/Version.stores()
 */
db.version(1).stores({
  warehouses: '++id, &name, note',
  products: '++id, &code, &barcode_reg_id, &name, description, category',
  productMovements:
    '&uuid, at, type, note, warehouse_state, details.product_state',
})

export default db
