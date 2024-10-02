import { ProductMovement } from '@/models/table-types/product-movement'
import { parseDate } from '@internationalized/date'
import { DatePicker, Input, Textarea } from '@nextui-org/react'
import { Controller, useFormContext } from 'react-hook-form'
import { CostsInput } from './costs-input'
import resizeImage from '@/components/image-input/functions/resize-image'
import { ItemsInput } from './items-input'
import { DOMAttributes, HTMLAttributes } from 'react'

export function ProductPurchaseForm({
  id,
  onSubmit,
}: {
  id: HTMLAttributes<HTMLFormElement>['id']
  onSubmit: DOMAttributes<HTMLFormElement>['onSubmit']
}) {
  const { register, control } = useFormContext<ProductMovement>()

  // const warehouses = useLiveQuery(() => {
  //   return db.warehouses.toArray()
  // })

  return (
    <form id={id} onSubmit={onSubmit} className="flex flex-col gap-3">
      <Input
        label="Kode Referensi"
        {...register('ref', {
          setValueAs: (value: string) => (value.length > 0 ? value : undefined),
        })}
      />

      <Controller
        name="at"
        control={control}
        rules={{ required: 'Tanggal harus diisi' }}
        render={({
          field: { onChange, value, ...restProps },
          fieldState: { error },
        }) => (
          <DatePicker
            isRequired
            label="Tanggal"
            value={value ? parseDate(value.split('T')[0]) : null}
            isInvalid={!!error}
            errorMessage={error?.message}
            onChange={value => {
              onChange(new Date(value.toString()).toISOString())
            }}
            {...restProps}
          />
        )}
      />

      {/* <Controller
        name="warehouse_state"
        control={control}
        rules={{ required: 'Gudang harus diisi' }}
        render={({
          field: { onChange, value, ...restProps },
          fieldState: { error },
        }) => (
          <Select
            isRequired
            isDisabled={!warehouses?.length}
            label="Gudang"
            description={
              !warehouses?.length ? (
                <>
                  Data gudang tidak ditemukan.{' '}
                  <Link href="/warehouses/create" className="text-xs">
                    Tambah gudang baru?
                  </Link>
                </>
              ) : undefined
            }
            errorMessage={error?.message}
            isInvalid={!!error}
            value={value?.uuid}
            onChange={({ target: { value } }) => {
              const selectedWarehouse = warehouses?.find(
                warehouse => warehouse.uuid === value,
              )

              if (selectedWarehouse) {
                onChange(selectedWarehouse)
              }
            }}
            {...restProps}>
            {(warehouses ?? []).map(warehouse => (
              <SelectItem key={warehouse.uuid} value={warehouse.uuid}>
                {warehouse.name}
              </SelectItem>
            ))}
          </Select>
        )}
      /> */}

      <Controller
        name="note"
        render={({ field, fieldState: { error } }) => (
          <Textarea
            label="Catatan"
            {...field}
            isInvalid={!!error}
            errorMessage={error?.message}
          />
        )}
      />

      <Controller
        name="additional_info.paid_at"
        control={control}
        // rules={{ required: 'Tanggal harus diisi' }}
        render={({
          field: { onChange, value, ...restProps },
          fieldState: { error },
        }) => (
          <DatePicker
            label="Tanggal Bayar"
            value={value ? parseDate(value) : null}
            onChange={value => {
              onChange(value.toString())
            }}
            {...restProps}
            isInvalid={!!error}
            errorMessage={error?.message}
          />
        )}
      />

      <Controller
        name="additional_info.received_at"
        control={control}
        render={({
          field: { onChange, value, ...restProps },
          fieldState: { error },
        }) => (
          <DatePicker
            label="Tanggal Terima Barang"
            value={value ? parseDate(value) : null}
            onChange={value => {
              onChange(value.toString())
            }}
            {...restProps}
            isInvalid={!!error}
            errorMessage={error?.message}
          />
        )}
      />

      <Controller
        name="additional_info.due_at"
        control={control}
        render={({
          field: { onChange, value, ...restProps },
          fieldState: { error },
        }) => (
          <DatePicker
            label="Tanggal Jatuh Tempo"
            value={value ? parseDate(value) : null}
            onChange={value => {
              onChange(value.toString())
            }}
            {...restProps}
            isInvalid={!!error}
            errorMessage={error?.message}
          />
        )}
      />

      <Controller
        name="files"
        render={({ field: { onChange } }) => (
          <Input
            type="file"
            label="Lampiran"
            multiple
            accept="image/*,.pdf"
            onChange={e => {
              const filePromises = Array.from(e.target.files ?? []).map(
                async file => {
                  const isImage = file.type.startsWith('image')

                  const blob = isImage
                    ? await resizeImage(file)
                    : await file.arrayBuffer()

                  return {
                    name: file.name,
                    blob: blob,
                    created_at: new Date().toISOString(),
                  }
                },
              )

              Promise.all(filePromises)
                .then(files => {
                  onChange(files)
                })
                .catch(e => {
                  throw e
                })
            }}
          />
        )}
      />

      <ItemsInput />

      <CostsInput />
    </form>
  )
}
