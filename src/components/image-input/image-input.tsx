'use client'

import { Base64Blob } from '@/@types/base-64-blob'
import resizeImage from '@/components/image-input/functions/resize-image'
import {
  Button,
  Card,
  CardBody,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react'
import {
  // CameraIcon,
  Maximize2,
  Trash2,
} from 'lucide-react'
import { createRef, useCallback, useEffect, useState } from 'react'

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

  useEffect(() => {
    // Runs only on the client side
    const userAgent = typeof window !== 'undefined' ? navigator.userAgent : ''
    const mobileRegex =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i

    if (mobileRegex.test(userAgent)) {
      setIsMobile(true)
    }
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
      <div className={classNames?.label ?? 'text-sm mb-1'}>{label}</div>

      <Card>
        <CardBody>
          <div
            onDrop={onDrop}
            onDragOver={onDragOver}
            className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer transition-colors duration-300 hover:border-primary">
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
                  className="relative"
                  onMouseEnter={() => {
                    setHoveredImage(value)
                  }}
                  onMouseLeave={() => {
                    setHoveredImage(null)
                  }}>
                  <Image
                    shadow="md"
                    alt="image-preview"
                    className={'max-h-72 ' + classNames?.imgPreview}
                    src={value}
                  />
                  {hoveredImage && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center rounded-lg z-10">
                      <Button
                        isIconOnly
                        color="danger"
                        variant="light"
                        onClick={() => {
                          setValue(undefined)
                          onValueChange?.(null)

                          if (fileInputRef.current) {
                            fileInputRef.current.value = ''
                          }
                        }}
                        className="mr-2">
                        <Trash2 size={20} />
                      </Button>
                      <Button
                        isIconOnly
                        color="primary"
                        variant="light"
                        onClick={() => {
                          setModalImage(value)
                        }}
                        onPress={onOpen}>
                        <Maximize2 size={20} />
                      </Button>
                    </div>
                  )}
                </div>
                {isMobile ? (
                  <div className="flex flex-row justify-center gap-4 mt-4">
                    <Button
                      isIconOnly
                      className="w-full "
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
                ) : null}
              </div>
            )}
          </div>
        </CardBody>
      </Card>

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
              <ModalBody className="flex justify-center items-center">
                <Image
                  src={modalImage ?? ''}
                  alt="Large preview"
                  className="flex justify-center scale-110"
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
