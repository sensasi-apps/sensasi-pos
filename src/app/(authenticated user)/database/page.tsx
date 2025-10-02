import PageUrlEnum from '@/enums/page-url'
import { Button } from '@heroui/button'
import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <div>(Halaman Manajemen Basis Data)</div>

      <Button href={PageUrlEnum.EXPORT_DATABASE} as={Link} color="primary">
        Ekspor basis data
      </Button>

      <Button href={PageUrlEnum.SYNC_DATABASE} as={Link} color="primary">
        Sinkronisasi basis data
      </Button>

      <Button href={PageUrlEnum.WIPE_DATABASE} as={Link} color="primary">
        Hapus basis data
      </Button>
    </div>
  )
}
