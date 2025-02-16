// vendors
import { Link } from '@nextui-org/link'
import NextLink from 'next/link'
//
import PageUrlEnum from '@/enums/page-url'

export default function page() {
  return (
    <div>
      <div>(Halaman Daftar Laporan)</div>

      <ul>
        <li>
          <Link href={PageUrlEnum.REPORT_SALE_PER_PRODUCT} as={NextLink}>
            Penjualan per produk
          </Link>
        </li>

        <li>
          <Link
            href={PageUrlEnum.REPORT_SALE_PER_PRODUCT_CATEGORY}
            as={NextLink}>
            Penjualan per kategori produk
          </Link>
        </li>

        <li>
          <Link href={PageUrlEnum.REPORT_SALE_PER_TX} as={NextLink}>
            Penjualan per transaksi
          </Link>
        </li>

        <li>
          <Link
            href={PageUrlEnum.REPORT_STOCK_IN_OUT_PER_PRODUCT}
            as={NextLink}>
            Stok masuk/keluar per produk
          </Link>
        </li>
      </ul>
    </div>
  )
}
