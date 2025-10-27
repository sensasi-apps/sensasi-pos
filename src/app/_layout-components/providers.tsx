'use client'

import type { ReactNode } from 'react'
import { HeroUIProvider } from '@heroui/system'
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

/**
 * Providers:
 * - HeroUIProvider: Global styles
 * - NextThemeProvider: Required by HeroUI for Theme Switcher
 *
 * @see https://www.heroui.com/docs/customization/dark-mode
 */
export default function Providers({ children }: { children: ReactNode }) {
  const router = useRouter()
  return (
    <HeroUIProvider navigate={router.push}>
      <NextThemeProvider attribute="class">
        {children}
        <Toaster position="top-center" />
      </NextThemeProvider>
    </HeroUIProvider>
  )
}
