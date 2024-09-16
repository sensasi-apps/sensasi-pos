import { Link } from '@nextui-org/react'
import { ArrowUpRightIcon, ComputerIcon } from 'lucide-react'
import packageJson from '@/../package.json'

export function Footer() {
  return (
    <footer className="p-10 bg-gray-800 text-gray-400 text-sm text-balance">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      <div className="text-xs mt-20 text-gray-500 flex flex-row max-md:flex-col md:gap-3 md:items-center max-lg:text-center">
        <div className="flex items-center max-md:items-end gap-1 justify-center leading-4">
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
