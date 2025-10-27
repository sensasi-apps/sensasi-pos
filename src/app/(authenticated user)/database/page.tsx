import PageUrlEnum from '@/enums/page-url'
import { Button } from '@heroui/button'
import { Link } from '@heroui/link'

export default function Page() {
  return (
    <div>
      <div>(Halaman Manajemen Basis Data)</div>

      <Button as={Link} href={PageUrlEnum.EXPORT_DATABASE} color="primary">
        Ekspor basis data
      </Button>

      <Button as={Link} href={PageUrlEnum.SYNC_DATABASE} color="primary">
        Sinkronisasi basis data
      </Button>

      <Button as={Link} href={PageUrlEnum.WIPE_DATABASE} color="primary">
        Hapus basis data
      </Button>
    </div>
  )
}
