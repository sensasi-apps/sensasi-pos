'use client'

import type { User } from '@/models/table-types/user'
import db from '@/models/db'
import { useLiveQuery } from 'dexie-react-hooks'

export function useHook() {
  return {
    users: useLiveQuery(() => db.users.toArray()),

    setUserActiveStatus: async (userUuid: User['uuid'], isActive: boolean) => {
      await db.users.update(userUuid, {
        /**
         * @todo Implement inactivated_by_user_state
         */
        // inactivated_by_user_state: getAuthUser(),

        inactivated_at: isActive ? null : new Date().toISOString(),
      })
    },
  }
}
