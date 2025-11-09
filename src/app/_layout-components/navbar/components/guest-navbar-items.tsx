'use client'

// vendors
import { NavbarItem } from '@heroui/navbar'
import { Link } from '@heroui/link'
// globals
import PageUrlEnum from '@/enums/page-url'
import ThemeSwitcher from '@/components/theme-switcher'
import useIsAppAlreadyInitialized from '@/hooks/use-is-app-already-initialized'

/**
 * Navbar items for guest users
 */
export function GuestNavbarItems() {
  const appIsAlreadyInitialized = useIsAppAlreadyInitialized()

  return (
    <>
      <NavbarItem>
        <Link
          href={
            appIsAlreadyInitialized ? PageUrlEnum.LOGIN : PageUrlEnum.ONBOARDING
          }>
          {appIsAlreadyInitialized ? 'Login' : 'Coba Sekarang'}
        </Link>
      </NavbarItem>

      <NavbarItem>
        <ThemeSwitcher />
      </NavbarItem>
    </>
  )
}
