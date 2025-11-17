'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    title: 'Lösungsorientiert',
    description: 'Konkrete, umsetzbare Strategien für Ihren Alltag',
  },
  {
    title: 'Auf Augenhöhe',
    description: 'Transparente, respektvolle Zusammenarbeit',
  },
  {
    title: 'Krisenkompetenz',
    description: 'Professionelle Unterstützung in akuten Situationen',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      ref={ref}
      className="py-32 px-6 lg:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-20"
        >
          {/* Header */}
          <div className="max-w-3xl">
            <p className="text-accent-600 text-sm font-medium uppercase tracking-wider mb-6">
              Über mich
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-8 tracking-tight">
              Klarheit in Krisenmomenten
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-neutral-600 leading-relaxed">
              <p>
                Als Psychotherapeut in Ausbildung unter Supervision verbinde ich fundierte{' '}
                <span className="text-accent-700 font-medium">Verhaltenstherapie</span> mit meiner
                langjährigen Erfahrung als{' '}
                <span className="text-accent-700 font-medium">Notfallsanitäter</span>.
              </p>

              <p>
                Diese Kombination ermöglicht mir einen besonderen Zugang: Ich verstehe akute
                Belastungen und biete gleichzeitig wissenschaftlich fundierte Werkzeuge für
                nachhaltige Veränderung.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-neutral-200">
              <p className="text-neutral-700">
                Ausbildung an der <strong className="text-neutral-900">Sigmund Freud Universität Wien</strong>
                {' · '}
                Notfallsanitäter mit <strong className="text-neutral-900">NKA/NKV</strong> Qualifikation
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group"
              >
                <div className="h-full p-8 rounded-2xl bg-primary-100/50 hover:bg-primary-100 transition-all duration-300 ease-out hover:-translate-y-1">
                  <div className="w-12 h-1 bg-accent-600 rounded-full mb-6" />
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
