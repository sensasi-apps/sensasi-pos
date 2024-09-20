'use client'

// vendors
import {
  Navbar as VendorNavbar,
  NavbarBrand,
  NavbarContent,
} from '@nextui-org/react'
import { ComputerIcon } from 'lucide-react'
import NextLink from 'next/link'
// globals
import { hasLoggedInUser } from '@/functions/has-logged-in-user'
import PageUrlEnum from '@/enums/page-url'
// components
import { AuthNavbarItems } from './_components/auth-navbar-items'
import { GuestNavbarItems } from './_components/guest-navbar-items'

/**
 *
 * @todo Implementasi render kondisi terautentikasi
 */
export function Navbar() {
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
        {hasLoggedInUser() ? <AuthNavbarItems /> : <GuestNavbarItems />}
      </NavbarContent>
    </VendorNavbar>
  )
}
