// types
import type { FormValues } from '../_types/form-values'
import type { UUID } from 'crypto'
// vendors
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useLiveQuery } from 'dexie-react-hooks'
import { useRouter } from 'next/navigation'
// functions
import { isUuidString } from '@/functions/is-uuid-string'
import { toast } from '@/functions/toast'
// db
import db from '@/models/db'
import { getValidatedFormValues } from '../_functions/get-validated-form-values'

export function useHook(userUuid: UUID) {
  const router = useRouter()

  const formContextValue = useForm<FormValues>()

  db.users
    .get(userUuid)
    .then(user => {
      formContextValue.reset({
        name: user?.name,
        email: user?.email,
        roles: user?.roles,
      })
    })
    .catch(() => {
      toast('Data pengguna tidak ditemukan', 'danger')
      router.back()
    })

  return {
    formContextValue,

    userEmails:
      useLiveQuery(() =>
        db.users.where('uuid').notEqual(userUuid).toArray(),
      )?.map(user => user.email) ?? [],

    handleCancel: () => {
      router.back()
    },

    handleSubmit: formContextValue.handleSubmit(formValues => {
      const updatedUser = getValidatedFormValues(formValues)

      db.users
        .update(userUuid, {
          ...updatedUser,
        })
        .then(() => {
          toast('Data pengguna berhasil disimpan')
          router.back()
        })
        .catch(() => {
          toast('Data pengguna gagal disimpan', 'danger')
        })
    }),
  }
}
