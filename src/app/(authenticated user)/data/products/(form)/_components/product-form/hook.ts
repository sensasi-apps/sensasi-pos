import type { Product } from '@/models/table-types/product'
import { type FormEvent, useState } from 'react'
import type { ProductFormProps } from './props'
import { useDebouncedCallback } from 'use-debounce'

export function useHook(
  data: ProductFormProps['data'],
  onSubmit?: ProductFormProps['onSubmit'],
) {
  const [formValues, setFormValues] = useState<ProductFormProps['data']>(data)
  const [errors, setErrors] = useState<Record<string, string | undefined>>({})
  const [isBarcodeScannerModalOpen, setIsBarcodeScannerModalOpen] =
    useState(false)

  const debouncedSetFormValues = useDebouncedCallback(setFormValues, 250)

  return {
    errors,
    formValues,
    isBarcodeScannerModalOpen,

    handleBarcodeReaderError: (_: string, message: string) => {
      setErrors({ barcode_reg_id: message })
    },

    handleOpenBarcodeScannerModal: () => {
      setIsBarcodeScannerModalOpen(true)
    },

    handleCloseBarcodeScannerModal: () => {
      setIsBarcodeScannerModalOpen(false)
    },

    handleValueChange: (key: keyof Product, value: Product[keyof Product]) => {
      debouncedSetFormValues(prev => ({
        ...prev,
        [key]: value,
      }))

      if (errors[key]) {
        setErrors(prev => {
          prev[key] = undefined
          return prev
        })
      }
    },

    handleSubmit: (ev: FormEvent<HTMLFormElement>) => {
      ev.preventDefault()

      const errors = validate(formValues)

      if (Object.keys(errors).length) {
        setErrors(errors)
        return
      }

      onSubmit?.(formValues)
    },
  }
}

function validate(values: ProductFormProps['data']) {
  const errors: Record<string, string> = {}

  if (!values.name) {
    errors.name = 'Nama tidak boleh kosong'
  }

  if (!values.qty_unit) {
    errors.qty_unit = 'Satuan tidak boleh kosong'
  }

  if (!values.default_price) {
    errors.default_price = 'Harga jual default tidak boleh kosong'
  }

  return errors
}
