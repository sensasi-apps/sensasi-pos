import { Button } from '@nextui-org/react'
import { FormEvent, useState } from 'react'
import PasswordField from './_components/password-field'
import ConfirmPasswordField from './_components/confirm-password-field'
import { useErrorMessageState } from '@/stores/input-error-message'

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

    if (!validateInputFields(password, confirmPassword)) {
      return
    }

    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  const validateInputFields = (password: string, confirmPassword: string) => {
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

    return passed
  }

  return (
    <form className="space-y-4" onSubmit={handleResetPassword}>
      <PasswordField />
      <ConfirmPasswordField />

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
