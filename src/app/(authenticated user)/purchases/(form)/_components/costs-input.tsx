// vendors
import { Controller, useFieldArray, useFormContext } from 'react-hook-form'
import { Button } from '@heroui/button'
import { Input } from '@heroui/input'
import { PlusCircleIcon, TrashIcon } from 'lucide-react'
// types
import type { FormValues } from '../_types/form-values'
// components
import { InputAdditionalContent } from '@/components/input-additional-content'

export function CostsInput() {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormValues>()
  const { remove, fields, append } = useFieldArray({
    control,
    name: 'additional_costs',
    rules: {
      validate: costs => {
        const names = costs.map(cost => cost.name)
        return new Set(names).size === names.length
          ? undefined
          : 'Nama biaya tidak boleh sama'
      },
    },
  })

  return (
    <>
      <div className="flex items-center">
        <div className="text-sm font-bold">Biaya Lain</div>

        <Button
          isIconOnly
          variant="light"
          color="success"
          size="sm"
          onClick={() => {
            append({
              name: '',
              value: 0,
            })
          }}>
          <PlusCircleIcon className="h-5 w-5" />
        </Button>
      </div>

      {errors.additional_costs && (
        <div className="ml-2 text-sm text-red-500">
          {errors.additional_costs.root?.message}
        </div>
      )}

      {fields.map((field, i) => (
        <div key={field.id} className="flex items-center gap-3">
          <Controller
            control={control}
            name={`additional_costs.${i}.name`}
            rules={{ required: 'Nama biaya harus diisi' }}
            render={({ field: { value, ...rest }, fieldState: { error } }) => (
              <Input
                isRequired
                label="Nama Biaya"
                {...rest}
                value={value}
                isInvalid={!!error}
                errorMessage={error?.message}
              />
            )}
          />

          <Controller
            control={control}
            name={`additional_costs.${i}.value`}
            rules={{ required: 'Total biaya harus diisi' }}
            render={({
              field: { onChange, value, ...rest },
              fieldState: { error },
            }) => (
              <Input
                isRequired
                label="Biaya"
                type="number"
                value={value?.toString() ?? ''}
                onValueChange={value => {
                  onChange(value ? Number(value) : undefined)
                }}
                startContent={
                  <InputAdditionalContent>Rp</InputAdditionalContent>
                }
                {...rest}
                isInvalid={!!error}
                errorMessage={error?.message}
              />
            )}
          />

          <Button
            isIconOnly
            variant="flat"
            color="danger"
            size="sm"
            tabIndex={-1}
            onClick={() => remove(i)}>
            <TrashIcon />
          </Button>
        </div>
      ))}
    </>
  )
}
