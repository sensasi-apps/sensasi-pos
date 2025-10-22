import * as Sentry from '@sentry/nextjs'
import { useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'

/**
 * Custom hook to manage the state and behavior of a feedback form modal.
 */
export function useFeedbackFormModalHook() {
  const [message, setMessage] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const setMessageDebounced = useDebouncedCallback(setMessage, 500)

  return {
    /**
     * Determines whether the form data is valid.
     */
    isFormDataValid: !!message && message.length >= 10,

    /**
     * Determines whether the form has been submitted.
     */
    isSubmitted,

    /**
     * Handles the change of form data.
     */
    handleFormDataChange: (
      // key: 'message',
      value: string,
    ) => {
      // if (key !== 'message') throw new Error('Invalid key')

      setMessageDebounced(value)
    },

    /**
     * Handles the submission of the form.
     *
     * @see https://docs.sentry.io/platforms/javascript/guides/nextjs/user-feedback/#user-feedback-api
     */
    handleSubmit: () => {
      Sentry.captureFeedback({
        message,
        associatedEventId: Sentry.lastEventId(),
      })

      setIsSubmitted(true)
    },

    /**
     * Handles the reset of the form.
     */
    handleReset: () => {
      setMessage('')
      setIsSubmitted(false)
    },
  }
}
