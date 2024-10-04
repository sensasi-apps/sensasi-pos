'use client'

import { UserForm } from '../_components/form'
import { useHook } from './hook'

export default function Page({
  params: { uuid },
}: {
  params: { uuid: string }
}) {
  const hook = useHook(uuid)

  return (
    <div>
      <div>(Halaman Ubah Data Pengguna) {uuid}</div>

      <UserForm {...hook} />
    </div>
  )
}
