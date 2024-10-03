'use client'

import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()

  return (
    <div>
      <div>(Halaman impor basis data)</div>

      <ul>
        <li>
          Unggah file hasil pencadangan basis data yang telah Anda buat
          sebelumnya
        </li>

        <li>Pindai kode QR dari perangkat lain</li>
      </ul>

      <Button variant="light" onClick={() => router.back()}>
        Kembali
      </Button>
    </div>
  )
}
