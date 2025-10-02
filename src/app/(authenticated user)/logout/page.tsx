'use client'

import useAuth from '@/hooks/use-auth'
import { Spinner } from '@heroui/spinner'

export default function Page() {
  const { setLoggedInUser } = useAuth()

  setLoggedInUser(undefined)

  return <Spinner size="lg" />
}
