'use client'

// vendors
import { Button } from '@nextui-org/button'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
// icons
import { MoveRightIcon } from 'lucide-react'
//
import PageUrlEnum from '@/enums/page-url'

export default function Page() {
  const router = useRouter()

  return (
    <div>
      <div>(Halaman untuk mendaftarkan admin (manajer))</div>

      <Button variant="light" onClick={() => router.back()}>
        Kembali
      </Button>

      <Button
        variant="flat"
        endContent={<MoveRightIcon />}
        href={PageUrlEnum.ONBOARDING_STEP_2}
        as={Link}>
        Selanjunya
      </Button>
    </div>
  )
}
