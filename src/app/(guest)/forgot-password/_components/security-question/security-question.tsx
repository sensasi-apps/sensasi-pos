// vendors
import { Autocomplete, AutocompleteItem } from '@heroui/autocomplete'
import { Button } from '@heroui/button'
import { FormEvent, useState } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
//
import { UserRound } from 'lucide-react'
import { useFormSubmissionState } from '@/stores/form-submission'
import { useSecurityQuestionState } from '../../_stores/security-question'
import { SecurityQuestion } from '@/enums/security-question'
import QuestionAndAnswerField from './question-and-answer-field'
import db from '@/models/db'

export default function SecurityQuestionForm() {
  const users = useLiveQuery(() => db.users.toArray(), [])
  const securityQuestions = Object.entries(SecurityQuestion)

  // States
  const [hasSelectedUser, setHasSelectedUser] = useState(false)

  // Stores
  const { isSubmitting, toggleSubmitting } = useFormSubmissionState()
  const { selectedQuestionNumbers } = useSecurityQuestionState()

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

  if (!users)
    return (
      <div className="mx-auto mb-4 max-w-xs">
        <span className="block text-center text-sm">Tidak Ada Pengguna</span>
        <span className="block text-center text-sm">
          Silakan Tambahkan Pengguna Terlebih Dahulu
        </span>
      </div>
    )

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
          {users.map(user => (
            <AutocompleteItem
              key={user.uuid}
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
