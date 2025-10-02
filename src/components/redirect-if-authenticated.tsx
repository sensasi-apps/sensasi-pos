'use client'

import PageUrlEnum from '@/enums/page-url'
import useAuth from '@/hooks/use-auth'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'

export default function RedirectIfAuthenticated() {
  const { user } = useAuth()

  useEffect(() => {
    if (user) {
      redirect(PageUrlEnum.DASHBOARD)
    }
  }, [user])

  return null
}
