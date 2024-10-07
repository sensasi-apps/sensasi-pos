import { User, users } from '@/data/users'
import { SecurityQuestion } from '@/enums/security-question'
import { Autocomplete, AutocompleteItem, Button } from '@nextui-org/react'
import { UserRound } from 'lucide-react'
import { FormEvent, useState } from 'react'
import QuestionAndAnswerField from './question-and-answer-field'

export default function SecurityQuestionForm() {
  const securityQuestions = Object.entries(SecurityQuestion)

  const [hasSelectedUser, setHasSelectedUser] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedQuestions, setSelectedQuestions] = useState(
    [] as {
      questionNumber: number
    }[],
  )

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
          className="mb-4"
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
            <QuestionAndAnswerField
              questionNumber={1}
              securityQuestions={securityQuestions}
              selectedQuestions={selectedQuestions}
              setSelectedQuestions={setSelectedQuestions}
            />
            <QuestionAndAnswerField
              questionNumber={2}
              securityQuestions={securityQuestions}
              selectedQuestions={selectedQuestions}
              setSelectedQuestions={setSelectedQuestions}
            />
          </>
        )}

        <Button
          color="primary"
          className="w-full"
          isDisabled={!hasSelectedUser || selectedQuestions.length < 2}
          isLoading={isLoading}
          type="submit">
          Proses
        </Button>
      </form>
    </>
  )
}
