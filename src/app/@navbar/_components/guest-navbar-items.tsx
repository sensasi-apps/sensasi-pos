// vendors
import { NavbarItem, Link } from '@nextui-org/react'
import NextLink from 'next/link'
// globals
import PageUrlEnum from '@/enums/page-url'
import ThemeSwitcher from '@/components/theme-switcher'

/**
 * Navbar items for guest users
 *
 * @todo Remove NODE_ENV below when #85 is solved
 */
export function GuestNavbarItems() {
  return (
    <>
      {process.env.NODE_ENV !== 'production' && (
        <NavbarItem>
          <Link href={PageUrlEnum.LOGIN} as={NextLink}>
            Login
          </Link>
        </NavbarItem>
      )}

      <NavbarItem>
        <ThemeSwitcher />
      </NavbarItem>
    </>
  )
}
