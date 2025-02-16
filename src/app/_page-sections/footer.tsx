import { Link } from '@nextui-org/link'
import { ArrowUpRightIcon, ComputerIcon } from 'lucide-react'
import packageJson from '@/../package.json'

export function Footer() {
  return (
    <footer className="container mt-10 text-balance border-t py-10 text-sm text-gray-400 dark:border-zinc-800">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <p>
          Sensasi POS adalah aplikasi Point of Sale sederhana yang dirancang
          untuk membantu pencatatan penjualan barang pada Warung / Toko / UMKM /
          Stan / Gerai / Swalayan.
        </p>

        <div>
          <p>
            Sensasi POS bersifat <i>open-source</i> dan dapat dikembangkan oleh
            siapa saja termasuk Anda. Jika Anda tertarik, Silakan lihat{' '}
            <Link
              className="text-sm"
              href="https://github.com/sensasi-apps/sensasi-pos/blob/main/CONTRIBUTING.md"
              target="_blank">
              tata cara kontribusi <ArrowUpRightIcon className="max-w-[1rem]" />
            </Link>{' '}
            pada{' '}
            <Link
              className="text-sm"
              href="https://github.com/sensasi-apps/sensasi-pos"
              target="_blank">
              halaman GitHub kami <ArrowUpRightIcon className="max-w-[1rem]" />
            </Link>
            .
          </p>
        </div>

        <p>
          Masih memiliki pertanyaan? silahkan mengirimkannya melalui surel ke:{' '}
          <Link
            className="text-sm"
            href="mailto:sensasi.apps@gmail.com"
            target="_blank">
            sensasi.apps@gmail.com <ArrowUpRightIcon className="max-w-[1rem]" />
          </Link>
        </p>
      </div>

      <div className="mt-20 flex flex-row text-xs text-gray-500 max-lg:text-center max-md:flex-col md:items-center md:gap-3">
        <div className="flex items-center justify-center gap-1 leading-4 max-md:items-end">
          <ComputerIcon className="max-h-full text-primary" /> Sensasi POS v
          {packageJson.version} ({packageJson.versionDate})
        </div>

        <div className="max-md:hidden">•</div>

        <div>
          Dibuat dengan ❤️ oleh{' '}
          <Link
            className="text-xs"
            href="https://github.com/sensasi-apps"
            target="_blank">
            Sensasi Apps🍕
            <ArrowUpRightIcon className="max-w-[1rem]" />
          </Link>
        </div>

        <div className="max-md:hidden">•</div>

        <div className="max-md:mt-4">
          Panjang umur untuk semua pengembang <i>open-source</i> di seluruh
          dunia 🌍
        </div>
      </div>
    </footer>
  )
}
