'use client'

import PageUrlEnum from '@/enums/page-url'
import useAuth from '@/hooks/use-auth'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function RedirectIfUnauthenticated() {
  const { user } = useAuth()
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      const redirectUrl = `${PageUrlEnum.LOGIN}?redirect=${encodeURIComponent(pathname)}`
      router.push(redirectUrl)
    }
  }, [user, pathname, router])

  return null
}
