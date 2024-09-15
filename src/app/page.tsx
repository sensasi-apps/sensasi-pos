import { Footer } from './_page-sections/footer'
import { Hero } from './_page-sections/hero'
import { Features } from './_page-sections/features'
import { Faq } from './_page-sections/faq'
import { Cta } from './_page-sections/cta'

export default function Home() {
  return (
    <>
      <main>
        <Hero />

        <Features />

        <Faq />

        <Cta />
      </main>

      <Footer />
    </>
  )
}
