import db from '@/models/db'
import { toast } from '@/functions/toast'
import { User } from '@/models/table-types/user'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { useLiveQuery } from 'dexie-react-hooks'
import { generateOrderedUuid } from '@/functions/generate-ordered-uuid'
import { getHash } from '@/functions/get-hash'

export function useHook() {
  const router = useRouter()

  const formContextValue = useForm<
    User & {
      pin__hashed_confirmation?: string
    }
  >()

  return {
    formContextValue,

    userEmails:
      useLiveQuery(() => db.users.toArray())?.map(user => user.email) ?? [],

    handleCancel: () => {
      router.back()
    },

    handleSubmit: formContextValue.handleSubmit(formValues => {
      delete formValues.pin__hashed_confirmation

      db.users
        .add({
          ...formValues,
          uuid: generateOrderedUuid(),
          pin__hashed: getHash(formValues.pin__hashed),
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        })
        .then(() => {
          toast('Data pengguna berhasil disimpan')
          router.back()
        })
        .catch(() => {
          toast('Data pengguna gagal disimpan')
        })
    }),
  }
}
