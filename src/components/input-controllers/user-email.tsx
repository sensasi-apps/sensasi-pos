import db from '@/models/db'
import { Input, type InputProps } from '@heroui/input'
import { useLiveQuery } from 'dexie-react-hooks'
import { Controller, type FieldValues, useFormContext } from 'react-hook-form'

export default function UserEmail({
  notEqual,
  slotProps,
}: {
  notEqual?: string
  slotProps?: { input?: InputProps }
}) {
  const { control } = useFormContext<FieldValues>()

  const emailExists =
    useLiveQuery(() => {
      const query = db.users

      if (notEqual) {
        query.where('email').notEqual(notEqual)
      }

      return db.users.toArray()
    })?.map(user => user.email) ?? []

  return (
    <Controller
      control={control}
      name="email"
      rules={{
        required: 'Surel harus diisi',
        validate: value => {
          if (!value) return 'Surel harus diisi'

          if (!new RegExp(/^.+@.+\..+$/).test(value)) return 'Surel tidak valid'

          if (emailExists.includes(value)) return 'Surel sudah digunakan'

          return true
        },
      }}
      render={({ field: { value, ...rest }, fieldState: { error } }) => (
        <Input
          isRequired
          label="Surel"
          type="email"
          {...rest}
          value={value ?? ''}
          isInvalid={!!error}
          errorMessage={error?.message}
          autoComplete="email"
          {...slotProps?.input}
        />
      )}
    />
  )
}
