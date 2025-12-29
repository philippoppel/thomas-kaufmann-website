'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MailIcon, CalendarIcon, PhoneIcon, MapPinIcon } from './Icons'
import { fadeInUp, viewportOnce } from '@/lib/animations'

const contactInfo = [
  {
    icon: MailIcon,
    label: 'E-Mail Allgemein',
    value: 'praxis@thomas-kaufmann.at',
    href: 'mailto:praxis@thomas-kaufmann.at',
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
    value: 'wird in Kürze bekanntgegeben',
    href: null,
  },
  {
    icon: MapPinIcon,
    label: 'Praxisstandort',
    value: 'Domgasse 14, 4020 Linz',
    href: 'https://maps.google.com/?q=Domgasse+14,+4020+Linz',
  },
]

const pricing = [
  { label: 'Einzelgespräch', duration: '50 Min.', price: '€ 80' },
  { label: 'Einzelgespräch', duration: '100 Min.', price: '€ 160' },
  { label: 'Paar-/Gruppengespräch', duration: '80 Min.', price: '€ 160' },
  { label: 'Beratung für Unternehmen', duration: '50 Min.', price: '€ 150*' },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, viewportOnce)

  return (
    <section
      id="contact"
      ref={ref}
      className="py-32 px-6 lg:px-8 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.1),transparent_60%)]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          {...fadeInUp}
          animate={isInView ? fadeInUp.animate : fadeInUp.initial}
          className="text-center space-y-8 mb-16"
        >
          <p className="text-primary-200 text-sm font-medium uppercase tracking-wider">
            Kontakt
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Bereit für den ersten Schritt?
          </h2>

          <p className="text-xl text-primary-100 max-w-2xl mx-auto leading-relaxed">
            Vereinbaren Sie ein unverbindliches Erstgespräch.
            Ich freue mich darauf, Sie kennenzulernen.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {contactInfo.map((item, index) => {
            const IconComponent = item.icon
            const isClickable = item.href !== null

            const cardContent = (
              <div className="flex items-start gap-5">
                <div className={`w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center text-primary-700 flex-shrink-0 transition-transform duration-500 ease-out ${
                  isClickable ? 'group-hover:scale-110' : ''
                }`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-neutral-500 font-medium mb-2">
                    {item.label}
                  </p>
                  <p className={`text-lg font-semibold break-words ${
                    isClickable ? 'text-neutral-900' : 'text-neutral-500 italic'
                  }`}>
                    {item.value}
                  </p>
                </div>
              </div>
            )

            const cardClasses = `group block rounded-2xl p-8 transition-all duration-500 ease-out ${
              isClickable
                ? 'bg-white shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer'
                : 'bg-white/70 border border-white/50'
            }`

            return isClickable ? (
              <motion.a
                key={item.label}
                href={item.href!}
                target={item.label === 'Praxisstandort' ? '_blank' : undefined}
                rel={item.label === 'Praxisstandort' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cardClasses}
              >
                {cardContent}
              </motion.a>
            ) : (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cardClasses}
              >
                {cardContent}
              </motion.div>
            )
          })}
        </div>

        {/* Pricing Table */}
        <motion.div
          {...fadeInUp}
          animate={isInView ? fadeInUp.animate : fadeInUp.initial}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20 mb-8"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Preise
          </h3>
          <div className="grid gap-4">
            {pricing.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-4 border-b border-white/10 last:border-0"
              >
                <div className="flex-1">
                  <p className="text-white font-medium">{item.label}</p>
                  <p className="text-primary-200 text-sm">{item.duration}</p>
                </div>
                <p className="text-2xl font-bold text-white">{item.price}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-primary-200 mt-6 text-center">
            * Preise exkl. USt. · Psychotherapeutische Einheiten sind nach § 6 UStG umsatzsteuerbefreit.
          </p>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          {...fadeInUp}
          animate={isInView ? fadeInUp.animate : fadeInUp.initial}
          transition={{ ...fadeInUp.transition, delay: 0.3 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Wichtige Informationen
          </h3>
          <div className="grid md:grid-cols-2 gap-8 text-white">
            <div>
              <p className="text-primary-100 text-sm font-medium mb-2">Sitzungsdauer</p>
              <p className="text-lg">50 Minuten (therapeutische Stunde)</p>
            </div>
            <div>
              <p className="text-primary-100 text-sm font-medium mb-2">Termine</p>
              <p className="text-lg">Nach Vereinbarung</p>
            </div>
            <div>
              <p className="text-primary-100 text-sm font-medium mb-2">Standort</p>
              <p className="text-lg">Domgasse 14, 4020 Linz (2. Stock, Lift vorhanden)</p>
            </div>
            <div>
              <p className="text-primary-100 text-sm font-medium mb-2">Online-Therapie</p>
              <p className="text-lg">Videositzungen möglich</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-primary-100 text-sm font-medium mb-2">Kostenerstattung</p>
              <p className="leading-relaxed">
                Als Psychotherapeut in Ausbildung unter Supervision ist derzeit keine Krankenkassen-Refundierung möglich.
                Gerne informiere ich Sie über mögliche Kostenzuschüsse durch private Zusatzversicherungen.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p className="text-sm text-primary-200">
              Psychotherapeut in Ausbildung unter Supervision gemäß § 27 PthG
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
