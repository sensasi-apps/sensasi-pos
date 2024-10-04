import { Button, Input } from '@nextui-org/react'
import { FormEvent, useState } from 'react'

export default function EmailForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [hasValidEmail, setHasValidEmail] = useState(false)

  const handleForgotPasswordByEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  return (
    <form onSubmit={handleForgotPasswordByEmail} className="space-y-4">
      <Input
        onChange={event =>
          setHasValidEmail(
            event.target.value !== '' && event.target.validity.valid,
          )
        }
        type="email"
        label="Surel"
      />

      <Button
        color="primary"
        className="w-full"
        isDisabled={!hasValidEmail}
        isLoading={isLoading}
        type="submit">
        Kirim Tautan
      </Button>
    </form>
  )
}
