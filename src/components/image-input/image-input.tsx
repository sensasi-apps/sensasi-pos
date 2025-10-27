'use client'

import { Button } from '@heroui/button'
import {
  createRef,
  useCallback,
  useEffect,
  useEffectEvent,
  useState,
} from 'react'
import { Image } from '@heroui/image'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@heroui/modal'
// icons
import { Maximize2, Trash2 } from 'lucide-react'
//
import type { Base64Blob } from '@/@types/base-64-blob'
import resizeImage from '@/components/image-input/functions/resize-image'

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
  value: _value,
}: ImageInputProps) {
  const [value, setValue] = useState<Base64Blob | undefined>(
    _value ?? undefined,
  )
  const [hoveredImage, setHoveredImage] = useState<string | null>(null)
  const [modalImage, setModalImage] = useState<string | null>(null)
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const fileInputRef = createRef<HTMLInputElement>()
  const [isMobile, setIsMobile] = useState<boolean>(false)

  const checkIsMobile = useEffectEvent(() => {
    // Runs only on the client side
    const userAgent = typeof window !== 'undefined' ? navigator.userAgent : ''
    const mobileRegex =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i

    if (mobileRegex.test(userAgent)) {
      setIsMobile(true)
    }
  })

  useEffect(() => {
    checkIsMobile()
  }, [])

  const onDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      const file = e.dataTransfer.files[0]
      resizeImage(file)
        .then(uri => {
          setValue(uri)
          onValueChange?.(uri)
        })
        .catch(err => {
          throw err
        })
    },
    [onValueChange],
  )

  const onDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }, [])

  const closeModal = () => {
    setModalImage(null)
  }

  return (
    <div className={className}>
      <div className={classNames?.label ?? 'mb-1 text-sm'}>{label}</div>

      <div
        role="img"
        onDrop={onDrop}
        onDragOver={onDragOver}
        className="hover:border-primary cursor-pointer rounded-lg border-2 border-dashed border-gray-300 p-4 text-center transition-colors duration-300"
        // onClick={() => fileInputRef.current?.click()} // disable for now due lint error
      >
        {value === undefined ? (
          <>
            <p className="mb-2">Drag and drop images here</p>
            <p>or</p>
            <Button as="label" color="primary" className="mt-2">
              Select Files
              <input
                type="file"
                accept="image/*"
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
                className="hidden"
              />
            </Button>
          </>
        ) : (
          <div className="flex flex-col justify-center duration-250">
            <div
              role="img"
              className="relative mx-auto"
              onMouseEnter={() => {
                setHoveredImage(value)
              }}
              onMouseLeave={() => {
                setHoveredImage(null)
              }}>
              <Image
                shadow="md"
                alt="image-preview"
                className={`max-h-72 ${classNames?.imgPreview}`}
                src={value}
              />
              {hoveredImage && (
                <div className="bg-opacity-50 absolute inset-0 z-10 flex items-center justify-center gap-6 rounded-lg bg-black p-4">
                  <Button
                    isIconOnly
                    color="danger"
                    variant="light"
                    className="h-full basis-1/2"
                    onClick={() => {
                      setValue(undefined)
                      onValueChange?.(null)

                      if (fileInputRef.current) {
                        fileInputRef.current.value = ''
                      }
                    }}>
                    <Trash2 size={40} />
                  </Button>
                  <Button
                    isIconOnly
                    color="primary"
                    variant="light"
                    className="h-full basis-1/2"
                    onClick={() => {
                      setModalImage(value)
                    }}
                    onPress={onOpen}>
                    <Maximize2 size={40} />
                  </Button>
                </div>
              )}
            </div>

            {isMobile && (
              <div className="mt-4 flex flex-row justify-center gap-4">
                <Button
                  isIconOnly
                  className="w-full"
                  color="primary"
                  variant="bordered"
                  onClick={() => {
                    setModalImage(value)
                  }}
                  onPress={onOpen}>
                  <Maximize2 size={20} />
                </Button>

                <Button
                  isIconOnly
                  className="w-full"
                  color="danger"
                  variant="bordered"
                  onClick={() => {
                    setValue(undefined)
                    onValueChange?.(null)

                    if (fileInputRef.current) {
                      fileInputRef.current.value = ''
                    }
                  }}>
                  <Trash2 size={20} />
                </Button>
              </div>
            )}
          </div>
        )}
      </div>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={closeModal}
        size="5xl"
        backdrop="blur">
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Image Preview
              </ModalHeader>
              <ModalBody className="flex items-center justify-center">
                <Image
                  src={modalImage ?? ''}
                  alt="Large preview"
                  className="flex scale-110 justify-center"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
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
