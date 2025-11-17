'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MailIcon, CalendarIcon, PhoneIcon, MapPinIcon } from './Icons'

const contactInfo = [
  {
    icon: MailIcon,
    label: 'E-Mail Allgemein',
    value: 'office@thomas-kaufmann.at',
    href: 'mailto:office@thomas-kaufmann.at',
  },
  {
    icon: CalendarIcon,
    label: 'Terminvereinbarung',
    value: 'termin@thomas-kaufmann.at',
    href: 'mailto:termin@thomas-kaufmann.at',
  },
  {
    icon: PhoneIcon,
    label: 'Telefon',
    value: '+43 650 601 5855',
    href: 'tel:+436506015855',
  },
  {
    icon: MapPinIcon,
    label: 'Praxisstandort',
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
      className="py-32 px-6 lg:px-8 bg-gradient-to-br from-accent-800 via-accent-700 to-accent-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.1),transparent_60%)]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-8 mb-16"
        >
          <p className="text-accent-200 text-sm font-medium uppercase tracking-wider">
            Kontakt
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Bereit für den ersten Schritt?
          </h2>

          <p className="text-xl text-accent-100 max-w-2xl mx-auto leading-relaxed">
            Vereinbaren Sie ein unverbindliches Erstgespräch.
            Ich freue mich darauf, Sie kennenzulernen.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {contactInfo.map((item, index) => {
            const IconComponent = item.icon
            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.label === 'Praxisstandort' ? '_blank' : undefined}
                rel={item.label === 'Praxisstandort' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-white/95 backdrop-blur-sm rounded-2xl p-8 hover:bg-white transition-all duration-300 ease-out shadow-soft hover:shadow-soft-lg hover:-translate-y-1"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center text-accent-700 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 ease-out">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-neutral-500 font-medium mb-2">
                      {item.label}
                    </p>
                    <p className="text-lg font-semibold text-neutral-900 break-words">
                      {item.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            )
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Wichtige Informationen
          </h3>
          <div className="grid md:grid-cols-2 gap-8 text-white">
            <div>
              <p className="text-accent-100 text-sm font-medium mb-2">Sitzungsdauer</p>
              <p className="text-lg">50 Minuten</p>
            </div>
            <div>
              <p className="text-accent-100 text-sm font-medium mb-2">Termine</p>
              <p className="text-lg">Nach Vereinbarung</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-accent-100 text-sm font-medium mb-2">Kostenerstattung</p>
              <p className="leading-relaxed">
                Gerne informiere ich Sie über mögliche Kostenzuschüsse durch Ihre Krankenkasse.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p className="text-sm text-accent-200">
              Psychotherapeut in Ausbildung unter Supervision gemäß § 27 PthG
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
