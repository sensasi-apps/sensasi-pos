'use client'

import { type ReactNode, useEffect, useState } from 'react'
import { NextUIProvider } from '@nextui-org/system'
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { Toaster } from 'react-hot-toast'

export function Providers({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <NextUIProvider>
      <NextThemeProvider attribute="class">
        {children}
        <Toaster position="top-center" />
      </NextThemeProvider>
    </NextUIProvider>
  )
}
