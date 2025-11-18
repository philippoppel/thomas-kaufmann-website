'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from '@/lib/animations'

const focusAreas = [
  {
    title: 'Angst & Panik',
    description: 'Werkzeuge gegen Angstkreisläufe. Verstehen, beruhigen, Vertrauen aufbauen.',
    methods: 'Expositionstherapie · Entspannungstechniken',
    number: '01',
  },
  {
    title: 'Depression & Stimmung',
    description: 'Aktivierung, Struktur und neue Perspektiven für mehr Lebensqualität.',
    methods: 'Verhaltensaktivierung · Kognitive Therapie',
    number: '02',
  },
  {
    title: 'Stress & Burnout',
    description: 'Grenzen setzen, Belastungen reduzieren, nachhaltige Resilienz entwickeln.',
    methods: 'Stressmanagement · Selbstfürsorge',
    number: '03',
  },
  {
    title: 'Krisenintervention',
    description: 'Akute Unterstützung bei Verlust, Trauma oder plötzlichen Veränderungen.',
    methods: 'Stabilisierung · Traumafokussierte VT',
    number: '04',
  },
]

export default function Focus() {
  const ref = useRef(null)
  const isInView = useInView(ref, viewportOnce)

  return (
    <section
      id="focus"
      ref={ref}
      className="py-32 px-6 lg:px-8 bg-gradient-to-b from-white to-primary-50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          {...fadeInUp}
          animate={isInView ? fadeInUp.animate : fadeInUp.initial}
          className="text-center space-y-6 mb-20"
        >
          <p className="text-primary-600 text-sm font-medium uppercase tracking-wider">
            Schwerpunkte
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight">
            <span className="relative inline-block">
              Wobei ich Sie unterstütze
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-primary-200/60 -z-10 transform -skew-x-2" />
            </span>
          </h2>

          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Evidenzbasierte Verhaltenstherapie für Ihre individuellen Herausforderungen
          </p>
        </motion.div>

        {/* Cards Grid with Stagger Animation */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="grid md:grid-cols-2 gap-8"
        >
          {focusAreas.map((area) => (
            <motion.div
              key={area.title}
              variants={staggerItem}
              className="group relative bg-white rounded-3xl p-10 shadow-soft hover:shadow-soft-lg transition-all duration-500 ease-out border border-neutral-100 hover:-translate-y-2"
            >
              {/* Number */}
              <div className="absolute top-8 right-8 text-7xl font-bold text-neutral-100 group-hover:text-primary-100 transition-colors duration-500">
                {area.number}
              </div>

              {/* Content */}
              <div className="relative space-y-4">
                <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900">
                  {area.title}
                </h3>

                <p className="text-lg text-neutral-600 leading-relaxed">
                  {area.description}
                </p>

                <div className="pt-6 mt-6 border-t border-neutral-200 group-hover:border-primary-300 transition-colors duration-500">
                  <p className="text-sm text-primary-700 font-medium">
                    {area.methods}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          {...fadeInUp}
          animate={isInView ? fadeInUp.animate : fadeInUp.initial}
          transition={{ ...fadeInUp.transition, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-white rounded-2xl px-10 py-8 shadow-soft border border-primary-100 max-w-2xl hover:shadow-soft-lg hover:-translate-y-2 transition-all duration-500 ease-out">
            <p className="text-neutral-700 text-lg leading-relaxed">
              Sie sind sich nicht sicher, ob Ihr Anliegen hier aufgeführt ist?
              <br />
              <span className="text-primary-700 font-medium">
                Kontaktieren Sie mich für ein unverbindliches Erstgespräch.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
