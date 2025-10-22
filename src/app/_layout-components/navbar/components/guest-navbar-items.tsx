// vendors
import { NavbarItem } from '@heroui/navbar'
import { Link } from '@heroui/link'
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
      <NavbarItem>
        <Link href={PageUrlEnum.LOGIN}>Login</Link>
      </NavbarItem>

      <NavbarItem>
        <ThemeSwitcher />
      </NavbarItem>
    </>
  )
}
