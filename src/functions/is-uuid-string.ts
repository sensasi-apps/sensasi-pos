import { validate } from 'uuid'

/**
 * Checks if the provided string is a valid UUID.
 */
export function isUuidString(string: string): boolean {
  return validate(string)
}
