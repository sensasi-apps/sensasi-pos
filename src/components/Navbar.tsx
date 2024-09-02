'use client'

import { usePathname } from 'next/navigation'
import {
  Navbar as VendorNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  // Button,
} from '@nextui-org/react'
import NextLink from 'next/link'
// import { AcmeLogo } from "./AcmeLogo.jsx";

export default function Navbar() {
  const pathname = usePathname()

  return (
    <VendorNavbar className="">
      <NavbarBrand as={NextLink} href="/">
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit">Sensasi POS</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={pathname === '/dashboard/products'}>
          <Link
            color={
              pathname === '/dashboard/products' ? 'primary' : 'foreground'
            }
            href="/dashboard/products"
            as={NextLink}>
            Produk
          </Link>
        </NavbarItem>
        {/* <NavbarItem isActive>
					<Link href="#" aria-current="page">
						Customers
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="#">
						Integrations
					</Link>
				</NavbarItem> */}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex" isActive={pathname === '/login'}>
          <Link href="/login" as={NextLink}>
            Login
          </Link>
        </NavbarItem>
        {/* <NavbarItem>
					<Button as={Link} color="primary" href="#" variant="flat">
						Sign Up
					</Button>
				</NavbarItem> */}
      </NavbarContent>
    </VendorNavbar>
  )
}
