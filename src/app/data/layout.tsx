import Navbar from '@/components/navbar'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar />

      <main className="container mx-auto p-6">{children}</main>
    </>
  )
}