import toastVendor from 'react-hot-toast'
import NextuiAlert, { NextuiAlertProps } from 'nextui-alert'

export function toast(
  message: React.ReactNode,
  severity?: NextuiAlertProps['severity'],
) {
  return toastVendor.custom(
    <NextuiAlert
      shadow="md"
      className="max-w-[350px]"
      variant="solid"
      severity={severity ?? 'success'}>
      {message}
    </NextuiAlert>,
  )
}
