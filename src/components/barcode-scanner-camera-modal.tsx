import { BarcodeScanner, type DetectedBarcode } from 'react-barcode-scanner'
import { Modal, ModalContent, ModalProps } from '@nextui-org/react'

export default function BarcodeScannerCameraModal({
  isOpen,
  onCapture,
  onClose,
}: {
  isOpen: ModalProps['isOpen']
  onCapture: (barcode: DetectedBarcode) => unknown
  onClose: ModalProps['onClose']
}) {
  return (
    <Modal
      onClose={onClose}
      classNames={{
        closeButton: 'absolute top-2 right-2',
      }}
      isOpen={isOpen}
      title="Pindai Kode Bar"
      size="full">
      <ModalContent>
        <p className="text-center text-lg">
          Pindai kode bar menggunakan kamera
        </p>

        <p className="text-center text-sm text-gray-500">
          Pastikan pencahayaan cukup dan kode bar berada dalam fokus
        </p>

        <BarcodeScanner disablePictureInPicture onCapture={onCapture} />
      </ModalContent>
    </Modal>
  )
}
