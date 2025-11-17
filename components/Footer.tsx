'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-900 text-neutral-300 py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h4 className="font-serif text-2xl font-bold text-white mb-4">
              Thomas Kaufmann
            </h4>
            <p className="text-neutral-400 leading-relaxed mb-2">
              BA pth.
            </p>
            <p className="text-sm text-neutral-500 leading-relaxed">
              Psychotherapeut in Ausbildung unter Supervision
              <br />
              Verhaltenstherapie · Krisenintervention
              <br className="mb-2" />
              Sigmund Freud Universität Wien
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              Navigation
            </h4>
            <nav className="space-y-3 text-sm">
              {['Start', 'Über mich', 'Schwerpunkte', 'Kontakt'].map((item) => {
                const href = `#${item.toLowerCase().replace(' ', '-').replace('ü', 'u')}`
                return (
                  <a
                    key={item}
                    href={href === '#start' ? '#hero' : href === '#über-mich' ? '#about' : href}
                    onClick={(e) => {
                      e.preventDefault()
                      const target = href === '#start' ? '#hero' : href === '#über-mich' ? '#about' : href
                      document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="block text-neutral-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                )
              })}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              Kontakt
            </h4>
            <div className="space-y-3 text-sm">
              <p>
                <a
                  href="mailto:office@thomas-kaufmann.at"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  office@thomas-kaufmann.at
                </a>
              </p>
              <p>
                <a
                  href="tel:+436506015855"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  +43 650 601 5855
                </a>
              </p>
              <p className="text-neutral-500 pt-2">
                Erlbachweg 28
                <br />
                4060 Leonding
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
            <p>
              © {currentYear} Thomas Kaufmann. Alle Rechte vorbehalten.
            </p>
            <p className="text-xs">
              Psychotherapeut in Ausbildung unter Supervision gemäß § 27 PthG
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
