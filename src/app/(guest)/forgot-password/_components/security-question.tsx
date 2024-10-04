import { User, users } from '@/data/users'
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Input,
} from '@nextui-org/react'
import { UserRound } from 'lucide-react'
import { FormEvent, useState } from 'react'

export default function SecurityQuestionForm() {
  const [hasSelectedUser, setHasSelectedUser] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const toggleHasSelectedUser = (key: string | number | null) =>
    setHasSelectedUser(!!key)

  const handleForgotPasswordBySecurityQuestion = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()

    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  return (
    <>
      <div className="mx-auto mb-4 max-w-xs">
        <span className="block text-center text-sm">
          Jawab Pertanyaan Keamanan Untuk Mengatur Ulang Kata Sandi
        </span>
      </div>
      <form
        onSubmit={handleForgotPasswordBySecurityQuestion}
        className="space-y-4">
        <Autocomplete
          label="Pilih Pengguna"
          onSelectionChange={toggleHasSelectedUser}
          isRequired>
          {users.map((user: User) => (
            <AutocompleteItem
              key={user.id}
              startContent={
                <UserRound size={24} className="text-primary-300" />
              }>
              {user.name}
            </AutocompleteItem>
          ))}
        </Autocomplete>

        {hasSelectedUser && (
          <>
            <Input type="text" label="Nama Ibu Kandung" />

            <Input type="text" label="Nama Panggilan Masa Kecil" />
          </>
        )}

        <Button
          color="primary"
          className="w-full"
          isDisabled={!hasSelectedUser}
          isLoading={isLoading}
          type="submit">
          Proses
        </Button>
      </form>
    </>
  )
}
