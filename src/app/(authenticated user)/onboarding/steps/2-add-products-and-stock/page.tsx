'use client'

import PageUrlEnum from '@/enums/page-url'
import { Button } from '@heroui/button'
import { MoveRightIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()
  return (
    <div>
      <div>(Halaman untuk memasukkan data produk serta stoknya)</div>

      <Button variant="light" onClick={() => router.back()}>
        Kembali
      </Button>

      <Button
        variant="flat"
        endContent={<MoveRightIcon />}
        href={PageUrlEnum.ONBOARDING_STEP_FINISH}>
        Selanjunya
      </Button>
    </div>
  )
}
