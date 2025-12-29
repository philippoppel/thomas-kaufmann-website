import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Focus from '@/components/Focus'
import Methods from '@/components/Methods'
import FirstSession from '@/components/FirstSession'
import FindMyTherapy from '@/components/FindMyTherapy'
import Map from '@/components/Map'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Focus />
        <Methods />
        <FirstSession />
        <FindMyTherapy />
        <Map />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
