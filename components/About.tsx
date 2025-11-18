'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from '@/lib/animations'

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
  const isInView = useInView(ref, viewportOnce)

  return (
    <section
      id="about"
      ref={ref}
      className="py-32 px-6 lg:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="space-y-20">
          {/* Header */}
          <motion.div
            {...fadeInUp}
            animate={isInView ? fadeInUp.animate : fadeInUp.initial}
            className="max-w-3xl"
          >
            <p className="text-primary-600 text-sm font-medium uppercase tracking-wider mb-6">
              Über mich
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-8 tracking-tight">
              <span className="relative inline-block">
                Klarheit in Krisenmomenten
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-primary-200/60 -z-10 transform -skew-x-2" />
              </span>
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-neutral-600 leading-relaxed">
              <p>
                Als Psychotherapeut in Ausbildung unter Supervision verbinde ich fundierte{' '}
                <span className="relative inline-block">
                  <span className="text-primary-700 font-medium">Verhaltenstherapie</span>
                  <span className="absolute -bottom-0.5 left-0 w-full h-1.5 bg-primary-200/70 -z-10" />
                </span>{' '}
                mit meiner langjährigen Erfahrung als{' '}
                <span className="relative inline-block">
                  <span className="text-primary-700 font-medium">Notfallsanitäter</span>
                  <span className="absolute -bottom-0.5 left-0 w-full h-1.5 bg-primary-200/70 -z-10" />
                </span>.
              </p>

              <p>
                Diese Kombination ermöglicht mir einen besonderen Zugang: Ich verstehe akute
                Belastungen und biete gleichzeitig wissenschaftlich fundierte Werkzeuge für
                nachhaltige Veränderung.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-primary-200">
              <p className="text-neutral-700">
                Ausbildung an der <strong className="text-neutral-900">Sigmund Freud Universität Wien</strong>
                {' · '}
                Notfallsanitäter mit <strong className="text-neutral-900">NKA/NKV</strong> Qualifikation
              </p>
            </div>
          </motion.div>

          {/* Features Grid with Stagger Animation */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="grid md:grid-cols-3 gap-8"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={staggerItem}
                className="group"
              >
                <div className="h-full p-8 rounded-2xl bg-primary-100/50 hover:bg-primary-100 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-soft">
                  <div className="w-12 h-1 bg-primary-500 rounded-full mb-6 transition-all duration-500 ease-out group-hover:w-16" />
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
