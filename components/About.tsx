'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from '@/lib/animations'

const features = [
  {
    title: 'Lösungsorientiert',
    description: 'Konkrete, umsetzbare Strategien für Ihren Alltag – wir arbeiten im Hier und Jetzt an Ihren Zielen.',
  },
  {
    title: 'Auf Augenhöhe',
    description: 'Transparente, respektvolle Zusammenarbeit in einer Atmosphäre von Vertrauen und Sicherheit.',
  },
  {
    title: 'Krisenkompetenz',
    description: 'Professionelle Unterstützung in akuten Situationen – meine Erfahrung aus dem Rettungsdienst macht den Unterschied.',
  },
]

const practiceLocations = [
  { icon: '🏥', label: 'Kinder- & Jugendambulanz Wien' },
  { icon: '🧠', label: 'Neuromed Campus Linz (inkl. Forensik)' },
  { icon: '🎓', label: 'Universitätsambulanz SFU Linz' },
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
            className="max-w-4xl"
          >
            <p className="text-primary-600 text-sm font-medium uppercase tracking-wider mb-6">
              Über mich
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-8 tracking-tight">
              <span className="relative inline-block">
                Mein Weg zur Psychotherapie
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-primary-200/60 -z-10 transform -skew-x-2" />
              </span>
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-neutral-600 leading-relaxed">
              <p>
                Mein Name ist <strong className="text-neutral-900">Thomas Kaufmann</strong>, ich bin Psychotherapeut in Ausbildung
                unter Supervision mit Fachrichtung{' '}
                <span className="relative inline-block">
                  <span className="text-primary-700 font-medium">Verhaltenstherapie</span>
                  <span className="absolute -bottom-0.5 left-0 w-full h-1.5 bg-primary-200/70 -z-10" />
                </span>.
                Derzeit absolviere ich den Magister-Lehrgang Psychotherapiewissenschaft an der{' '}
                <strong className="text-neutral-900">Sigmund Freud Privatuniversität (SFU) Wien</strong> und
                habe 2025 mein Bakkalaureats-Studium dort abgeschlossen.
              </p>

              <p>
                Die offizielle Berechtigung zur psychotherapeutischen Arbeit erhielt ich im Februar 2026 –
                seither arbeite ich in{' '}
                <span className="relative inline-block">
                  <span className="text-primary-700 font-medium">freier Praxis in Linz</span>
                  <span className="absolute -bottom-0.5 left-0 w-full h-1.5 bg-primary-200/70 -z-10" />
                </span>{' '}
                sowie im Online-Setting. Schon früh entstand in mir der Wunsch, Menschen in schwierigen Lebenslagen
                zu helfen, was mich zunächst in den Rettungsdienst und schließlich in die Psychotherapie geführt hat.
              </p>
            </div>
          </motion.div>

          {/* Rettungsdienst Background */}
          <motion.div
            {...fadeInUp}
            animate={isInView ? fadeInUp.animate : fadeInUp.initial}
            transition={{ ...fadeInUp.transition, delay: 0.1 }}
            className="bg-primary-50 rounded-3xl p-8 md:p-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
              Vom Rettungsdienst zur Psychotherapie
            </h3>
            <div className="space-y-4 text-lg text-neutral-600 leading-relaxed">
              <p>
                Parallel zu meinem Psychotherapie-Studium bin ich ausgebildeter{' '}
                <strong className="text-neutral-900">Notfallsanitäter mit Zusatzkompetenzen (NKA/NKV)</strong> und
                habe mehrere Jahre im Rettungsdienst gearbeitet. Diese Tätigkeit – inklusive Einsätzen in Akutsituationen –
                hat mir gezeigt, wie eng Körper und Psyche zusammenhängen und wie wichtig rasche, einfühlsame Hilfe in Krisen ist.
              </p>
              <p>
                Meine Erfahrungen aus dem medizinischen Notfallbereich haben meine Haltung als Therapeut geprägt:
                Ich begegne meinen Klient:innen mit Ruhe, Empathie und dem Bewusstsein, auch in akuten Krisen
                professionell unterstützen zu können. Besonders das Fachgebiet{' '}
                <span className="relative inline-block">
                  <span className="text-primary-700 font-medium">Krisenintervention</span>
                  <span className="absolute -bottom-0.5 left-0 w-full h-1.5 bg-primary-200/70 -z-10" />
                </span>,
                in dem ich meinen Schwerpunkt in meiner Bakkalaureatsprüfung gesetzt habe, liegt mir besonders am Herzen.
              </p>
            </div>
          </motion.div>

          {/* Praktische Erfahrung */}
          <motion.div
            {...fadeInUp}
            animate={isInView ? fadeInUp.animate : fadeInUp.initial}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8">
              Praktische Erfahrung
            </h3>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              Während meiner Ausbildung konnte ich in verschiedenen Praktika wertvolle Erfahrungen sammeln:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {practiceLocations.map((location) => (
                <div
                  key={location.label}
                  className="bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-soft hover:-translate-y-1 transition-all duration-500"
                >
                  <span className="text-3xl mb-4 block">{location.icon}</span>
                  <p className="font-medium text-neutral-900">{location.label}</p>
                </div>
              ))}
            </div>
            <p className="text-lg text-neutral-600 leading-relaxed mt-8">
              Diese Einsätze gaben mir Einblick in ein breites Spektrum psychischer Probleme und unterschiedlicher
              Altersgruppen. Dadurch habe ich gelernt, mich flexibel auf die Bedürfnisse jedes einzelnen Menschen
              einzustellen – ob Kind, Jugendlicher oder Erwachsener – und stets eine authentische, wertschätzende
              Haltung einzunehmen.
            </p>
          </motion.div>

          {/* Motivation */}
          <motion.div
            {...fadeInUp}
            animate={isInView ? fadeInUp.animate : fadeInUp.initial}
            transition={{ ...fadeInUp.transition, delay: 0.25 }}
            className="border-l-4 border-primary-400 pl-8 py-4"
          >
            <p className="text-xl md:text-2xl text-neutral-700 leading-relaxed italic">
              „Meine Motivation ziehe ich aus der Überzeugung, dass Veränderung möglich ist und jeder Mensch
              die Fähigkeit zur Bewältigung schwieriger Situationen in sich trägt."
            </p>
          </motion.div>

          {/* Therapeutische Haltung */}
          <motion.div
            {...fadeInUp}
            animate={isInView ? fadeInUp.animate : fadeInUp.initial}
            transition={{ ...fadeInUp.transition, delay: 0.3 }}
            className="space-y-6 text-lg text-neutral-600 leading-relaxed"
          >
            <p>
              Mir ist es wichtig, meinen Klient:innen auf Augenhöhe zu begegnen, offen zuzuhören und einen
              geschützten Raum zu bieten, in dem alles Platz haben darf. Dabei lege ich Wert auf Professionalität
              und Seriosität – gleichzeitig bin ich menschlich und echt in meiner Art.
            </p>
            <p>
              <strong className="text-neutral-900">Therapie verstehe ich als gemeinsamen Prozess</strong>,
              in dem wir partnerschaftlich zusammenarbeiten: Sie bringen die Expertise für Ihr eigenes Leben mit –
              und ich unterstütze Sie mit meinem fachlichen Wissen und meiner Erfahrung auf dem Weg zu Ihren Zielen.
            </p>
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
