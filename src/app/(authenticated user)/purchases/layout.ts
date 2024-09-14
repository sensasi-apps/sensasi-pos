import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pembelian — ' + process.env.NEXT_PUBLIC_APP_NAME,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
