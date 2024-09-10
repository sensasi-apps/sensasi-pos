'use client'

import Product from '@/models/table-types/product'
import {
  Button,
  ButtonProps,
  Input,
  Textarea,
  Tooltip,
} from '@nextui-org/react'
import { CameraIcon, InfoIcon, LucideProps } from 'lucide-react'
import { ForwardRefExoticComponent, RefAttributes, useState } from 'react'
import 'react-barcode-scanner/polyfill'
import BarcodeScannerCameraModal from '../../../../../components/barcode-scanner-camera-modal'
import BarcodeReader from 'react-barcode-reader'
import ImageInput from '../../../../../components/image-input/image-input'

export default function ProductForm({
  id: formId,
  data,
  onSubmit,
}: {
  id: HTMLFormElement['id']
  data: Partial<Product>
  onSubmit?: (values: Partial<Product>) => void
}) {
  const [formValues, setFormValues] = useState<Partial<Product>>(data)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isBarcodeScannerModalOpen, setIsBarcodeScannerModalOpen] =
    useState(false)

  const {
    code,
    barcode_reg_id,
    name,
    description,
    category,
    default_price,
    qty_unit,
  } = formValues

  function handleChanges(name: keyof Product, value: Product[keyof Product]) {
    setFormValues(prev => ({
      ...prev,
      [name]: value,
    }))

    if (errors[name]) {
      setErrors(prev => {
        delete prev[name]
        return prev
      })
    }
  }

  return (
    <form
      id={formId}
      onSubmit={ev => {
        ev.preventDefault()

        const errors = validate(formValues)
        if (Object.keys(errors).length) {
          setErrors(errors)
          return
        }

        if (!formValues.code && formValues.id) {
          formValues.code = formValues.id.toString()
        }

        if (!formValues.base_cost) {
          formValues.base_cost = 0
        }

        if (!formValues.qty) {
          formValues.qty = 0
        }

        onSubmit?.(formValues)
      }}
      className="flex gap-3 flex-col">
      <div className="flex gap-3">
        <Input
          label="Kode"
          value={code}
          endContent={
            <div className="flex items-center h-full">
              <IconButtonInputContent
                text="Untuk identifikasi internal yang memudahkan Anda untuk mengenali item produk/barang"
                icon={InfoIcon}
              />
            </div>
          }
          onChange={({ target: { value } }) => handleChanges('code', value)}
        />

        <Input
          label="Kategori"
          value={category}
          onChange={({ target: { value } }) => handleChanges('category', value)}
        />
      </div>

      <Input
        label="Kode Bar"
        value={barcode_reg_id}
        endContent={
          <div className="flex items-center h-full">
            <IconButtonInputContent
              text="Pindai menggunakan kamera perangkat Anda"
              icon={CameraIcon}
              onClick={() => setIsBarcodeScannerModalOpen(true)}
            />

            <IconButtonInputContent
              text="Gunakan pemindai kode bar untuk pengisian instan"
              icon={InfoIcon}
            />
          </div>
        }
        onChange={({ target: { value } }) =>
          handleChanges('barcode_reg_id', value)
        }
        color={errors.barcode_reg_id ? 'danger' : undefined}
        errorMessage={errors.barcode_reg_id}
      />

      <BarcodeReader
        onError={(_, message) => setErrors({ barcode_reg_id: message })}
        onScan={barcode => handleChanges('barcode_reg_id', barcode)}
      />

      <Input
        label="Nama"
        isRequired
        value={name}
        onChange={({ target: { value } }) => handleChanges('name', value)}
        errorMessage={errors.name}
        isInvalid={!!errors.name}
      />

      <div className="flex gap-3">
        <Textarea
          label="Deskripsi"
          value={description ?? ''}
          isMultiline
          minRows={1}
          onChange={({ target: { value } }) =>
            handleChanges('description', value)
          }
        />

        <Input
          label="Satuan Jual"
          isRequired
          className="w-1/2"
          value={qty_unit}
          onChange={({ target: { value } }) => handleChanges('qty_unit', value)}
          errorMessage={errors.qty_unit}
          isInvalid={!!errors.qty_unit}
        />
      </div>
      <Input
        label="Harga Jual Default"
        type="number"
        isRequired
        value={default_price?.toString()}
        onChange={({ target: { value } }) =>
          handleChanges('default_price', parseFloat(value))
        }
        errorMessage={errors.default_price}
        isInvalid={!!errors.default_price}
      />

      <ImageInput
        label="Gambar"
        value={formValues.image_file}
        onValueChange={value => handleChanges('image_file', value ?? undefined)}
      />

      <BarcodeScannerCameraModal
        onClose={() => setIsBarcodeScannerModalOpen(false)}
        isOpen={isBarcodeScannerModalOpen}
        onCapture={({ rawValue }) => {
          handleChanges('barcode_reg_id', rawValue)
          setIsBarcodeScannerModalOpen(false)
        }}
      />
    </form>
  )
}

function IconButtonInputContent({
  text,
  icon: IconComponent,
  onClick,
}: {
  text: string
  children?: never
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >
  onClick?: ButtonProps['onClick']
}) {
  return (
    <Tooltip content={text} size="sm" showArrow placement="top">
      <Button size="sm" isIconOnly variant="light" onClick={onClick}>
        <IconComponent className="text-default-400" />
      </Button>
    </Tooltip>
  )
}

function validate(values: Partial<Product>) {
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
