import Dexie, { type EntityTable } from 'dexie'
import type Product from './table-types/product'

interface Tables {
  products: EntityTable<Product, 'id'>
}

const db = new Dexie('sensasi-pos-db') as Dexie & Tables

/**
 * @see https://dexie.org/docs/Version/Version.stores()
 */
db.version(1).stores({
  products:
    '++id, &code, &barcode_reg_id, &name, description, category, created_at, updated_at, deleted_at',
})

export default db
