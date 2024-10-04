import { genSaltSync, hashSync } from 'bcryptjs'

/**
 * Generates a hash for the given string using bcrypt.
 *
 * @param string - The string to be hashed.
 * @returns string - The hashed string.
 */
export function getHash(string: string) {
  return hashSync(string, genSaltSync(10))
}
