'use client'

import { UserForm } from '../_components/form'
import { useHook } from './hook'

export default function Page() {
  return (
    <div>
      <div>Tambah Data Pengguna</div>

      <UserForm {...useHook()} />
    </div>
  )
}
