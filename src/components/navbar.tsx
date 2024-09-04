'use client'

import {
  Navbar as VendorNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react'
import NextLink from 'next/link'
import { ComputerIcon, FileSpreadsheetIcon } from 'lucide-react'
import ThemeSwitcher from './theme-switcher'
import SettingsDropdownButtonInNavbar from './settings-dropdown-button-in-navbar'

/**
 *
 * @todo Implementasi render kondisi terautentikasi
 */
export default function Navbar() {
  return (
    <VendorNavbar className="transition-[background-color] duration-1000 ease-in-out">
      <NavbarBrand
        as={NextLink}
        href="/"
        className="flex items-end text-end hover:text-primary-300 duration-150">
        <ComputerIcon size={24} className="text-primary-300" />
        <p className="font-bold text-inherit ml-2 leading-4">Sensasi POS</p>
      </NavbarBrand>

      <NavbarContent justify="end">
        {/* guest */}
        <NavbarItem>
          <Link href="/login" as={NextLink}>
            Login
          </Link>
        </NavbarItem>

        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>

        {/* auth */}
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

        <NavbarItem>
          <SettingsDropdownButtonInNavbar />
        </NavbarItem>
      </NavbarContent>
    </VendorNavbar>
  )
}
