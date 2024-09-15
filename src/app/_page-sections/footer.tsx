import { Link } from '@nextui-org/react'
import { ArrowUpRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
      <p>
        Sensasi POS adalah aplikasi Point of Sale sederhana yang dirancang untuk
        membantu pencatatan penjualan barang pada Warung / Toko / UMKM / Stan /
        Gerai / Swalayan.
      </p>

      <div>
        <p>
          Sensasi POS bersifat <i>open-source</i> dan dapat dikembangkan oleh
          siapa saja termasuk Anda. Jika Anda tertarik, Silakan lihat{' '}
          <Link
            size="sm"
            href="https://github.com/sensasi-apps/sensasi-pos/CONTRIBUTING.md"
            target="_blank">
            tata cara kontribusi <ArrowUpRight className="max-w-[1rem]" />
          </Link>{' '}
          pada{' '}
          <Link
            size="sm"
            href="https://github.com/sensasi-apps/sensasi-pos"
            target="_blank">
            halaman GitHub kami <ArrowUpRight className="max-w-[1rem]" />
          </Link>
          .
        </p>

        <p className="text-xs mt-4 text-gray-500">
          Panjang umur untuk semua pengembang <i>open-source</i> di seluruh
          dunia 🌍
        </p>
      </div>

      <p>
        Masih memiliki pertanyaan? silahkan mengirimkannya melalui surel ke:
        <Link size="sm" href="mailto:sensasi.apps@gmail.com" target="_blank">
          sensasi.apps@gmail.com <ArrowUpRight className="max-w-[1rem]" />
        </Link>
      </p>
    </footer>
  )
}
