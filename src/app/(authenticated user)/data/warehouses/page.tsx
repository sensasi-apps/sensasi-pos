// vendors
import { Button } from '@heroui/button'
//
import PageUrlEnum from '@/enums/page-url'
import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <div>(Halaman Awal Manajemen Data Gudang)</div>

      <Button href={PageUrlEnum.WAREHOUSE_CREATE} as={Link} color="primary">
        Tambah data gudang
      </Button>
    </div>
  )
}
