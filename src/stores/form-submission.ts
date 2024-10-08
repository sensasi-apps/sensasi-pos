import { create } from 'zustand'

export interface FormSubmissionState {
  isSubmitting: boolean
  toggleSubmitting: () => void
}

export const useFormSubmission = create<FormSubmissionState>(set => ({
  isSubmitting: false,
  toggleSubmitting: () => set(state => ({ isSubmitting: !state.isSubmitting })),
}))
