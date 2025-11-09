'use client'

import PageUrlEnum from '@/enums/page-url'
import { Button } from '@heroui/button'
import { Link } from '@heroui/link'
import useIsAppAlreadyInitialized from '@/hooks/use-is-app-already-initialized'

export function Cta() {
  const appIsAlreadyInitialized = useIsAppAlreadyInitialized()

  return (
    <section className="container">
      <div className="grid place-items-center rounded-2xl bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 p-10">
        <h2 className="mb-8 text-3xl font-bold text-white">
          Mulai Mengelola Usaha Anda Sekarang
        </h2>

        <Button
          className="h-16 rounded-full px-10 text-xl"
          as={Link}
          href={
            appIsAlreadyInitialized ? PageUrlEnum.LOGIN : PageUrlEnum.ONBOARDING
          }>
          {appIsAlreadyInitialized ? 'Login' : 'Coba Sekarang'}
        </Button>
      </div>
    </section>
  )
}
