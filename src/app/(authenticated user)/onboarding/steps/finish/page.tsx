'use client'

import PageUrlEnum from '@/enums/page-url'
import { Button } from '@heroui/button'
import { Link } from '@heroui/link'
import { MoveRightIcon } from 'lucide-react'

export default function Page() {
  return (
    <div>
      <div>(Halaman akhir dari proses onboarding)</div>

      <div>Sensasi POS siap digunakan!</div>

      <Button
        variant="flat"
        endContent={<MoveRightIcon />}
        as={Link}
        href={PageUrlEnum.DASHBOARD}>
        Lihat Dasbor
      </Button>
    </div>
  )
}
