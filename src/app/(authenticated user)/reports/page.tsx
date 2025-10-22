// vendors
import { Link } from '@heroui/link'
//
import PageUrlEnum from '@/enums/page-url'

export default function page() {
  return (
    <div>
      <div>(Halaman Daftar Laporan)</div>

      <ul>
        <li>
          <Link href={PageUrlEnum.REPORT_SALE_PER_PRODUCT}>
            Penjualan per produk
          </Link>
        </li>

        <li>
          <Link href={PageUrlEnum.REPORT_SALE_PER_PRODUCT_CATEGORY}>
            Penjualan per kategori produk
          </Link>
        </li>

        <li>
          <Link href={PageUrlEnum.REPORT_SALE_PER_TX}>
            Penjualan per transaksi
          </Link>
        </li>

        <li>
          <Link href={PageUrlEnum.REPORT_STOCK_IN_OUT_PER_PRODUCT}>
            Stok masuk/keluar per produk
          </Link>
        </li>
      </ul>
    </div>
  )
}
