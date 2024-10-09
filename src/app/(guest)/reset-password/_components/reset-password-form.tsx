import { Button, Input } from '@nextui-org/react'
import { Eye, EyeOff } from 'lucide-react'
import { FormEvent, useState } from 'react'

type PasswordIdentifier = 'password' | 'confirm-password'

interface PasswordVisibility {
  identifier: PasswordIdentifier
  isVisible: boolean
}

export default function ResetPasswordForm() {
  const [errorMessage, setErrorMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [passwordVisibility, setPasswordVisibility] = useState<
    PasswordVisibility[]
  >([
    {
      identifier: 'password',
      isVisible: false,
    },
    {
      identifier: 'confirm-password',
      isVisible: false,
    },
  ])

  const toggleVisibility = (identifier: PasswordIdentifier) => {
    setPasswordVisibility(prev => {
      return prev.map(item => {
        if (item.identifier === identifier) {
          return {
            ...item,
            isVisible: !item.isVisible,
          }
        }

        return item
      })
    })
  }

  const handleResetPassword = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setErrorMessage('')

    const formData = new FormData(event.currentTarget)

    const password = formData.get('password') as string
    const confirmPassword = formData.get('confirm-password') as string

    if (password.length < 8 || confirmPassword.length < 8) {
      setErrorMessage('Kata sandi minimal 8 karakter')
      return
    }

    if (formData.get('password') !== formData.get('confirm-password')) {
      setErrorMessage('Kata sandi tidak sama')
      return
    }

    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  return (
    <form className="space-y-4" onSubmit={handleResetPassword}>
      {errorMessage && (
        <div className="text-sm text-red-500">{errorMessage}</div>
      )}
      <Input
        label="Kata Sandi Baru"
        isRequired
        isDisabled={isLoading}
        name="password"
        endContent={
          <button
            tabIndex={-1}
            className="focus:outline-none"
            type="button"
            onClick={() => toggleVisibility('password')}
            aria-label="toggle password visibility">
            {passwordVisibility.find(item => item.identifier === 'password')
              ?.isVisible ? (
              <EyeOff className="pointer-events-none text-2xl text-default-400" />
            ) : (
              <Eye className="pointer-events-none text-2xl text-default-400" />
            )}
          </button>
        }
        type={
          passwordVisibility.find(item => item.identifier === 'password')
            ?.isVisible
            ? 'text'
            : 'password'
        }
      />

      <Input
        label="Konfirmasi Kata Sandi Baru"
        isRequired
        isDisabled={isLoading}
        name="confirm-password"
        endContent={
          <button
            tabIndex={-1}
            className="focus:outline-none"
            type="button"
            onClick={() => toggleVisibility('confirm-password')}
            aria-label="toggle password visibility">
            {passwordVisibility.find(
              item => item.identifier === 'confirm-password',
            )?.isVisible ? (
              <EyeOff className="pointer-events-none text-2xl text-default-400" />
            ) : (
              <Eye className="pointer-events-none text-2xl text-default-400" />
            )}
          </button>
        }
        type={
          passwordVisibility.find(
            item => item.identifier === 'confirm-password',
          )?.isVisible
            ? 'text'
            : 'password'
        }
      />

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
