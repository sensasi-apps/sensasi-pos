// types
import type { FormValues } from '../_types/form-values'
// vendors
import { useForm } from 'react-hook-form'
import { useLiveQuery } from 'dexie-react-hooks'
import { useRouter } from 'next/navigation'
// functions
import { generateOrderedUuid } from '@/functions/generate-ordered-uuid'
import { getValidatedFormValues } from '../_functions/get-validated-form-values'
import { toast } from '@/functions/toast'
// db
import db from '@/models/db'

export function useHook() {
  const router = useRouter()

  const formContextValue = useForm<FormValues>()

  return {
    formContextValue,

    userEmails:
      useLiveQuery(() => db.users.toArray())?.map(user => user.email) ?? [],

    handleCancel: () => {
      router.back()
    },

    handleSubmit: formContextValue.handleSubmit(formValues => {
      formValues.uuid = generateOrderedUuid()
      formValues.created_at = new Date().toISOString()
      formValues.updated_at = new Date().toISOString()

      const newUser = getValidatedFormValues(formValues)

      db.users
        .add(newUser)
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
