'use client'

// vendors
import {
  Input,
  Select,
  SelectItem,
  SelectSection,
  Textarea,
} from '@nextui-org/react'
import { CameraIcon, InfoIcon } from 'lucide-react'
import BarcodeReader from 'react-barcode-reader'
// components
import BarcodeScannerCameraModal from '@/components/barcode-scanner-camera-modal'
import ImageInput from '@/components/image-input/image-input'
// sub components
import { IconButtonInputContent } from './icon-button-input-content'
import { useHook } from './_hook'
import { ProductFormProps } from './_props'

export function ProductForm({ id: formId, data, onSubmit }: ProductFormProps) {
  const {
    errors,
    formValues: {
      code,
      barcode_reg_id,
      name,
      description,
      category,
      default_price,
      image_file,
      qty_unit,
    },
    isBarcodeScannerModalOpen,

    handleBarcodeReaderError,
    handleOpenBarcodeScannerModal,
    handleCloseBarcodeScannerModal,
    handleValueChange,
    handleSubmit,
  } = useHook(data, onSubmit)

  const smallUnits = [
    {
      key: 'pcs',
      text: 'pcs',
    },
    {
      key: 'kg',
      text: 'kg',
    },
    {
      key: 'gr',
      text: 'gr',
    },
    {
      key: 'botol',
      text: 'botol',
    },
    {
      key: 'gelas',
      text: 'gelas',
    },
  ]

  const bigUnits = [
    {
      key: 'lusin',
      text: 'lusin',
    },
    {
      key: 'krat',
      text: 'krat',
    },
    {
      key: 'dus',
      text: 'dus',
    },
    {
      key: 'peti',
      text: 'peti',
    },
  ]

  return (
    <form id={formId} onSubmit={handleSubmit} className="flex gap-3 flex-col">
      <div className="flex gap-3">
        <Input
          label="Kode"
          defaultValue={code ?? ''}
          endContent={
            <div className="flex items-center h-full">
              <IconButtonInputContent
                text="Untuk identifikasi internal yang memudahkan Anda untuk mengenali item produk/barang"
                icon={InfoIcon}
              />
            </div>
          }
          onChange={({ target: { value } }) => {
            handleValueChange('code', value)
          }}
        />

        <Input
          label="Kategori"
          defaultValue={category ?? ''}
          onChange={({ target: { value } }) => {
            handleValueChange('category', value)
          }}
        />
      </div>

      <Input
        label="Kode Bar"
        defaultValue={barcode_reg_id ?? ''}
        endContent={
          <div className="flex items-center h-full">
            <IconButtonInputContent
              text="Pindai menggunakan kamera perangkat Anda"
              icon={CameraIcon}
              onClick={handleOpenBarcodeScannerModal}
            />

            <IconButtonInputContent
              text="Gunakan pemindai kode bar untuk pengisian instan"
              icon={InfoIcon}
            />
          </div>
        }
        onChange={({ target: { value } }) => {
          handleValueChange('barcode_reg_id', value)
        }}
        color={errors.barcode_reg_id ? 'danger' : undefined}
        errorMessage={errors.barcode_reg_id}
      />

      <BarcodeReader
        onError={handleBarcodeReaderError}
        onScan={barcode => {
          handleValueChange('barcode_reg_id', barcode)
        }}
      />

      <BarcodeScannerCameraModal
        onClose={handleCloseBarcodeScannerModal}
        isOpen={isBarcodeScannerModalOpen}
        onCapture={({ rawValue }) => {
          handleValueChange('barcode_reg_id', rawValue)
          handleCloseBarcodeScannerModal()
        }}
      />

      <Input
        label="Nama"
        isRequired
        defaultValue={name}
        onChange={({ target: { value } }) => {
          handleValueChange('name', value)
        }}
        errorMessage={errors.name}
        isInvalid={!!errors.name}
      />

      <div className="flex gap-3">
        <Textarea
          label="Deskripsi"
          defaultValue={description ?? ''}
          isMultiline
          minRows={1}
          onChange={({ target: { value } }) => {
            handleValueChange('description', value)
          }}></Textarea>

        <Select
          label="Satuan Jual"
          isRequired
          className="w-1/2"
          scrollShadowProps={{
            isEnabled: false,
          }}
          errorMessage={errors.qty_unit}
          defaultSelectedKeys={qty_unit ?? ''}
          isInvalid={!!errors.qty_unit}
          onChange={({ target: { value } }) => {
            handleValueChange('qty_unit', value)
          }}>
          <SelectSection
            title={'Kemasan Kecil'}
            classNames={{
              heading:
                'flex w-full sticky top-1 z-20 py-1.5 px-2 bg-default-100 shadow-small rounded-small',
            }}>
            {smallUnits.map(({ key, text }) => (
              <SelectItem key={key} value={key}>
                {text}
              </SelectItem>
            ))}
          </SelectSection>
          <SelectSection
            title={'Kemasan Besar'}
            classNames={{
              heading:
                'flex w-full sticky top-1 z-20 py-1.5 px-2 bg-default-100 shadow-small rounded-small',
            }}>
            {bigUnits.map(({ key, text }) => (
              <SelectItem key={key} value={key}>
                {text}
              </SelectItem>
            ))}
          </SelectSection>
        </Select>
      </div>
      <Input
        label="Harga Jual Default"
        type="number"
        isRequired
        defaultValue={default_price?.toString() ?? ''}
        onChange={({ target: { value } }) => {
          handleValueChange('default_price', parseFloat(value))
        }}
        errorMessage={errors.default_price}
        isInvalid={!!errors.default_price}
      />

      <ImageInput
        label="Gambar"
        value={image_file}
        onValueChange={value => {
          handleValueChange('image_file', value ?? undefined)
        }}
      />
    </form>
  )
}
