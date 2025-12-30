'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from '@/lib/animations'

const focusAreas = [
  {
    title: 'Angststörungen & Panik',
    description: 'Ständige Sorgen, Phobien, Panikattacken – wir entwickeln Werkzeuge gegen Angstkreisläufe und bauen Vertrauen auf.',
    number: '01',
  },
  {
    title: 'Depression & Stimmung',
    description: 'Antriebslosigkeit, Niedergeschlagenheit, Hoffnungslosigkeit – gemeinsam aktivieren wir neue Perspektiven und Lebensqualität.',
    number: '02',
  },
  {
    title: 'Stress & Burnout',
    description: 'Überforderung im Beruf oder Alltag, Erschöpfungszustände – wir lernen Grenzen zu setzen und nachhaltige Resilienz zu entwickeln.',
    number: '03',
  },
  {
    title: 'Trauma & Krisen',
    description: 'Bewältigung von Schicksalsschlägen, Verlust, Unfall oder Krankheit – professionelle Stabilisierung und Begleitung.',
    number: '04',
  },
  {
    title: 'Selbstwert & Identität',
    description: 'Selbstunsicherheit, Identitätsfindung, persönliche Weiterentwicklung – stärken Sie Ihr Selbstbewusstsein.',
    number: '05',
  },
  {
    title: 'Beziehung & Familie',
    description: 'Paar- und Ehekonflikte, Kommunikationsschwierigkeiten, familiäre Krisen – verbessern Sie Ihre Beziehungen.',
    number: '06',
  },
  {
    title: 'Psychosomatik',
    description: 'Körperliche Symptome ohne organische Ursache, die mit seelischem Stress zusammenhängen – verstehen Sie die Verbindung.',
    number: '07',
  },
]

const targetGroups = [
  { label: 'Jugendliche', description: 'Ab 14 Jahren' },
  { label: 'Erwachsene', description: 'Einzeltherapie' },
  { label: 'Paare', description: 'Paartherapie' },
]

export default function Focus() {
  const ref = useRef(null)
  const isInView = useInView(ref, viewportOnce)

  return (
    <section
      id="focus"
      ref={ref}
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-primary-50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          {...fadeInUp}
          animate={isInView ? fadeInUp.animate : fadeInUp.initial}
          className="text-center space-y-6 mb-12"
        >
          <p className="text-primary-600 text-sm font-medium uppercase tracking-wider">
            Therapieangebot & Schwerpunkte
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
            <span className="relative inline-block">
              Wobei ich Sie unterstütze
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-primary-200/60 -z-10 transform -skew-x-2" />
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto">
            Ich biete Psychotherapie für Jugendliche, Erwachsene sowie Paare an.
            Wichtig ist mir, Ihnen mit meinem vielfältigen Hintergrund fundiert und individuell zur Seite zu stehen.
          </p>
        </motion.div>

        {/* Target Groups */}
        <motion.div
          {...fadeInUp}
          animate={isInView ? fadeInUp.animate : fadeInUp.initial}
          transition={{ ...fadeInUp.transition, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {targetGroups.map((group) => (
            <div
              key={group.label}
              className="bg-white rounded-full px-6 py-3 shadow-soft border border-primary-100"
            >
              <span className="font-medium text-neutral-900">{group.label}</span>
              <span className="text-neutral-500 ml-2">· {group.description}</span>
            </div>
          ))}
        </motion.div>

        {/* Cards Grid with Stagger Animation */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {focusAreas.map((area) => (
            <motion.div
              key={area.title}
              variants={staggerItem}
              className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-soft hover:shadow-soft-lg transition-all duration-500 ease-out border border-neutral-100 hover:-translate-y-2"
            >
              {/* Number */}
              <div className="absolute top-6 right-6 text-5xl font-bold text-neutral-100 group-hover:text-primary-100 transition-colors duration-500">
                {area.number}
              </div>

              {/* Content */}
              <div className="relative space-y-3">
                <h3 className="text-xl font-bold text-neutral-900 pr-12">
                  {area.title}
                </h3>

                <p className="text-neutral-600 leading-relaxed">
                  {area.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          {...fadeInUp}
          animate={isInView ? fadeInUp.animate : fadeInUp.initial}
          transition={{ ...fadeInUp.transition, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white rounded-2xl px-10 py-8 shadow-soft border border-primary-100 max-w-3xl hover:shadow-soft-lg hover:-translate-y-2 transition-all duration-500 ease-out">
            <p className="text-neutral-700 text-lg leading-relaxed">
              Dies sind lediglich Beispiele – oft überschneiden sich Problembereiche auch oder lassen sich gar nicht exakt benennen.
              <br className="hidden md:block" />
              <span className="text-primary-700 font-medium">
                Entscheidend ist: Ihr individuelles Anliegen steht im Mittelpunkt.
              </span>
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          {...fadeInUp}
          animate={isInView ? fadeInUp.animate : fadeInUp.initial}
          transition={{ ...fadeInUp.transition, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center justify-center px-8 py-4 bg-primary-700 text-white rounded-2xl font-medium hover:bg-primary-800 transition-all duration-500 ease-out hover:shadow-soft-lg hover:-translate-y-1"
          >
            Unverbindliches Erstgespräch vereinbaren
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
