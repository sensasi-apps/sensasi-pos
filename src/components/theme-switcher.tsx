'use client'

import { useTheme } from 'next-themes'
import { MoonStar, Sun } from 'lucide-react'
import type { SwitchProps } from '@heroui/switch'
import dynamic from 'next/dynamic'

const Switch = dynamic<SwitchProps>(
  () => import('@heroui/switch').then(mod => mod.Switch),
  {
    ssr: false,
  },
)

export default function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme()

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
