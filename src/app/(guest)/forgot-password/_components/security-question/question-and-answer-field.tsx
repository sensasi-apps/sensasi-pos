import { SecurityQuestion } from '@/enums/security-question'
import { useFormSubmissionState } from '@/stores/form-submission'
import { Input, Select, SelectItem, SharedSelection } from '@nextui-org/react'
import { useSecurityQuestionState } from '../../_stores/security-question'

export default function QuestionAndAnswerField({
  securityQuestions,
  questionNumber,
}: {
  securityQuestions: [string, SecurityQuestion][]
  questionNumber: number
}) {
  // Stores
  const { isSubmitting } = useFormSubmissionState()
  const { pushSelectedQuestionNumbers, hasQuestionNumber } =
    useSecurityQuestionState()

  const handleSelectionChange = ({ currentKey }: SharedSelection) => {
    if (!currentKey) return

    pushSelectedQuestionNumbers(questionNumber)
  }

  return (
    <>
      <Select
        disallowEmptySelection
        onSelectionChange={handleSelectionChange}
        label={`Pilih Pertanyaan Keamanan ${questionNumber.toString()}`}
        isRequired
        isDisabled={isSubmitting}>
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
        isDisabled={!hasQuestionNumber(questionNumber) || isSubmitting}
      />
    </>
  )
}
