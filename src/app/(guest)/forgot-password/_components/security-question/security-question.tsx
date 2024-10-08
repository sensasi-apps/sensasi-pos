import { User, users } from '@/data/users'
import { SecurityQuestion } from '@/enums/security-question'
import { Autocomplete, AutocompleteItem, Button } from '@nextui-org/react'
import { UserRound } from 'lucide-react'
import { FormEvent, useState } from 'react'
import QuestionAndAnswerField from './question-and-answer-field'
import { useFormSubmission } from '@/stores/form-submission'
import { useSecurityQuestion } from '../../_stores/security-question'

export default function SecurityQuestionForm() {
  const securityQuestions = Object.entries(SecurityQuestion)

  // States
  const [hasSelectedUser, setHasSelectedUser] = useState(false)

  // Stores
  const { isSubmitting, toggleSubmitting } = useFormSubmission()
  const { selectedQuestionNumbers } = useSecurityQuestion()

  const toggleHasSelectedUser = (key: string | number | null) =>
    setHasSelectedUser(!!key)

  const handleForgotPasswordBySecurityQuestion = (
    event: FormEvent<HTMLFormElement>,
  ) => {
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
          isRequired
          isDisabled={isSubmitting}>
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
            {[1, 2].map(questionNumber => (
              <QuestionAndAnswerField
                key={`question-number-${questionNumber}`}
                questionNumber={questionNumber}
                securityQuestions={securityQuestions}
              />
            ))}
          </>
        )}

        <Button
          color="primary"
          className="w-full"
          isDisabled={!hasSelectedUser || selectedQuestionNumbers.length < 2}
          isLoading={isSubmitting}
          type="submit">
          Proses
        </Button>
      </form>
    </>
  )
}
