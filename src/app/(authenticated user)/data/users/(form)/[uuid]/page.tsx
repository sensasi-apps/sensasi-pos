'use client'

import { UUID } from 'crypto'
import { UserForm } from '../_components/form'
import { useHook } from './hook'
import { useParams } from 'next/navigation'

interface PageProps {
  params: {
    uuid: UUID
  }
}

export default function Page() {
  const { uuid } = useParams<PageProps['params']>()
  const hook = useHook(uuid)

  return (
    <div>
      <div>(Halaman Ubah Data Pengguna) {uuid}</div>

      <UserForm {...hook} />
    </div>
  )
}
