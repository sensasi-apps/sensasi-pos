import RedirectIfUnauthenticated from '@/components/redirect-if-unauthenticated'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RedirectIfUnauthenticated />
      <div className="container mx-auto p-8">{children}</div>
    </>
  )
}
