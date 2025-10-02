'use client'

// local
import type { User } from '@/models/table-types/user'
import { Permission } from '@/enums/permission'
import { useLocalStorage } from '@uidotdev/usehooks'

export default function useAuth() {
  const [loggedInUser, setLoggedInUser] =
    useLocalStorage<User>('logged-in-user')

  return {
    user: loggedInUser,
    setLoggedInUser,

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
