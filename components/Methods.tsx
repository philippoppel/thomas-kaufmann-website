'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from '@/lib/animations'

const methods = [
  {
    title: 'Gedankenprotokoll',
    description: 'Erkennen und hinterfragen Sie automatische negative Gedanken, um neue Denkmuster zu entwickeln.',
  },
  {
    title: 'Verhaltensübungen',
    description: 'Praktische Übungen für den Alltag, die zwischen den Sitzungen durchgeführt werden.',
  },
  {
    title: 'Achtsamkeit',
    description: 'Techniken zur bewussten Wahrnehmung des gegenwärtigen Moments ohne Bewertung.',
  },
  {
    title: 'Expositionstherapie',
    description: 'Schrittweise Konfrontation mit angstauslösenden Situationen in sicherem Rahmen.',
  },
]

const strengths = [
  { label: 'Evidenzbasiert', description: 'Methoden mit nachgewiesener Wirksamkeit' },
  { label: 'Transparent', description: 'Sie wissen stets, woran wir arbeiten' },
  { label: 'Effektiv', description: 'Spürbare Verbesserungen in kurzer Zeit' },
]

export default function Methods() {
  const ref = useRef(null)
  const isInView = useInView(ref, viewportOnce)

  return (
    <section
      id="methods"
      ref={ref}
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {/* Header */}
          <motion.div
            {...fadeInUp}
            animate={isInView ? fadeInUp.animate : fadeInUp.initial}
            className="max-w-4xl"
          >
            <p className="text-primary-600 text-sm font-medium uppercase tracking-wider mb-6">
              Methoden & Ansatz
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-8 tracking-tight">
              <span className="relative inline-block">
                Verhaltenstherapie
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-primary-200/60 -z-10 transform -skew-x-2" />
              </span>
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-neutral-600 leading-relaxed">
              <p>
                Meine therapeutische Arbeit basiert auf der{' '}
                <span className="relative inline-block">
                  <span className="text-primary-700 font-medium">kognitiven Verhaltenstherapie (VT)</span>
                  <span className="absolute -bottom-0.5 left-0 w-full h-1.5 bg-primary-200/70 -z-10" />
                </span>,
                einer modernen und gut erforschten Form der Psychotherapie. Sie ist wissenschaftlich fundiert
                und gilt als sehr wirksam für eine Vielzahl psychischer Probleme.
              </p>

              <p>
                Charakteristisch für diesen Ansatz ist, dass wir{' '}
                <strong className="text-neutral-900">im Hier und Jetzt</strong> an Ihren aktuellen Anliegen arbeiten,
                anstatt ausschließlich in der Vergangenheit zu forschen. Natürlich spielen Ihre Lebenserfahrungen
                und Ihre Biografie eine Rolle – sie werden zu Beginn gemeinsam beleuchtet, um ein umfassendes
                Verständnis zu gewinnen.
              </p>

              <p className="text-2xl text-neutral-700 font-medium">
                Die Devise lautet: Was kann jetzt unternommen werden, damit es Ihnen bald besser geht?
              </p>
            </div>
          </motion.div>

          {/* Lösungsorientiertes Vorgehen */}
          <motion.div
            {...fadeInUp}
            animate={isInView ? fadeInUp.animate : fadeInUp.initial}
            transition={{ ...fadeInUp.transition, delay: 0.1 }}
            className="bg-primary-50 rounded-3xl p-8 md:p-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
              Lösungsorientiertes Vorgehen
            </h3>
            <div className="space-y-4 text-lg text-neutral-600 leading-relaxed">
              <p>
                In der Verhaltenstherapie verstehe ich mich als{' '}
                <strong className="text-neutral-900">„Helfer zur Selbsthilfe"</strong>. Das bedeutet:
                Ich arbeite nicht an Ihnen, sondern <em>mit</em> Ihnen – wir bilden ein Team, um Ihre Probleme zu bewältigen.
              </p>
              <p>
                Gemeinsam formulieren wir Ziele und erarbeiten praktikable Schritte zu deren Erreichung.
                Dabei geht es weniger um abstrakte Theorien, sondern um{' '}
                <span className="relative inline-block">
                  <span className="text-primary-700 font-medium">maßgeschneiderte Lösungen</span>
                  <span className="absolute -bottom-0.5 left-0 w-full h-1.5 bg-primary-200/70 -z-10" />
                </span>{' '}
                für Ihre Situation.
              </p>
              <p>
                Oft beginnt dies damit, dysfunktionale Denk- und Verhaltensmuster zu erkennen:
                zum Beispiel negative Gedanken, die Ihre Stimmung verschlechtern, oder Vermeidungsverhalten,
                das Ängste aufrechterhält. Diese Muster werden wir behutsam verändern.
              </p>
            </div>
          </motion.div>

          {/* Praktische Methoden */}
          <motion.div
            {...fadeInUp}
            animate={isInView ? fadeInUp.animate : fadeInUp.initial}
            transition={{ ...fadeInUp.transition, delay: 0.15 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8">
              Praktische Methoden
            </h3>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              Die Verhaltenstherapie setzt auf konkrete Übungen, die Sie zwischen den Sitzungen
              als „Hausaufgabe" durchführen können:
            </p>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              className="grid md:grid-cols-2 gap-6"
            >
              {methods.map((method) => (
                <motion.div
                  key={method.title}
                  variants={staggerItem}
                  className="group bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-soft hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="w-12 h-1 bg-primary-500 rounded-full mb-4 transition-all duration-500 ease-out group-hover:w-16" />
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2">{method.title}</h4>
                  <p className="text-neutral-600">{method.description}</p>
                </motion.div>
              ))}
            </motion.div>

            <p className="text-lg text-neutral-600 leading-relaxed mt-8">
              Solche Übungen helfen, das in der Sitzung Besprochene aktiv umzusetzen und echte Fortschritte
              im Alltag zu machen.
            </p>
          </motion.div>

          {/* Stärken */}
          <motion.div
            {...fadeInUp}
            animate={isInView ? fadeInUp.animate : fadeInUp.initial}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8">
              Stärken meines Ansatzes
            </h3>

            <div className="flex flex-wrap gap-4 mb-8">
              {strengths.map((strength) => (
                <div
                  key={strength.label}
                  className="bg-primary-100/50 rounded-full px-6 py-3"
                >
                  <span className="font-medium text-neutral-900">{strength.label}</span>
                  <span className="text-neutral-600 ml-2">· {strength.description}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4 text-lg text-neutral-600 leading-relaxed">
              <p>
                Ich bin überzeugt, dass Verständnis und eine gute therapeutische Beziehung die Grundlage
                jeder erfolgreichen Therapie bilden. Deshalb schaffe ich von Anfang an eine Atmosphäre
                von Vertrauen und Sicherheit, in der Sie offen über alles sprechen können.
              </p>
              <p>
                Innerhalb dieses Rahmens können wir auch kreative Lösungen finden und bei Bedarf Techniken
                aus anderen Therapieschulen einbeziehen. Neben den klassischen VT-Methoden nutze ich z. B.
                Elemente aus{' '}
                <span className="relative inline-block">
                  <span className="text-primary-700 font-medium">achtsamkeitsbasierten Verfahren</span>
                  <span className="absolute -bottom-0.5 left-0 w-full h-1.5 bg-primary-200/70 -z-10" />
                </span>{' '}
                oder der{' '}
                <span className="relative inline-block">
                  <span className="text-primary-700 font-medium">Schematherapie</span>
                  <span className="absolute -bottom-0.5 left-0 w-full h-1.5 bg-primary-200/70 -z-10" />
                </span>,
                wenn es hilfreich ist.
              </p>
            </div>
          </motion.div>

          {/* Abschluss-Quote */}
          <motion.div
            {...fadeInUp}
            animate={isInView ? fadeInUp.animate : fadeInUp.initial}
            transition={{ ...fadeInUp.transition, delay: 0.25 }}
            className="border-l-4 border-primary-400 pl-8 py-4"
          >
            <p className="text-xl md:text-2xl text-neutral-700 leading-relaxed italic">
              „Mein Ziel ist es, Sie dazu zu befähigen, sich letztlich selbst zu helfen und zukünftigen
              Herausforderungen gestärkt begegnen zu können."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
