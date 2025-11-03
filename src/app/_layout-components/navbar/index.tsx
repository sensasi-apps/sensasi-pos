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
import PageUrlEnum from '@/enums/page-url'
// components
import NavbarItemsNoSSR from './navbar-items-no-ssr'

export default function Navbar() {
  return (
    <VendorNavbar
      className="transition-[background-color] duration-1000 ease-in-out"
      position="static">
      <NextLink href={PageUrlEnum.HOME}>
        <NavbarBrand className="hover:text-primary-300 flex items-center transition-all">
          <ComputerIcon size={24} className="text-primary-300" />

          <p className="ml-2 leading-4 font-bold text-inherit">Sensasi POS</p>
        </NavbarBrand>
      </NextLink>

      <NavbarContent justify="end">
        <NavbarItemsNoSSR />
      </NavbarContent>
    </VendorNavbar>
  )
}
