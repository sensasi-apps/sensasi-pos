import RedirectIfAuthenticated from '@/components/redirect-if-authenticated'

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <RedirectIfAuthenticated />
      {children}
    </>
  )
}
