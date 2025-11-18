'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from '@/lib/animations'

const features = [
  {
    title: 'Therapeuten-Netzwerk',
    description: 'Über 5.000 verifizierte Therapeuten in ganz Österreich',
  },
  {
    title: 'Kostenloses Wissen',
    description: 'Fachbeiträge und Ratgeber zu psychischer Gesundheit',
  },
  {
    title: 'DSGVO-konform',
    description: 'Höchste Datenschutzstandards für Ihre sensiblen Daten',
  },
]

export default function FindMyTherapy() {
  const ref = useRef(null)
  const isInView = useInView(ref, viewportOnce)

  return (
    <section
      id="findmytherapy"
      ref={ref}
      className="py-32 px-6 lg:px-8 bg-primary-50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="space-y-16">
          {/* Header */}
          <motion.div
            {...fadeInUp}
            animate={isInView ? fadeInUp.animate : fadeInUp.initial}
            className="max-w-3xl"
          >
            <p className="text-primary-600 text-sm font-medium uppercase tracking-wider mb-6">
              Founder
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-8 tracking-tight">
              <span className="relative inline-block">
                FindMyTherapy
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-primary-200/60 -z-10 transform -skew-x-2" />
              </span>
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-neutral-600 leading-relaxed">
              <p>
                Als Founder von{' '}
                <a
                  href="https://findmytherapy.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block"
                >
                  <span className="text-primary-700 font-medium hover:text-primary-800 transition-colors">
                    FindMyTherapy
                  </span>
                  <span className="absolute -bottom-0.5 left-0 w-full h-1.5 bg-primary-200/70 -z-10" />
                </a>{' '}
                arbeite ich daran, den Zugang zu psychotherapeutischer Versorgung in Österreich zu verbessern.
              </p>

              <p>
                Die Plattform verbindet Menschen mit verifizierten Psychotherapeuten und bietet{' '}
                <span className="relative inline-block">
                  <span className="text-primary-700 font-medium">kostenloses Expertenwissen</span>
                  <span className="absolute -bottom-0.5 left-0 w-full h-1.5 bg-primary-200/70 -z-10" />
                </span>{' '}
                zu psychischer Gesundheit – von Panikattacken über Stress bis hin zu Burnout.
              </p>

              <p>
                Als klinischer Experte im Gründungsteam bringe ich meine Erfahrung aus Verhaltenstherapie
                und Krisenintervention ein, um eine Plattform zu schaffen, die wirklich hilft.
              </p>
            </div>

            <div className="mt-10">
              <a
                href="https://findmytherapy.net"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-primary-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                FindMyTherapy besuchen
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Features Grid */}
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
                <div className="h-full p-8 rounded-2xl bg-white hover:bg-primary-100/50 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-soft">
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
