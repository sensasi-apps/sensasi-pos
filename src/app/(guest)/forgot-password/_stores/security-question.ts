import { create } from 'zustand'

export interface SecurityQuestionState {
  selectedQuestionNumbers: number[]
  pushSelectedQuestionNumbers: (questionNumber: number) => void
  hasQuestionNumber: (questionNumber: number) => boolean
}

export const useSecurityQuestion = create<SecurityQuestionState>(
  (set, get) => ({
    selectedQuestionNumbers: [],
    pushSelectedQuestionNumbers: (questionNumber: number) =>
      set(state => ({
        selectedQuestionNumbers: [
          ...state.selectedQuestionNumbers,
          questionNumber,
        ],
      })),
    hasQuestionNumber: (questionNumber: number) =>
      get().selectedQuestionNumbers.some(number => number === questionNumber),
  }),
)
