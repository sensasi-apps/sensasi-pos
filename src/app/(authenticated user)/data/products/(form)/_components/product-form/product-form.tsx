'use client'

// vendors
import {
  Autocomplete,
  AutocompleteItem,
  AutocompleteSection,
  Input,
  Textarea,
} from '@nextui-org/react'
import { CameraIcon, InfoIcon } from 'lucide-react'
import BarcodeReader from 'react-barcode-reader'
// components
import BarcodeScannerCameraModal from '@/components/barcode-scanner-camera-modal'
import ImageInput from '@/components/image-input/image-input'
// sub components
import { IconButtonInputContent } from './icon-button-input-content'
import { useHook } from './hook'
import { ProductFormProps } from './props'

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

        <Autocomplete
          label="Satuan Jual"
          isRequired
          className="w-1/2"
          scrollShadowProps={{
            isEnabled: false,
          }}
          defaultInputValue={qty_unit ?? ''}
          errorMessage={errors.qty_unit}
          isInvalid={!!errors.qty_unit}
          onInputChange={value => {
            handleValueChange('qty_unit', value)
          }}
          allowsCustomValue>
          <AutocompleteSection
            title="Kemasan Kecil"
            classNames={{
              heading:
                'flex w-full sticky top-1 z-20 py-1.5 px-2 bg-default-100 shadow-small rounded-small',
            }}>
            {SMALL_UNITS.map(value => (
              <AutocompleteItem key={value}>{value}</AutocompleteItem>
            ))}
          </AutocompleteSection>
          <AutocompleteSection
            title="Kemasan Besar"
            classNames={{
              heading:
                'flex w-full sticky top-1 z-20 py-1.5 px-2 bg-default-100 shadow-small rounded-small',
            }}>
            {BIG_UNITS.map(value => (
              <AutocompleteItem key={value}>{value}</AutocompleteItem>
            ))}
          </AutocompleteSection>
        </Autocomplete>
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

const SMALL_UNITS = ['pcs', 'kg', 'gr', 'botol', 'gelas']
const BIG_UNITS = ['lusin', 'krat', 'dus', 'peti']
