'use client'

// local
import type { User } from '@/models/table-types/user'
import { Permission } from '@/enums/permission'
import { useLocalStorage } from 'usehooks-ts'

export default function useAuth() {
  const [loggedInUser, setLoggedInUser, removeLoggedInUser] = useLocalStorage<
    User | undefined
  >('logged-in-user', undefined)

  return {
    user: loggedInUser,
    setLoggedInUser: (user: User | undefined) =>
      user ? setLoggedInUser(user) : removeLoggedInUser(),

    /**
     * Checks if the user has any of the given permissions
     */
    hasAnyPermissions: (permissions: Permission[]): boolean => {
      if (!loggedInUser) {
        return false
      }

      return hasAnyPermissions(permissions, loggedInUser)
    },
  }
}

/**
 * Check if the user has any of the provided permissions
 */
function hasAnyPermissions(permissions: Permission[], user: User): boolean {
  return permissions.some(permission => user.permissions.includes(permission))
}
