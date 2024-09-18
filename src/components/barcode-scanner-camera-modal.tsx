'use client'

import { BarcodeScanner, type DetectedBarcode } from 'react-barcode-scanner'
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Modal,
  ModalContent,
  ModalProps,
  Tooltip,
} from '@nextui-org/react'
import { InfoIcon, SettingsIcon, XIcon } from 'lucide-react'
import { useState } from 'react'
import NextuiAlert from 'nextui-alert'

/**
 * List of barcode types that can be detected by the camera
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Barcode_Detection_API#supported_barcode_formats
 */
const ACCOMODATED_BARCODE_TYPES: {
  code: string
  label: string
}[] = [
  // { code: 'aztec', label: 'Aztec' },
  // { code: 'code_128', label: 'Code 128' },
  // { code: 'code_39', label: 'Code 39' },
  // { code: 'code_93', label: 'Code 93' },
  // { code: 'codabar', label: 'Codabar' },
  // { code: 'data_matrix', label: 'Data Matrix' },
  { code: 'ean_8', label: 'EAN-8' },
  { code: 'ean_13', label: 'EAN-13' },
  // { code: 'itf', label: 'ITF' },
  // { code: 'pdf417', label: 'PDF417' },
  { code: 'qr_code', label: 'QR Code' },
  // { code: 'upc_a', label: 'UPC-A' },
  // { code: 'upc_e', label: 'UPC-E' },
]

const DEFAULT_BARCODE_TYPES: string[] = ['ean_13', 'qr_code']

const EAN_13_WARNING_TEXT =
  'Kamera dengan resolusi rendah mungkin tidak dapat mendeteksi kode bar berjenis EAN-13'

/**
 * @todo Implement user preference saving to indexedDB
 * @todo add flash toggle
 * @todo add camera switch
 */
export default function BarcodeScannerCameraModal({
  isOpen,
  onCapture,
  onClose,
}: {
  isOpen: ModalProps['isOpen']
  onCapture: (barcode: DetectedBarcode) => unknown
  onClose: ModalProps['onClose']
}) {
  const [selectedBarcodeTypes, setSelectedBarcodeTypes] = useState(
    DEFAULT_BARCODE_TYPES,
  )

  const [isOpened, setIsOpened] = useState(true)

  return (
    <Modal
      onClose={onClose}
      classNames={{
        closeButton: 'hidden',
      }}
      isOpen={isOpen}
      title="Pindai Kode Bar"
      size="full">
      <ModalContent>
        <BarcodeScanner
          disablePictureInPicture
          onCapture={onCapture}
          options={{
            formats: selectedBarcodeTypes,
          }}
        />

        <Tooltip
          content="Tutup Kamera"
          color="danger"
          placement="left"
          showArrow>
          <Button
            className="absolute top-4 right-4 rounded-full"
            color="danger"
            variant="flat"
            isIconOnly
            onClick={onClose}>
            <XIcon />
          </Button>
        </Tooltip>

        <div className="absolute pl-4 pt-3">
          <Tooltip content="Buka Pengaturan" placement="right" showArrow>
            <Button
              variant="light"
              isIconOnly
              onClick={() => {
                setIsOpened(true)
              }}>
              <SettingsIcon className="text-slate-500" />
            </Button>
          </Tooltip>

          <div className="p-2 mt-2">
            <Tooltip
              content={EAN_13_WARNING_TEXT}
              placement="right"
              color="warning"
              showArrow>
              <InfoIcon className="text-warning/75" />
            </Tooltip>
          </div>
        </div>

        <Modal
          isOpen={isOpened}
          onClose={() => {
            setIsOpened(false)
          }}
          size="xs"
          classNames={{
            closeButton: 'z-10',
          }}>
          <ModalContent>
            <NextuiAlert startContent={<InfoIcon />}>
              {EAN_13_WARNING_TEXT}
            </NextuiAlert>

            <div className="p-4">
              <CheckboxGroup
                isRequired
                label="Jenis Kode Bar"
                value={selectedBarcodeTypes}>
                {ACCOMODATED_BARCODE_TYPES.map(({ code, label }) => (
                  <Checkbox
                    key={code}
                    value={code}
                    isDisabled={
                      selectedBarcodeTypes.length === 1 &&
                      selectedBarcodeTypes.includes(code)
                    }
                    onChange={({ target: { checked } }) => {
                      setSelectedBarcodeTypes(prev =>
                        checked
                          ? [...prev, code]
                          : prev.filter(type => type !== code),
                      )
                    }}>
                    {label}
                  </Checkbox>
                ))}
              </CheckboxGroup>

              <p className="text-sm mt-4">
                *EAN-13 merupakan jenis kode bar yang umumnya terdapat pada
                kemasan produk
              </p>
            </div>
          </ModalContent>
        </Modal>
      </ModalContent>
    </Modal>
  )
}
