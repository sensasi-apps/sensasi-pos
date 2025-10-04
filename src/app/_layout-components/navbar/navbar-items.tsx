'use client'

import useAuth from '@/hooks/use-auth'
import { GuestNavbarItems } from './components/guest-navbar-items'
import { AuthNavbarItems } from './components/auth-navbar-items'

export default function NavbarItems() {
  const { user } = useAuth()

  if (!user) {
    return <GuestNavbarItems />
  }

  return <AuthNavbarItems />
}
