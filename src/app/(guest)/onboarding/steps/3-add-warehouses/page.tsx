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
      <div>(Halaman untuk memasukkan data gudang)</div>

      <div>
        Pada Sensasi POS, &quot;Gudang&quot; adalah lokasi fisik atau tempat di
        mana Anda menyimpan produk. Jika Anda memiliki beberapa lokasi
        penyimpanan yang terpisah, Anda dapat mendaftarkan setiap lokasi
        tersebut sebagai gudang di sini.
      </div>

      <Button variant="light" onClick={() => router.back()}>
        Kembali
      </Button>

      <Button
        variant="flat"
        endContent={<MoveRightIcon />}
        href={PageUrlEnum.ONBOARDING_STEP_4}
        as={Link}>
        Selanjunya
      </Button>
    </div>
  )
}
