import { useTheme } from 'next-themes'
import React from 'react'
import { Switch } from '@nextui-org/switch'
import { MoonStar, Sun } from 'lucide-react'

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <Switch
      defaultSelected
      defaultChecked={theme === 'dark'}
      onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      size="md"
      color="primary"
      startContent={<Sun />}
      endContent={<MoonStar />}
    />
  )
}

export default ThemeSwitcher
