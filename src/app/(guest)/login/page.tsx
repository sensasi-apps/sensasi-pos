import type { Metadata } from 'next'
import LoginForm from './login-form'

export const metadata: Metadata = {
  title: 'Masuk — Sensasi POS',
  description: 'Halaman masuk untuk mengakses aplikasi Sensasi POS',
}

export default function Page() {
  return <LoginForm />
}
