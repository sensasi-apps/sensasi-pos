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
  ComputerIcon,
  FileSpreadsheetIcon,
  ShoppingCartIcon,
} from 'lucide-react'
// components
import ThemeSwitcher from '@/components/theme-switcher'
// sub-components
import SettingsDropdownButtonInNavbar from './_components/settings-dropdown-button'
import PageUrlEnum from '@/enums/page-url'

/**
 *
 * @todo Implementasi render kondisi terautentikasi
 */
export default function NavbarSlot() {
  const isProduction = process.env.NODE_ENV === 'production'

  return (
    <VendorNavbar
      className="transition-[background-color] duration-1000 ease-in-out"
      position="static">
      <NavbarBrand
        as={NextLink}
        href="/"
        className="flex items-end text-end hover:text-primary-300 duration-150">
        <ComputerIcon size={24} className="text-primary-300" />
        <p className="font-bold text-inherit ml-2 leading-4">Sensasi POS</p>
      </NavbarBrand>

      <NavbarContent justify="end">
        {/* guest */}
        {!isProduction && (
          <NavbarItem>
            <Link href="/login" as={NextLink}>
              Login
            </Link>
          </NavbarItem>
        )}

        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>

        {/* auth */}
        {!isProduction && (
          <NavbarItem>
            <Button
              href="/dashboard/reports"
              as={NextLink}
              variant="shadow"
              color="primary"
              startContent={<FileSpreadsheetIcon />}>
              Laporan
            </Button>
          </NavbarItem>
        )}

        {!isProduction && (
          <NavbarItem className="flex gap-2">
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

            <SettingsDropdownButtonInNavbar />
          </NavbarItem>
        )}
      </NavbarContent>
    </VendorNavbar>
  )
}
