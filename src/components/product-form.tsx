'use client'

import Product from '@/@types/data/product'
import {
  Button,
  ButtonProps,
  Input,
  Textarea,
  Tooltip,
} from '@nextui-org/react'
import { CameraIcon, InfoIcon, LucideProps } from 'lucide-react'
import {
  DOMAttributes,
  ForwardRefExoticComponent,
  RefAttributes,
  useState,
} from 'react'
import 'react-barcode-scanner/polyfill'
import BarcodeScannerCameraModal from './barcode-scanner-camera-modal'
import BarcodeReader from 'react-barcode-reader'
import ImageInput from './image-input/image-input'

/**
 *
 * @todo implement ImageInput in issue no #38
 */
export default function ProductForm({
  id: formId,
  data,
  onSubmit,
}: {
  id: HTMLFormElement['id']
  data: Partial<Product>
  onSubmit?: DOMAttributes<HTMLFormElement>['onSubmit']
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

  function handleChanges(name: string, value: string | number | File) {
    setFormValues(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <form id={formId} onSubmit={onSubmit} className="flex gap-3 flex-col">
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
      />

      <div className="flex gap-3">
        <Textarea
          label="Deskripsi"
          value={description}
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
      />

      <ImageInput label="Gambar" />

      <Input
        label="Gambar"
        type="file"
        accept="image/*"
        onChange={({ target }) =>
          target.files?.[0]
            ? handleChanges('image_file', target.files[0])
            : null
        }
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
