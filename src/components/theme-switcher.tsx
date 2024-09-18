'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Switch } from '@nextui-org/switch'
import { MoonStar, Sun } from 'lucide-react'

export default function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Switch
      classNames={{
        wrapper: 'm-0',
      }}
      defaultSelected={resolvedTheme === 'dark'}
      onChange={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
      }}
      color="primary"
      startContent={<Sun />}
      endContent={<MoonStar />}
    />
  )
}
