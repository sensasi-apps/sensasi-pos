'use client'

// vendors
import {
  Navbar as VendorNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Tooltip,
} from '@nextui-org/react'
import NextLink from 'next/link'
import {
  CalculatorIcon,
  ComputerIcon,
  FileSpreadsheetIcon,
  ShoppingCartIcon,
} from 'lucide-react'
// components
import ThemeSwitcher from '@/components/theme-switcher'
// sub-components
import SettingsDropdownButtonInNavbar from './_components/settings-dropdown-button'
import PageUrlEnum from '@/enums/page-url'
import { hasAnyPermissions } from '@/functions/has-any-permissions'
import { Permission } from '@/enums/permission'
import { hasLoggedInUser } from '@/functions/has-logged-in-user'

/**
 *
 * @todo Implementasi render kondisi terautentikasi
 */
export default function NavbarSlot() {
  return (
    <VendorNavbar
      className="transition-[background-color] duration-1000 ease-in-out"
      position="static">
      <NavbarBrand
        as={NextLink}
        href={PageUrlEnum.HOME}
        className="flex items-center transition-all hover:text-primary-300">
        <ComputerIcon size={24} className="text-primary-300" />
        <p className="ml-2 font-bold leading-4 text-inherit">Sensasi POS</p>
      </NavbarBrand>

      <NavbarContent justify="end">
        {!hasLoggedInUser() && (
          <NavbarItem>
            <Link href={PageUrlEnum.LOGIN} as={NextLink}>
              Login
            </Link>
          </NavbarItem>
        )}

        <NavbarItem className="flex gap-2">
          {hasAnyPermissions([Permission.READ_SALE]) && (
            <Tooltip content="Kasir" color="primary" showArrow size="lg">
              <Button
                isIconOnly
                href={PageUrlEnum.SALE_LIST}
                as={NextLink}
                variant="light"
                color="primary">
                <CalculatorIcon />
              </Button>
            </Tooltip>
          )}

          {hasAnyPermissions([Permission.READ_PURCHASE]) && (
            <Tooltip content="Pengadaan" color="primary" showArrow size="lg">
              <Button
                isIconOnly
                href={PageUrlEnum.PURCHASE_LIST}
                as={NextLink}
                variant="light"
                color="primary">
                <ShoppingCartIcon />
              </Button>
            </Tooltip>
          )}

          <SettingsDropdownButtonInNavbar />
        </NavbarItem>

        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>

        {hasAnyPermissions([Permission.READ_REPORT]) && (
          <NavbarItem>
            <Button
              href={PageUrlEnum.REPORT_LIST}
              as={NextLink}
              startContent={<FileSpreadsheetIcon size="1rem" />}
              variant="flat"
              color="primary">
              Laporan
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>
    </VendorNavbar>
  )
}
