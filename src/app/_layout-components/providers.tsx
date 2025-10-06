'use client'

import { type ReactNode, useEffect, useState } from 'react'
import { HeroUIProvider } from '@heroui/system'
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { Toaster } from 'react-hot-toast'

/**
 * Providers:
 * - HeroUIProvider: Global styles
 * - NextThemeProvider: Required by HeroUI for Theme Switcher
 *
 * @see https://www.heroui.com/docs/customization/dark-mode
 */
export default function Providers({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <HeroUIProvider>
      <NextThemeProvider attribute="class">
        {children}
        <Toaster position="top-center" />
      </NextThemeProvider>
    </HeroUIProvider>
  )
}
