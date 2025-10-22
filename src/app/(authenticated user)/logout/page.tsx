'use client'

import useAuth from '@/hooks/use-auth'
import { Spinner } from '@heroui/spinner'
import { useEffect, useEffectEvent } from 'react'

export default function Page() {
  const { setLoggedInUser } = useAuth()

  const loggingOut = useEffectEvent(() => {
    setLoggedInUser(undefined)
  })

  useEffect(() => {
    loggingOut()
  }, [])

  return <Spinner size="lg" />
}
