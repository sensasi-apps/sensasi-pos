// vendors
import { Button } from '@nextui-org/button'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalProps,
} from '@nextui-org/modal'
//
import mergeClass from '@/functions/merge-class'

type ColorType =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'secondary'
  | 'default'

export function ConfirmationModal({
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
  const textColorClass = getTextColorClass(color)
  const buttonColor = color === 'default' ? 'primary' : color

  return (
    <Modal
      placement="center"
      backdrop="blur"
      hideCloseButton
      isDismissable={false}
      className={mergeClass(bgColorClass, className)}
      onClose={onReject}
      {...restProps}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>

        <ModalBody>{children}</ModalBody>

        <ModalFooter>
          <Button variant="light" onPress={onReject} color={buttonColor}>
            {rejectText}
          </Button>

          <Button
            color={buttonColor}
            onPress={onAccept}
            className={textColorClass}>
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
      return 'bg-default-100'
  }
}

function getTextColorClass(color: ColorType) {
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
      return 'text-default-100'
  }
}
