'use client'

import { type ReactNode, useEffect, useState } from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemeProvider } from 'next-themes'

export default function Providers({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <NextUIProvider>
      <NextThemeProvider attribute="class">{children}</NextThemeProvider>
    </NextUIProvider>
  )
}
