'use client'

import { AppProgressBar } from 'next-nprogress-bar'
import type { ReactNode } from 'react'

export default function ProgressBar({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <AppProgressBar
        height="4px"
        color="#006FEE"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  )
}
