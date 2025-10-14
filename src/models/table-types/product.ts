// vendors
import type { UUID } from 'crypto'
// globals
import type { File } from '@/@types/file'
import type { ISODate } from '@/@types/iso-date'

/**
 * Represents the product information.
 */
export interface Product {
  /**
   * Unique identifier for the product.
   */
  uuid: Readonly<UUID>

  /**
   * Unique identifier for the product.
   */
  code?: string

  /**
   * Barcode registration identifier for the product.
   */
  barcode_reg_id?: string

  /**
   * Name of the product.
   */
  name: string

  /**
   * Description of the product.
   */
  description?: string

  /**
   * Category of the product.
   */
  category?: string

  /**
   * Image file of the product.
   */
  image_file?: File['blob']

  /**
   * The date and time when the product was created.
   */
  created_at: Readonly<ISODate>

  /**
   * The date and time when the product was last updated.
   */
  updated_at: ISODate

  /**
   * The date and time when the product was deleted.
   */
  deleted_at?: ISODate

  /**
   * The unit of measurement for the product.
   * @example 'pcs', 'kg', 'm', 'l'
   */
  qty_unit: string

  /**
   * The default price/unit of the product.
   */
  default_price: number

  /**
   * The threshold quantity of the product.
   */
  low_qty_threshold?: number

  /**
   * The current stock of the product.
   */
  stock: ProductStock
}

/**
 * Represents the stock information for a product.
 */
interface ProductStock {
  /**
   * The quantity of the product available in the stock.
   */
  qty: number

  /**
   * The cost/unit of the product.
   */
  cost: number

  /**
   * The default price of the product.
   * @default Product.default_price
   */
  default_price?: number

  /**
   * The threshold quantity of the product.
   * @default Product.low_qty_threshold
   */
  low_qty_threshold?: number
}
