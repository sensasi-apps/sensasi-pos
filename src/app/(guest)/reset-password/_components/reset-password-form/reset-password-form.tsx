// vendors
import { Button } from '@nextui-org/react'
import { FormEvent } from 'react'
// subcomponents
import ConfirmPasswordField from './_components/confirm-password-field'
import ConfirmPinField from './_components/confirm-pin-field'
import PasswordField from './_components/password-field'
import PinField from './_components/pin-field'
// stores
import { useErrorMessageState } from '@/stores/input-error-message'
import { useFormSubmissionState } from '@/stores/form-submission'

export default function ResetPasswordForm() {
  const { setErrorMessage, clearErrorMessages } = useErrorMessageState()
  const { isSubmitting, toggleSubmitting } = useFormSubmissionState()

  function handleResetPassword(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    clearErrorMessages()

    const formData = new FormData(event.currentTarget)
    const formValues = getFormValues(formData)

    if (!validateInputFields(formValues, setErrorMessage)) {
      return
    }

    toggleSubmitting()

    setTimeout(() => {
      toggleSubmitting()
    }, 2000)
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
        isLoading={isSubmitting}
        type="submit">
        Simpan
      </Button>
    </form>
  )
}

function validateInputFields(
  formValues: ReturnType<typeof getFormValues>,
  setErrorMessage: (identifier: string, message: string) => void,
) {
  const { password, confirmPassword, pin, confirmPin } = formValues

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

function getFormValues(formData: FormData) {
  return {
    password: formData.get('password') as string,
    confirmPassword: formData.get('confirm_password') as string,
    pin: formData.get('pin') as string,
    confirmPin: formData.get('confirm_pin') as string,
  }
}
