import PageUrlEnum from '@/enums/page-url'
import { Button } from '@nextui-org/button'
import Link from 'next/link'

export function Cta() {
  // TODO: Buat fungsi untuk mengecek apakah aplikasi sudah diinisialisasi
  const appIsAlreadyInitialized = false

  return (
    <section className="container">
      <div className="grid place-items-center rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-10">
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
