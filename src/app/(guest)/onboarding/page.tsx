import { OnBoardCard } from '@/components/onboard-card'

export default function Page() {
  return (
    <div className="mx-auto mt-10 w-full max-w-2xl">
      <h1 className="mb-6 text-center text-2xl font-bold">
        Selamat Datang di Sensasi POS
      </h1>
      <p className="mb-4 text-center">Pilih cara memulai aplikasi:</p>

      <div className="mx-12 md:mx-0">
        <OnBoardCard />
      </div>

      <p className="mt-6 text-center text-sm">
        Anda dapat menjelajahi aplikasi dengan data demo atau menggunakan data
        nyata untuk pengaturan lebih lanjut.
      </p>
    </div>
  )
}
