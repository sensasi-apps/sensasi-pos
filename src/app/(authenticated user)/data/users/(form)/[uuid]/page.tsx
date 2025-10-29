'use client'

import type { UUID } from 'node:crypto'
import { UserForm } from '../_components/form'
import { useHook } from './hook'
import { use } from 'react'

export default function Page({ params }: { params: Promise<{ uuid: UUID }> }) {
  const { uuid } = use(params)
  const hook = useHook(uuid)

  return (
    <div>
      <div>(Halaman Ubah Data Pengguna) {uuid}</div>

      <UserForm {...hook} />
    </div>
  )
}
