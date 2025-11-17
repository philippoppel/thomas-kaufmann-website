'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const focusAreas = [
  {
    icon: '🌱',
    title: 'Angst & Panik',
    description: 'Werkzeuge gegen Angstkreisläufe. Verstehen, beruhigen, Vertrauen aufbauen.',
    methods: 'Expositionstherapie · Entspannungstechniken',
  },
  {
    icon: '☀️',
    title: 'Depression & Stimmung',
    description: 'Aktivierung, Struktur und neue Perspektiven für mehr Lebensqualität.',
    methods: 'Verhaltensaktivierung · Kognitive Therapie',
  },
  {
    icon: '💪',
    title: 'Stress & Burnout',
    description: 'Grenzen setzen, Belastungen reduzieren, nachhaltige Resilienz entwickeln.',
    methods: 'Stressmanagement · Selbstfürsorge',
  },
  {
    icon: '🧭',
    title: 'Krisenintervention',
    description: 'Akute Unterstützung bei Verlust, Trauma oder plötzlichen Veränderungen.',
    methods: 'Stabilisierung · Traumafokussierte VT',
  },
]

export default function Focus() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="focus"
      ref={ref}
      className="py-32 px-6 lg:px-8 bg-gradient-to-br from-primary-beige/30 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-16"
        >
          <p className="text-accent-olive uppercase tracking-widest text-sm font-medium">
            Schwerpunkte
          </p>

          <h2 className="font-serif text-4xl lg:text-6xl font-bold text-dark-brown">
            Wobei ich Sie unterstütze
          </h2>

          <p className="text-xl text-text-medium max-w-2xl mx-auto">
            Evidenzbasierte Verhaltenstherapie für Ihre individuellen Herausforderungen
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {area.icon}
              </div>

              {/* Content */}
              <h3 className="font-serif text-2xl lg:text-3xl font-bold text-dark-brown mb-4">
                {area.title}
              </h3>

              <p className="text-lg text-text-medium mb-4 leading-relaxed">
                {area.description}
              </p>

              <div className="pt-4 border-t border-warm-gray/30">
                <p className="text-sm text-accent-olive font-medium">
                  {area.methods}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-terracotta/5 to-accent-olive/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white rounded-2xl px-8 py-6 shadow-md">
            <p className="text-text-medium text-lg">
              Sie sind sich nicht sicher, ob Ihr Anliegen hier aufgeführt ist?
              <br />
              <span className="text-primary-terracotta font-medium">
                Kontaktieren Sie mich für ein unverbindliches Erstgespräch.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
