// vendors
import { Input } from '@heroui/input'
// icons
import { Eye, EyeOff } from 'lucide-react'
//
import { usePasswordVisibilityState } from '../_stores/password-visibility'
import { useFormSubmissionState } from '@/stores/form-submission'
import { useErrorMessageState } from '@/stores/input-error-message'

export default function PasswordField() {
  // Stores
  const { isSubmitting } = useFormSubmissionState()
  const { isVisible, toggleVisibility } = usePasswordVisibilityState(
    state => state.password,
  )
  const { fields } = useErrorMessageState()

  const errorMessage = fields.find(
    field => field.identifier === 'password',
  )?.message

  return (
    <Input
      label="Kata Sandi Baru"
      name="password"
      isRequired
      isDisabled={isSubmitting}
      isInvalid={!!errorMessage}
      errorMessage={errorMessage}
      endContent={
        <button
          tabIndex={-1}
          className="focus:outline-none"
          type="button"
          onClick={() => toggleVisibility()}
          aria-label="toggle password visibility">
          {isVisible ? (
            <EyeOff className="text-default-400 pointer-events-none text-2xl" />
          ) : (
            <Eye className="text-default-400 pointer-events-none text-2xl" />
          )}
        </button>
      }
      type={isVisible ? 'text' : 'password'}
    />
  )
}
