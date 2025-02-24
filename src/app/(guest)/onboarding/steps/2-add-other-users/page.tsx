'use client'

import PageUrlEnum from '@/enums/page-url'
import { Button } from '@nextui-org/button'
import { MoveRightIcon } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()
  return (
    <div>
      <div>(Halaman untuk mendaftarkan pengguna lain)</div>

      <Button variant="light" onClick={() => router.back()}>
        Kembali
      </Button>

      <Button
        variant="flat"
        endContent={<MoveRightIcon />}
        href={PageUrlEnum.ONBOARDING_STEP_3}
        as={Link}>
        Selanjunya
      </Button>
    </div>
  )
}
