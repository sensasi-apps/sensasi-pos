import { Button, Input } from '@nextui-org/react'
import { Eye, EyeOff } from 'lucide-react'
import { FormEvent, useState } from 'react'

type PasswordIdentifier = 'password' | 'confirm-password'

interface PasswordVisibility {
  identifier: PasswordIdentifier
  isVisible: boolean
}

export default function ResetPasswordForm() {
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

    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  return (
    <form className="space-y-4" onSubmit={handleResetPassword}>
      <Input
        label="Kata Sandi Baru"
        isRequired
        isDisabled={isLoading}
        endContent={
          <button
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
        endContent={
          <button
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
