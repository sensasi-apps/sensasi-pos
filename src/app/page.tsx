import { Footer } from './_page-sections/footer'
import { Hero } from './_page-sections/hero'
import { Faq } from './_page-sections/faq'
import { Cta } from './_page-sections/cta'
import RedirectIfAuthenticated from '@/components/redirect-if-authenticated'

export default function Home() {
  return (
    <>
      <RedirectIfAuthenticated />
      <main>
        <Hero />
        <Faq />
        <Cta />
      </main>

      <Footer />
    </>
  )
}
