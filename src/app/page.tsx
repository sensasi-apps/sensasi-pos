import { redirect } from 'next/navigation'

export default function Home() {
  if (process.env.NODE_ENV === 'production') {
    redirect('/coming-soon')
  } else {
    redirect('/dashboard')
  }
}
