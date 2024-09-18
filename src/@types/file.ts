import type { Base64Blob } from './base-64-blob'
import type { ISODate } from './iso-date'

/**
 * Represents a file with its metadata.
 */
export interface File {
  /**
   * Name of the file.
   */
  name?: string

  /**
   * Base64 encoded blob of the file.
   */
  blob: Base64Blob

  /**
   * Description of the file.
   */
  description?: string

  /**
   * Date and time when the file was added.
   */
  created_at: Readonly<ISODate>
}
