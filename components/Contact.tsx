'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const contactInfo = [
  {
    icon: '📧',
    label: 'Allgemein',
    value: 'office@thomas-kaufmann.at',
    href: 'mailto:office@thomas-kaufmann.at',
  },
  {
    icon: '📅',
    label: 'Termine',
    value: 'termin@thomas-kaufmann.at',
    href: 'mailto:termin@thomas-kaufmann.at',
  },
  {
    icon: '📞',
    label: 'Telefon',
    value: '+43 650 601 5855',
    href: 'tel:+436506015855',
  },
  {
    icon: '📍',
    label: 'Standort',
    value: 'Erlbachweg 28, 4060 Leonding',
    href: 'https://maps.google.com/?q=Erlbachweg+28,+4060+Leonding',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="contact"
      ref={ref}
      className="py-32 px-6 lg:px-8 bg-gradient-to-br from-accent-olive via-primary-terracotta to-accent-olive relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent_50%)]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-16"
        >
          <p className="text-white/80 uppercase tracking-widest text-sm font-medium">
            Kontakt
          </p>

          <h2 className="font-serif text-4xl lg:text-6xl font-bold text-white">
            Bereit für den ersten Schritt?
          </h2>

          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Vereinbaren Sie ein unverbindliches Erstgespräch.
            Ich freue mich auf Ihre Nachricht.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.label === 'Standort' ? '_blank' : undefined}
              rel={item.label === 'Standort' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white/95 backdrop-blur-sm rounded-2xl p-8 hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-text-medium uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  <p className="text-lg font-medium text-dark-brown group-hover:text-primary-terracotta transition-colors">
                    {item.value}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"
        >
          <h3 className="font-serif text-2xl font-bold text-white mb-4">
            Wichtige Information
          </h3>
          <div className="space-y-3 text-white/90">
            <p>
              <strong>Sitzungsdauer:</strong> 50 Minuten · Termine nach Vereinbarung
            </p>
            <p>
              <strong>Kosten:</strong> Gerne informiere ich Sie über mögliche Kostenzuschüsse
              durch Ihre Krankenkasse
            </p>
            <p className="text-sm pt-4 text-white/70">
              Psychotherapeut in Ausbildung unter Supervision gemäß § 27 PthG
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
