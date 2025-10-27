// vendors
import type { FormEvent } from 'react'
import { Input } from '@heroui/input'
// icons
import { Eye, EyeOff } from 'lucide-react'
//
import { usePinVisibilityState } from '../_stores/pin-visibility'
import { useFormSubmissionState } from '@/stores/form-submission'
import { useErrorMessageState } from '@/stores/input-error-message'

export default function PinField() {
  // Stores
  const { isSubmitting } = useFormSubmissionState()
  const { isVisible, toggleVisibility } = usePinVisibilityState(
    state => state.pin,
  )
  const { fields } = useErrorMessageState()

  const errorMessage = fields.find(field => field.identifier === 'pin')?.message

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const element = event.target as HTMLInputElement
    const value = element.value

    if (!/^\d*$/.test(value)) {
      element.value = value.replace(/[^\d]/g, '')
    }

    if (element.value.length > 6) {
      element.value = element.value.slice(0, 6)
    }
  }

  return (
    <Input
      label="PIN Baru"
      name="pin"
      isRequired
      isDisabled={isSubmitting}
      isInvalid={!!errorMessage}
      errorMessage={errorMessage}
      inputMode="numeric"
      onInput={handleInput}
      endContent={
        <button
          tabIndex={-1}
          className="focus:outline-none"
          type="button"
          onClick={() => toggleVisibility()}
          aria-label="toggle pin visibility">
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
