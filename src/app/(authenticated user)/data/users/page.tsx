import PageUrlEnum from '@/enums/page-url'
import { Button } from '@nextui-org/react'
import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <div>(Halaman Daftar Pengguna)</div>

      <Button href={PageUrlEnum.USER_CREATE} as={Link} color="primary">
        Tambah data gudang
      </Button>
    </div>
  )
}
