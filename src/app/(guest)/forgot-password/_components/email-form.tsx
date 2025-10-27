// vendors
import { Button } from '@heroui/button'
import { type FormEvent, useState } from 'react'
import { Input } from '@heroui/input'
//
import { useFormSubmissionState } from '@/stores/form-submission'

export default function EmailForm() {
  // States
  const [hasValidEmail, setHasValidEmail] = useState(false)

  // Stores
  const { isSubmitting, toggleSubmitting } = useFormSubmissionState()

  const handleForgotPasswordByEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    toggleSubmitting()

    setTimeout(() => {
      toggleSubmitting()
    }, 2000)
  }

  return (
    <>
      <div className="mx-auto mb-4 max-w-xs">
        <span className="block text-center text-sm">
          Masukkan Surel Anda Untuk Menerima Tautan Atur Ulang Kata Sandi
        </span>
      </div>

      <form onSubmit={handleForgotPasswordByEmail} className="space-y-4">
        <Input
          onChange={event =>
            setHasValidEmail(
              event.target.value !== '' && event.target.validity.valid,
            )
          }
          isDisabled={isSubmitting}
          isRequired
          type="email"
          label="Surel"
        />

        <Button
          color="primary"
          className="w-full"
          isDisabled={!hasValidEmail}
          isLoading={isSubmitting}
          type="submit">
          Kirim Tautan
        </Button>
      </form>
    </>
  )
}
