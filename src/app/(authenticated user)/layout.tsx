import type { ReactNode } from 'react'

export default function Layout({
  children,
  navbar,
}: Readonly<{
  children: ReactNode
  navbar: ReactNode
}>) {
  return (
    <>
      {navbar}

      <main className="container mx-auto p-6">{children}</main>
    </>
  )
}
