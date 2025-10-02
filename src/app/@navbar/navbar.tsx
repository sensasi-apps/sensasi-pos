'use client'

// vendors
import {
  Navbar as VendorNavbar,
  NavbarBrand,
  NavbarContent,
} from '@heroui/navbar'
import NextLink from 'next/link'
// icons
import { ComputerIcon } from 'lucide-react'
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
        className="hover:text-primary-300 flex items-center transition-all">
        <ComputerIcon size={24} className="text-primary-300" />

        <p className="ml-2 leading-4 font-bold text-inherit">Sensasi POS</p>
      </NavbarBrand>

      <NavbarContent justify="end">
        {hasLoggedInUser() ? <AuthNavbarItems /> : <GuestNavbarItems />}
      </NavbarContent>
    </VendorNavbar>
  )
}
