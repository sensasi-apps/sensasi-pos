import { create } from 'zustand'

interface PinVisibilityState {
  pin: {
    isVisible: boolean
    toggleVisibility: () => void
  }
  confirmPin: {
    isVisible: boolean
    toggleVisibility: () => void
  }
}

export const usePinVisibilityState = create<PinVisibilityState>(set => ({
  pin: {
    isVisible: false,
    toggleVisibility: () =>
      set(state => ({
        pin: { ...state.pin, isVisible: !state.pin.isVisible },
      })),
  },
  confirmPin: {
    isVisible: false,
    toggleVisibility: () =>
      set(state => ({
        confirmPin: {
          ...state.confirmPin,
          isVisible: !state.confirmPin.isVisible,
        },
      })),
  },
}))
