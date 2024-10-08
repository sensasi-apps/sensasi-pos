import { create } from 'zustand'

export interface FormSubmissionState {
  isSubmitting: boolean
  toggleSubmitting: () => void
}

export const useFormSubmissionState = create<FormSubmissionState>(set => ({
  isSubmitting: false,
  toggleSubmitting: () => set(state => ({ isSubmitting: !state.isSubmitting })),
}))
