'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

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
  const isInView = useInView(ref, { once: true, margin: '-150px' })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [30, -30])

  return (
    <section
      id="focus"
      ref={ref}
      className="py-32 px-6 lg:px-8 bg-gradient-to-b from-white to-primary-50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ y }}
          className="text-center space-y-6 mb-20"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-accent-600 text-sm font-medium uppercase tracking-wider"
          >
            Schwerpunkte
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight"
          >
            Wobei ich Sie unterstütze
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl text-neutral-600 max-w-2xl mx-auto"
          >
            Evidenzbasierte Verhaltenstherapie für Ihre individuellen Herausforderungen
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {focusAreas.map((area, index) => {
            const cardRef = useRef(null)
            const { scrollYProgress: cardProgress } = useScroll({
              target: cardRef,
              offset: ["start end", "end start"]
            })
            const cardY = useTransform(cardProgress, [0, 1], [20, -20])

            return (
              <motion.div
                key={area.title}
                ref={cardRef}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                style={{ y: cardY }}
                className="group relative bg-white rounded-3xl p-10 shadow-soft hover:shadow-soft-lg transition-all duration-700 ease-out border border-neutral-100 hover:scale-[1.02] hover:-translate-y-1"
              >
                {/* Number */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 0.4 + index * 0.08 }}
                  className="absolute top-8 right-8 text-7xl font-bold text-neutral-100 group-hover:text-accent-100 transition-colors duration-700"
                >
                  {area.number}
                </motion.div>

                {/* Content */}
                <div className="relative space-y-4">
                  <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900">
                    {area.title}
                  </h3>

                  <p className="text-lg text-neutral-600 leading-relaxed">
                    {area.description}
                  </p>

                  <div className="pt-6 mt-6 border-t border-neutral-200 group-hover:border-accent-200 transition-colors duration-700">
                    <p className="text-sm text-accent-700 font-medium">
                      {area.methods}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-white rounded-2xl px-10 py-8 shadow-soft border border-neutral-100 max-w-2xl hover:shadow-soft-lg hover:scale-[1.02] transition-all duration-500 ease-out">
            <p className="text-neutral-700 text-lg leading-relaxed">
              Sie sind sich nicht sicher, ob Ihr Anliegen hier aufgeführt ist?
              <br />
              <span className="text-accent-700 font-medium">
                Kontaktieren Sie mich für ein unverbindliches Erstgespräch.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
