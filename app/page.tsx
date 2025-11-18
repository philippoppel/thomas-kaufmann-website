import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import FindMyTherapy from '@/components/FindMyTherapy'
import Focus from '@/components/Focus'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <FindMyTherapy />
        <Focus />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
