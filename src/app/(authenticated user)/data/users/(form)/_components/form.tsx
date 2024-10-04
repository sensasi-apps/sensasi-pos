'use client'

import { Button, Checkbox, CheckboxGroup, Input } from '@nextui-org/react'
import { Controller } from 'react-hook-form'
import { Role } from '@/enums/role'
import { PERMISSION_TEMPLATES } from '@/data/permission-templates'
import { useHook as useCreateHook } from '../create/hook'
import { useHook as useUpdateHook } from '../[uuid]/hook'

export function UserForm({
  formContextValue: { control, watch, setValue },
  userEmails,
  handleCancel,
  handleSubmit,
}: ReturnType<typeof useCreateHook> & ReturnType<typeof useUpdateHook>) {
  return (
    <form
      autoComplete="off"
      onSubmit={() => {
        handleSubmit().catch(error => {
          throw error
        })
      }}
      className="mx-auto flex max-w-lg flex-col gap-3">
      <Controller
        control={control}
        name="name"
        rules={{ required: 'Nama harus diisi' }}
        render={({ field: { value, ...rest }, fieldState: { error } }) => (
          <Input
            isRequired
            label="Nama"
            {...rest}
            value={value ?? ''}
            isInvalid={!!error}
            errorMessage={error?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="email"
        rules={{
          required: 'Surel harus diisi',
          validate: value => {
            if (!value) return 'Surel harus diisi'

            if (!new RegExp(/^.+@.+\..+$/).test(value))
              return 'Surel tidak valid'

            if (userEmails.includes(value)) return 'Surel sudah digunakan'

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
          />
        )}
      />

      <Controller
        control={control}
        name="roles"
        render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
          <CheckboxGroup
            label="Peran"
            orientation="horizontal"
            {...rest}
            onValueChange={roles => {
              const typedRoles = roles as Role[]

              const permissions = typedRoles.flatMap(
                role => PERMISSION_TEMPLATES[role],
              )

              const uniquePermissions = Array.from(new Set(permissions))

              setValue('permissions', uniquePermissions)
              onChange(roles)
            }}
            isInvalid={!!error}
            errorMessage={error?.message}>
            {
              /**
               * @todo Terjemahkan role ke dalam bahasa Indonesia
               */
              Object.values(Role).map(role => (
                <Checkbox key={role} value={role}>
                  {role}
                </Checkbox>
              ))
            }
          </CheckboxGroup>
        )}
      />

      {!watch('uuid') && (
        <>
          <Controller
            control={control}
            name="pin__hashed"
            rules={{
              required: 'PIN harus diisi',
              validate: value => value.length === 6 || 'PIN harus 6 digit',
            }}
            render={({ field: { value, ...rest }, fieldState: { error } }) => (
              <Input
                isRequired
                label="PIN"
                placeholder="6 digit"
                type="password"
                {...rest}
                value={value ?? ''}
                isInvalid={!!error}
                errorMessage={error?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="pin__hashed_confirmation"
            rules={{
              required: 'PIN harus diisi',
              minLength: 6,
              maxLength: 6,
              validate: value =>
                value === watch('pin__hashed') || 'PIN Tidak Sama',
            }}
            render={({ field: { value, ...rest }, fieldState: { error } }) => (
              <Input
                isRequired
                label="Konformasi PIN"
                placeholder="6 digit"
                type="password"
                {...rest}
                value={value ?? ''}
                isInvalid={!!error}
                errorMessage={error?.message}
              />
            )}
          />
        </>
      )}

      <Button onClick={handleCancel} variant="light" color="primary">
        Batal
      </Button>

      <Button type="submit" variant="solid" color="primary">
        Simpan
      </Button>
    </form>
  )
}
