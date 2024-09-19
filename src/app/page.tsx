import { Footer } from './_page-sections/footer'
import { Hero } from './_page-sections/hero'
import { Faq } from './_page-sections/faq'
import { Cta } from './_page-sections/cta'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Faq />
        <Cta />
      </main>

      <Footer />
    </>
  )
}
