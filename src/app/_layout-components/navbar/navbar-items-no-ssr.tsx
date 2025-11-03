'use client'

import dynamic from 'next/dynamic'

const NavbarItems = dynamic(() => import('./navbar-items'), {
  ssr: false,
})

export default function NavbarItemsNoSSR() {
  return <NavbarItems />
}
