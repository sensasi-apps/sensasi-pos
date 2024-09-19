/**
 * Checks if the app has a logged in user
 */
export function hasLoggedInUser(): boolean {
  /**
   * @todo delete this when #85 is solved
   */
  return process.env.NODE_ENV !== 'production'

  // return !!localStorage.getItem('logged-in-user')
}
