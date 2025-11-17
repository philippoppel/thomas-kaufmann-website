'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-brown text-light-cream py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h4 className="font-serif text-xl font-bold text-primary-beige mb-4">
              Thomas Kaufmann, BA pth.
            </h4>
            <p className="text-white/80 text-sm leading-relaxed">
              Psychotherapeut in Ausbildung unter Supervision
              <br />
              Verhaltenstherapie · Krisenintervention
              <br />
              <span className="text-xs">Sigmund Freud Universität Wien</span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-bold text-primary-beige mb-4">
              Navigation
            </h4>
            <nav className="space-y-2 text-sm">
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="block text-white/80 hover:text-primary-terracotta transition-colors"
              >
                Start
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="block text-white/80 hover:text-primary-terracotta transition-colors"
              >
                Über mich
              </a>
              <a
                href="#focus"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#focus')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="block text-white/80 hover:text-primary-terracotta transition-colors"
              >
                Schwerpunkte
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="block text-white/80 hover:text-primary-terracotta transition-colors"
              >
                Kontakt
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-xl font-bold text-primary-beige mb-4">
              Kontakt
            </h4>
            <div className="space-y-2 text-sm text-white/80">
              <p>
                <a href="mailto:office@thomas-kaufmann.at" className="hover:text-primary-terracotta transition-colors">
                  office@thomas-kaufmann.at
                </a>
              </p>
              <p>
                <a href="tel:+436506015855" className="hover:text-primary-terracotta transition-colors">
                  +43 650 601 5855
                </a>
              </p>
              <p className="pt-2">
                Erlbachweg 28
                <br />
                4060 Leonding
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
          <p>
            © {currentYear} Thomas Kaufmann. Alle Rechte vorbehalten.
          </p>
          <p className="mt-2 text-xs">
            Psychotherapeut in Ausbildung unter Supervision gemäß § 27 PthG
          </p>
        </div>
      </div>
    </footer>
  )
}
