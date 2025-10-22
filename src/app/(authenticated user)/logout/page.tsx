'use client'

import useAuth from '@/hooks/use-auth'
import { Spinner } from '@heroui/spinner'
import { useEffectEvent } from 'react'

export default function Page() {
  const { setLoggedInUser } = useAuth()

  useEffectEvent(() => {
    setLoggedInUser(undefined)
  })

  return <Spinner size="lg" />
}
