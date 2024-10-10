import { Button } from '@nextui-org/react'
import { FormEvent, useState } from 'react'
import PasswordField from './_components/password-field'
import ConfirmPasswordField from './_components/confirm-password-field'
import { useErrorMessageState } from '@/stores/input-error-message'
import PinField from './_components/pin-field'
import ConfirmPinField from './_components/confirm-pin-field'

export default function ResetPasswordForm() {
  // States
  const [isLoading, setIsLoading] = useState(false)

  // Stores
  const { setErrorMessage, clearErrorMessages } = useErrorMessageState()

  const handleResetPassword = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    clearErrorMessages()

    const formData = new FormData(event.currentTarget)
    const password = formData.get('password') as string
    const confirmPassword = formData.get('confirm_password') as string
    const pin = formData.get('pin') as string
    const confirmPin = formData.get('confirm_pin') as string

    if (!validateInputFields(password, confirmPassword, pin, confirmPin)) {
      return
    }

    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  const validateInputFields = (
    password: string,
    confirmPassword: string,
    pin: string,
    confirmPin: string,
  ) => {
    let passed = true

    if (password.length < 1) {
      setErrorMessage('password', 'Kata sandi tidak boleh kosong')

      passed = false
    }

    if (confirmPassword.length < 1) {
      setErrorMessage(
        'confirm_password',
        'Konfirmasi kata sandi tidak boleh kosong',
      )

      passed = false
    }

    if (password.length > 0 && password.length < 8) {
      setErrorMessage('password', 'Panjang kata sandi minimal 8 karakter')

      passed = false
    }

    if (confirmPassword.length > 0 && confirmPassword.length < 8) {
      setErrorMessage(
        'confirm_password',
        'Panjang konfirmasi kata sandi minimal 8 karakter',
      )
    }

    if (
      password.length > 0 &&
      confirmPassword.length > 0 &&
      password !== confirmPassword
    ) {
      setErrorMessage('confirm_password', 'Kata sandi tidak cocok')

      passed = false
    }

    if (pin.length < 1) {
      setErrorMessage('pin', 'PIN tidak boleh kosong')

      passed = false
    }

    if (pin.length > 0 && pin.length < 6) {
      setErrorMessage('pin', 'Panjang PIN minimal 6 digit')

      passed = false
    }

    if (confirmPin.length < 1) {
      setErrorMessage('confirm_pin', 'Konfirmasi PIN tidak boleh kosong')

      passed = false
    }

    if (confirmPin.length > 0 && confirmPin.length < 6) {
      setErrorMessage('confirm_pin', 'Panjang konfirmasi PIN minimal 6 digit')

      passed = false
    }

    if (pin.length > 0 && confirmPin.length > 0 && pin !== confirmPin) {
      setErrorMessage('confirm_pin', 'PIN tidak cocok')

      passed = false
    }

    return passed
  }

  return (
    <form className="space-y-4" onSubmit={handleResetPassword}>
      <PasswordField />
      <ConfirmPasswordField />
      <PinField />
      <ConfirmPinField />

      <Button
        color="primary"
        className="w-full"
        isLoading={isLoading}
        type="submit">
        Simpan
      </Button>
    </form>
  )
}
