'use client'

import PageUrlEnum from '@/enums/page-url'
import useAuth from '@/hooks/use-auth'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense, useEffect } from 'react'

function RedirectIfAuthenticatedContent() {
  const { user } = useAuth()
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    if (user) {
      const redirectUrl = searchParams.get('redirect')
      // Redirect to the provided redirect URL if it exists, otherwise to dashboard
      if (redirectUrl) {
        router.push(redirectUrl)
      } else {
        router.push(PageUrlEnum.DASHBOARD)
      }
    }
  }, [user, searchParams, router])

  return null
}

export default function RedirectIfAuthenticated() {
  return (
    <Suspense fallback={null}>
      <RedirectIfAuthenticatedContent />
    </Suspense>
  )
}
