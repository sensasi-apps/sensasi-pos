import db from '@/models/db'
import { toast } from '@/functions/toast'
import { User } from '@/models/table-types/user'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { useLiveQuery } from 'dexie-react-hooks'

export function useHook(userUuid: string) {
  const router = useRouter()

  const formContextValue = useForm<
    User & {
      pin__hashed_confirmation?: string
    }
  >()

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
      delete formValues.pin__hashed_confirmation

      db.users
        .update(formValues.uuid, {
          name: formValues.name,
          email: formValues.email,
          roles: formValues.roles,
          updated_at: new Date().toISOString(),
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
