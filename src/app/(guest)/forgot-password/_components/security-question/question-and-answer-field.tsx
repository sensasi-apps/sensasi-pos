import { SecurityQuestion } from '@/enums/security-question'
import { Input, Select, SelectItem } from '@nextui-org/react'
import { Dispatch, SetStateAction } from 'react'

export default function QuestionAndAnswerField({
  securityQuestions,
  questionNumber,
  selectedQuestions,
  setSelectedQuestions,
}: {
  securityQuestions: [string, SecurityQuestion][]
  questionNumber: number
  selectedQuestions: {
    questionNumber: number
  }[]
  setSelectedQuestions: Dispatch<SetStateAction<{ questionNumber: number }[]>>
}) {
  return (
    <>
      <Select
        disallowEmptySelection
        onSelectionChange={({ currentKey }) =>
          setSelectedQuestions(prev => {
            if (!currentKey) return prev

            return [...prev, { questionNumber }]
          })
        }
        label={`Pilih Pertanyaan Keamanan ${questionNumber.toString()}`}
        isRequired>
        {securityQuestions.map(([key, value]: [string, string]) => (
          <SelectItem key={key} value={key}>
            {value}
          </SelectItem>
        ))}
      </Select>

      <Input
        type="text"
        label={`Jawaban Pertanyaan Keamanan ${questionNumber.toString()}`}
        isRequired
        isDisabled={((): boolean => {
          return !selectedQuestions.some(
            question => question.questionNumber === questionNumber,
          )
        })()}
      />
    </>
  )
}
