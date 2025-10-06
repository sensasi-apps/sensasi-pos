'use client'

// vendors
import { Button } from '@heroui/button'
import { useRouter } from 'next/navigation'
// icons
import { MoveLeftIcon, MoveRightIcon } from 'lucide-react'
//
import PageUrlEnum from '@/enums/page-url'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { Role } from '@/enums/role'
import TextInput from '@/components/input-controllers/text-input'
import UserEmail from '@/components/input-controllers/user-email'
import { generateOrderedUuid } from '@/functions/generate-ordered-uuid'
import db from '@/models/db'
import { User } from '@/models/table-types/user'
import { toast } from '@/functions/toast'
import { getHash } from '@/functions/get-hash'
import { PERMISSION_TEMPLATES } from '@/data/permission-templates'
import { useLiveQuery } from 'dexie-react-hooks'
import { Alert } from '@heroui/alert'
import Link from 'next/link'

interface FormValues {
  name: string
  email: string
  password: string
  password_confirmation: string
}

export default function ManagerUserForm() {
  const methods = useForm<FormValues>()
  const router = useRouter()

  const isManagerUserExists =
    useLiveQuery(() => db.users.where('roles').equals(Role.MANAGER).count()) ??
    0 > 0

  if (isManagerUserExists) {
    return <UserExistsAlert />
  }

  const { handleSubmit, watch, formState } = methods

  const onSubmit: SubmitHandler<FormValues> = ({ name, email, password }) => {
    const newUser: User = {
      uuid: generateOrderedUuid(),

      name,
      email,
      password__hashed: getHash(password),

      roles: [Role.MANAGER],
      permissions: PERMISSION_TEMPLATES[Role.MANAGER],

      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }

    db.users
      .add(newUser)
      .then(() => {
        toast('Data pengguna berhasil disimpan')
        router.push(PageUrlEnum.ONBOARDING_STEP_2)
      })
      .catch(() => {
        toast('Data pengguna gagal disimpan')
      })
  }

  return (
    <FormProvider {...methods}>
      <form
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        className="text-align-unset flex flex-col gap-4">
        <UserEmail />

        <TextInput
          rules={{ required: 'Nama harus diisi' }}
          name="name"
          slotProps={{
            input: {
              isRequired: true,
              label: 'Nama',
            },
          }}
        />

        <TextInput
          rules={{
            required: 'Kata Sandi harus diisi',
            minLength: 8,
          }}
          name="password"
          slotProps={{
            input: {
              autoComplete: 'new-password',
              isRequired: true,
              label: 'Kata Sandi',
              type: 'password',
            },
          }}
        />

        <TextInput
          rules={{
            required: 'Konfirmasi kata Sandi harus diisi',
            minLength: 8,
            validate: value => value === watch('password') || 'PIN Tidak Sama',
          }}
          name="password_confirmation"
          slotProps={{
            input: {
              autoComplete: 'new-password',
              className: 'mb-4',
              isRequired: true,
              label: 'Konfirmasi Kata Sandi',
              type: 'password',
            },
          }}
        />

        <Button
          type="submit"
          variant="solid"
          color="primary"
          isLoading={formState.isSubmitting}>
          Simpan
        </Button>

        <Button
          startContent={<MoveLeftIcon />}
          onPress={() => router.back()}
          variant="light"
          color="primary"
          isLoading={formState.isSubmitting}>
          Kembali
        </Button>
      </form>
    </FormProvider>
  )
}

function UserExistsAlert() {
  return (
    <>
      <Alert color="success" variant="faded" className="mb-4">
        Pengelola telah terdaftar
      </Alert>

      <div className="flex justify-between">
        <Button
          variant="light"
          startContent={<MoveLeftIcon />}
          href={PageUrlEnum.ONBOARDING}
          as={Link}
          color="primary">
          Kembali
        </Button>

        <Button
          color="primary"
          variant="solid"
          endContent={<MoveRightIcon />}
          href={PageUrlEnum.ONBOARDING_STEP_2}
          as={Link}>
          Selanjutnya
        </Button>
      </div>
    </>
  )
}
