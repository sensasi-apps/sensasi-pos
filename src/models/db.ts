import Dexie, { type EntityTable } from 'dexie'
import type { Product } from './table-types/product'
import type { Warehouse } from './table-types/warehouse'
import type { ProductMovement } from './table-types/product-movement'

interface Tables {
  warehouses: EntityTable<Warehouse, 'uuid'>
  products: EntityTable<Product, 'uuid'>
  productMovements: EntityTable<ProductMovement, 'uuid'>
}

const db = new Dexie('sensasi-pos-db') as Dexie & Tables

/**
 * @see https://dexie.org/docs/Version/Version.stores()
 */
db.version(1).stores({
  warehouses: '&uuid, &name, note, created_at',
  products:
    '&uuid, &code, &barcode_reg_id, &name, description, category, created_at',
  productMovements:
    '&uuid, at, type, note, warehouse_state.uuid, item.product_state.uuid, created_at',
})

export default db
