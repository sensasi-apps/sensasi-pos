import { create } from 'zustand'

interface PasswordVisibilityState {
  password: {
    isVisible: boolean
    toggleVisibility: () => void
  }
  confirmPassword: {
    isVisible: boolean
    toggleVisibility: () => void
  }
}

export const usePasswordVisibilityState = create<PasswordVisibilityState>(
  set => ({
    password: {
      isVisible: false,
      toggleVisibility: () =>
        set(state => ({
          password: { ...state.password, isVisible: !state.password.isVisible },
        })),
    },
    confirmPassword: {
      isVisible: false,
      toggleVisibility: () =>
        set(state => ({
          confirmPassword: {
            ...state.confirmPassword,
            isVisible: !state.confirmPassword.isVisible,
          },
        })),
    },
  }),
)
