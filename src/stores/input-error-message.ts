import { create } from 'zustand'

interface InputErrorMessageState {
  identifier: string
  message: string
}

interface ErrorMessageState {
  fields: InputErrorMessageState[]
  setErrorMessage: (identifier: string, message: string) => void
  clearErrorMessages: () => void
}

export const useErrorMessageState = create<ErrorMessageState>(set => ({
  fields: [],
  setErrorMessage: (identifier: string, message: string) =>
    set(state => {
      const existingFieldIndex = state.fields.findIndex(
        field => field.identifier === identifier,
      )

      if (existingFieldIndex !== -1) {
        const updatedFields = [...state.fields]

        updatedFields[existingFieldIndex] = { identifier, message }

        return { fields: updatedFields }
      }

      return {
        fields: [...state.fields, { identifier, message }],
      }
    }),
  clearErrorMessages: () =>
    set(() => {
      return {
        fields: [],
      }
    }),
}))
