'use client'

import PageUrlEnum from '@/enums/page-url'
import { Button } from '@heroui/button'
import { MoveRightIcon } from 'lucide-react'
import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <div>(Halaman akhir dari proses onboarding)</div>

      <div>Sensasi POS siap digunakan!</div>

      <Button
        variant="flat"
        endContent={<MoveRightIcon />}
        href={PageUrlEnum.DASHBOARD}
        as={Link}>
        Lihat Dasbor
      </Button>
    </div>
  )
}
