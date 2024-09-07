'use client'

import Base64Blob from '@/@types/base-64-blob'
import resizeImage from '@/components/image-input/functions/resize-image'
import { Button, Image, Tooltip } from '@nextui-org/react'
import {
  // CameraIcon,
  ImageIcon,
  TrashIcon,
} from 'lucide-react'
import { createRef, useState } from 'react'

/**
 *
 * @todo menggunakan webcam
 * @todo multiple files
 */
export default function ImageInput({
  label,
  className,
  classNames,
  // isMultiple = false,
  onValueChange,
  description,
  value: _value,
}: ImageInputProps) {
  const [value, setValue] = useState<Base64Blob | undefined>(
    _value ?? undefined,
  )
  const fileInputRef = createRef<HTMLInputElement>()

  return (
    <div className={className}>
      <div className={classNames?.label ?? 'text-sm mb-1'}>{label}</div>

      <div
        className="mb-2 justify-center duration-250"
        style={{
          display: value ? 'flex' : 'none',
        }}>
        <Image
          shadow="md"
          alt="image-preview"
          className={'max-h-72 ' + classNames?.imgPreview}
          src={value}
        />
      </div>

      <div className="flex justify-between">
        <div>
          <Button
            startContent={<ImageIcon />}
            onClick={() => fileInputRef.current?.click()}>
            Pilih Berkas
          </Button>

          {/* <Button startContent={<CameraIcon />} onClick={capture}>
          Buka Kamera
          </Button> */}
        </div>

        <div>
          <Tooltip content="Hapus" color="danger">
            <Button
              isIconOnly
              color="danger"
              variant="light"
              style={{
                display: value ? undefined : 'none',
              }}
              onClick={() => {
                setValue(undefined)
                onValueChange?.(null)

                if (fileInputRef.current) {
                  fileInputRef.current.value = ''
                }
              }}>
              <TrashIcon />
            </Button>
          </Tooltip>
        </div>
      </div>

      <div className="text-xs text-gray-500">{description}</div>

      <input
        ref={fileInputRef}
        onChange={({ target: { files } }) => {
          if (files?.[0]) {
            resizeImage(files[0])
              .then(uri => {
                setValue(uri)
                onValueChange?.(uri)
              })
              .catch(err => {
                throw err
              })
          }
        }}
        type="file"
        accept="image/*"
        className="hidden"
      />
    </div>
  )
}

interface ImageInputProps {
  // isMultiple?: boolean
  label?: string
  value?: Base64Blob | null
  description?: string
  className?: string
  classNames?: {
    label?: string
    imgPreview?: string
  }
  onValueChange?: (value: Base64Blob | null) => void
}
