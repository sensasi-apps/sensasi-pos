'use client'

import PageUrlEnum from '@/enums/page-url'
import useAuth from '@/hooks/use-auth'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'

export default function RedirectIfUnauthenticated() {
  const { user } = useAuth()

  useEffect(() => {
    if (!user) {
      redirect(PageUrlEnum.LOGIN)
    }
  }, [user])

  return null
}
