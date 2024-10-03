import PageUrlEnum from '@/enums/page-url'
import { Button } from '@nextui-org/react'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="mx-auto mt-10 w-full max-w-md rounded-lg p-8 shadow-lg">
      <h1 className="mb-6 text-center text-2xl font-bold">
        Selamat Datang di Sensasi POS
      </h1>
      <p className="mb-4 text-center">Pilih cara memulai aplikasi:</p>

      <div className="flex flex-col justify-center gap-4">
        <Button size="lg" variant="solid">
          Gunakan Data Demo
        </Button>

        <Button
          size="lg"
          variant="solid"
          href={PageUrlEnum.ONBOARDING_IMPORT_BACKUP}
          as={Link}>
          Impor Data Hasil Pencadangan
        </Button>

        <Button
          size="lg"
          variant="solid"
          href={PageUrlEnum.ONBOARDING_STEP_1}
          as={Link}>
          Mulai Ulang Dari Awal
        </Button>
      </div>

      <p className="mt-6 text-center text-sm">
        Anda dapat menjelajahi aplikasi dengan data demo atau menggunakan data
        nyata untuk pengaturan lebih lanjut.
      </p>
    </div>
  )
}
