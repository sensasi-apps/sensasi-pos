import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Switch } from '@nextui-org/switch'
import { MoonStar, Sun } from 'lucide-react'

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <Switch
      classNames={{
        wrapper: 'm-0',
      }}
      defaultSelected={theme === 'dark'}
      onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      size="sm"
      color="primary"
      startContent={<Sun />}
      endContent={<MoonStar />}
    />
  )
}

export default ThemeSwitcher
