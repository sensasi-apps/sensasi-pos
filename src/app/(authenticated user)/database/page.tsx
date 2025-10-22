import PageUrlEnum from '@/enums/page-url'
import { Button } from '@heroui/button'

export default function Page() {
  return (
    <div>
      <div>(Halaman Manajemen Basis Data)</div>

      <Button href={PageUrlEnum.EXPORT_DATABASE} color="primary">
        Ekspor basis data
      </Button>

      <Button href={PageUrlEnum.SYNC_DATABASE} color="primary">
        Sinkronisasi basis data
      </Button>

      <Button href={PageUrlEnum.WIPE_DATABASE} color="primary">
        Hapus basis data
      </Button>
    </div>
  )
}
