'use client'

import Navbar from '@/components/navbar'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  if (process.env.NODE_ENV === 'production') {
    router.push('/coming-soon')
  }

  return <Navbar />
}
