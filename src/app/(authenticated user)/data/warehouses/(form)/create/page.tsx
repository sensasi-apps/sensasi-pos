'use client'

import { generateOrderedUuid } from '@/functions/generate-ordered-uuid'
import { toast } from '@/functions/toast'
import db from '@/models/db'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Textarea,
} from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { Controller, useForm } from 'react-hook-form'

const FORM_ID = 'warehouse-create-form'

export default function Page() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormValues>()
  const router = useRouter()

  function handleSubmitValid(formValues: FormValues) {
    db.warehouses
      .add({
        ...formValues,
        uuid: generateOrderedUuid(),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .then(() => {
        toast('Data gudang berhasil ditambahkan')
        router.back()
      })
      .catch(() => {
        toast('Gagal menambahkan data gudang', 'danger')
      })
  }

  return (
    <div className="mx-auto max-w-sm">
      <Card>
        <CardHeader>Tambah Data Gudang</CardHeader>

        <CardBody>
          <form
            id={FORM_ID}
            onSubmit={handleSubmit(handleSubmitValid)}
            className="flex flex-col gap-3">
            <Controller
              control={control}
              name="name"
              rules={{ required: 'Nama tidak boleh kosong' }}
              render={({
                field: { value, ...rest },
                fieldState: { error },
              }) => (
                <Input
                  isRequired
                  label="Nama Gudang"
                  value={value ?? ''}
                  isDisabled={isSubmitting}
                  {...rest}
                  isInvalid={!!error}
                  errorMessage={error?.message}
                />
              )}
            />

            <Controller
              name="note"
              control={control}
              render={({
                field: { value, ...rest },
                fieldState: { error },
              }) => (
                <Textarea
                  label="Catatan tambahan"
                  isDisabled={isSubmitting}
                  {...rest}
                  value={value ?? ''}
                  isInvalid={!!error}
                  errorMessage={error?.message}
                />
              )}
            />
          </form>
        </CardBody>

        <CardFooter className="justify-end">
          <Button
            variant="light"
            color="primary"
            onClick={() => router.back()}
            isDisabled={isSubmitting}>
            Batal
          </Button>

          <Button
            form={FORM_ID}
            type="submit"
            color="primary"
            isDisabled={isSubmitting}>
            Simpan
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

interface FormValues {
  name: string
  note?: string
}
