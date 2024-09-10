import mergeClass from '@/functions/merge-class'
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalProps,
} from '@nextui-org/react'

type ColorType = 'primary' | 'success' | 'warning' | 'danger' | 'secondary'

export default function ConfirmationModal({
  title = 'Konfirmasi Tindakan Anda',
  color = 'warning',
  rejectText = 'Batal',
  acceptText = 'Yakin',
  onAccept,
  onReject,
  children,
  className,
  ...restProps
}: Omit<ModalProps, 'onClose'> & {
  rejectText?: string
  acceptText?: string
  onAccept: () => void
  onReject: ModalProps['onClose']
  color?: ColorType
}) {
  const bgColorClass = getBgColorClass(color)
  const textColor2Class = getTextColor2Class(color)

  return (
    <Modal
      placement="center"
      backdrop="blur"
      className={mergeClass(bgColorClass, className)}
      onClose={onReject}
      closeButton={false}
      {...restProps}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>

        <ModalBody>{children}</ModalBody>

        <ModalFooter>
          <Button variant="light" onPress={onReject} color={color}>
            {rejectText}
          </Button>

          <Button color={color} onPress={onAccept} className={textColor2Class}>
            {acceptText}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

function getBgColorClass(color: ColorType) {
  switch (color) {
    case 'primary':
      return 'bg-primary-100'
    case 'secondary':
      return 'bg-secondary-100'
    case 'success':
      return 'bg-success-100'
    case 'danger':
      return 'bg-danger-100'

    default:
      return 'bg-warning-100'
  }
}

function getTextColor2Class(color: ColorType) {
  switch (color) {
    case 'primary':
      return 'text-primary-100'
    case 'secondary':
      return 'text-secondary-100'
    case 'success':
      return 'text-success-100'
    case 'danger':
      return 'text-danger-100'

    default:
      return 'text-warning-100'
  }
}
