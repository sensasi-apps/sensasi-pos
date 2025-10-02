import toastVendor from 'react-hot-toast'
import { Alert, AlertProps } from '@heroui/alert'

export function toast(message: React.ReactNode, color?: AlertProps['color']) {
  return toastVendor.custom(
    <Alert
      className="max-w-[350px]"
      variant="solid"
      color={color}
      description={message}
    />,
  )
}
