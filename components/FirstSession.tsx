'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from '@/lib/animations'

const sessionInfo = [
  {
    label: 'Dauer',
    value: 'ca. 50 Minuten',
    description: 'Eine therapeutische Stunde',
  },
  {
    label: 'Ort',
    value: 'Praxis oder Online',
    description: 'Domgasse 14, 4020 Linz oder Videogespräch',
  },
  {
    label: 'Kosten',
    value: '€ 80',
    description: 'Wie eine reguläre Therapiestunde',
  },
  {
    label: 'Anmeldung',
    value: 'Nach Vereinbarung',
    description: 'Per E-Mail oder Telefon',
  },
]

export default function FirstSession() {
  const ref = useRef(null)
  const isInView = useInView(ref, viewportOnce)

  return (
    <section
      id="firstsession"
      ref={ref}
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-primary-50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="space-y-10 sm:space-y-12 lg:space-y-16">
          {/* Header */}
          <motion.div
            {...fadeInUp}
            animate={isInView ? fadeInUp.animate : fadeInUp.initial}
            className="max-w-4xl"
          >
            <p className="text-primary-600 text-sm font-medium uppercase tracking-wider mb-6">
              Erstgespräch
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-8 tracking-tight">
              <span className="relative inline-block">
                Der erste Schritt
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-primary-200/60 -z-10 transform -skew-x-2" />
              </span>
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-neutral-600 leading-relaxed">
              <p>
                Der erste Schritt in die Psychotherapie ist oft der schwerste – umso wichtiger ist mir,
                Ihnen das Erstgespräch so angenehm wie möglich zu gestalten. Wenn Sie einen Ersttermin
                bei mir vereinbaren, erwartet Sie ein{' '}
                <span className="relative inline-block">
                  <span className="text-primary-700 font-medium">unverbindliches Kennenlern-Gespräch</span>
                  <span className="absolute -bottom-0.5 left-0 w-full h-1.5 bg-primary-200/70 -z-10" />
                </span>{' '}
                in geschützter Atmosphäre.
              </p>

              <p>
                In dieser ersten Einheit haben Sie Gelegenheit, mir Ihr Anliegen zu schildern und Fragen zu stellen.
                Wir sprechen über Ihre aktuelle Situation, Ihre Erwartungen an die Therapie und besprechen gemeinsam,
                ob und wie ich Sie unterstützen kann.
              </p>
            </div>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {sessionInfo.map((info) => (
              <motion.div
                key={info.label}
                variants={staggerItem}
                className="bg-white rounded-2xl p-6 shadow-soft"
              >
                <p className="text-sm text-neutral-500 font-medium mb-1">{info.label}</p>
                <p className="text-xl font-bold text-neutral-900 mb-2">{info.value}</p>
                <p className="text-sm text-neutral-600">{info.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Ablauf */}
          <motion.div
            {...fadeInUp}
            animate={isInView ? fadeInUp.animate : fadeInUp.initial}
            transition={{ ...fadeInUp.transition, delay: 0.15 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-soft"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
              Was Sie erwartet
            </h3>
            <div className="space-y-4 text-lg text-neutral-600 leading-relaxed">
              <p>
                Ebenso erhalten Sie Einblick in meine Arbeitsweise und wir klären organisatorische Punkte
                wie Rahmenbedingungen, Frequenz der Sitzungen und Honorar.
              </p>
              <p>
                <strong className="text-neutral-900">Ziel des Erstgesprächs</strong> ist es herauszufinden,
                ob die Chemie stimmt und ob wir uns eine Zusammenarbeit vorstellen können – für Sie völlig
                ohne Verpflichtung. Sie entscheiden im Anschluss in Ruhe, ob Sie die Therapie bei mir beginnen möchten.
              </p>
              <p>
                Sollte ich den Eindruck gewinnen, dass ein anderes Angebot besser für Sie geeignet ist,
                werde ich das offen mit Ihnen besprechen und Ihnen bei Bedarf bei der Vermittlung helfen.
              </p>
            </div>
          </motion.div>

          {/* Wichtige Hinweise */}
          <motion.div
            {...fadeInUp}
            animate={isInView ? fadeInUp.animate : fadeInUp.initial}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Verschwiegenheit */}
            <div className="bg-white rounded-2xl p-8 border-l-4 border-primary-400">
              <h4 className="text-xl font-bold text-neutral-900 mb-4">Verschwiegenheit</h4>
              <p className="text-neutral-600 leading-relaxed">
                Alles, was wir besprechen, unterliegt der strengen psychotherapeutischen Schweigepflicht
                gemäß § 15 Psychotherapiegesetz. Ihre Privatsphäre ist mir sehr wichtig.
              </p>
            </div>

            {/* Supervision */}
            <div className="bg-white rounded-2xl p-8 border-l-4 border-primary-400">
              <h4 className="text-xl font-bold text-neutral-900 mb-4">Supervision</h4>
              <p className="text-neutral-600 leading-relaxed">
                Da ich mich in Ausbildung unter Supervision befinde, wird meine Arbeit regelmäßig anonymisiert
                mit einem erfahrenen Lehrtherapeuten reflektiert – ein zusätzliches Qualitätsmerkmal.
              </p>
            </div>
          </motion.div>

          {/* Praktische Hinweise */}
          <motion.div
            {...fadeInUp}
            animate={isInView ? fadeInUp.animate : fadeInUp.initial}
            transition={{ ...fadeInUp.transition, delay: 0.25 }}
            className="bg-primary-100/50 rounded-2xl p-8"
          >
            <h4 className="text-xl font-bold text-neutral-900 mb-4">Praktische Hinweise</h4>
            <ul className="space-y-3 text-neutral-600">
              <li className="flex items-start gap-3">
                <span className="text-primary-600 mt-1">•</span>
                <span>Bitte planen Sie ein, ein paar Minuten vor Ihrem Termin da zu sein.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 mt-1">•</span>
                <span>
                  Falls Sie einen Termin nicht wahrnehmen können, bitte ich um rechtzeitige Absage
                  (mindestens <strong className="text-neutral-900">24 Stunden</strong> vorher).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 mt-1">•</span>
                <span>
                  Sie müssen nichts Besonderes vorbereiten oder mitbringen – relevante Befunde können
                  hilfreich sein, sind aber keine Voraussetzung.
                </span>
              </li>
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.div
            {...fadeInUp}
            animate={isInView ? fadeInUp.animate : fadeInUp.initial}
            transition={{ ...fadeInUp.transition, delay: 0.3 }}
            className="text-center"
          >
            <p className="text-xl text-neutral-700 mb-6">
              Der erste Schritt ist getan – alles Weitere ergibt sich Schritt für Schritt im Prozess.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-700 text-white rounded-2xl font-medium hover:bg-primary-800 transition-all duration-500 ease-out hover:shadow-soft-lg hover:-translate-y-1"
            >
              Erstgespräch vereinbaren
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
