'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      ref={ref}
      className="py-32 px-6 lg:px-8 bg-white"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <p className="text-accent-olive uppercase tracking-widest text-sm font-medium">
            Über mich
          </p>

          <h2 className="font-serif text-4xl lg:text-6xl font-bold text-dark-brown">
            Klarheit in Krisenmomenten
          </h2>

          <div className="space-y-6 text-xl lg:text-2xl text-text-medium font-light leading-relaxed max-w-3xl mx-auto">
            <p>
              Als Psychotherapeut in Ausbildung unter Supervision verbinde ich fundierte
              <span className="text-primary-terracotta font-medium"> Verhaltenstherapie</span> mit meiner
              langjährigen Erfahrung als <span className="text-primary-terracotta font-medium">Notfallsanitäter</span>.
            </p>

            <p>
              Diese Kombination ermöglicht mir einen besonderen Zugang: Ich verstehe akute Belastungen
              und biete gleichzeitig wissenschaftlich fundierte Werkzeuge für nachhaltige Veränderung.
            </p>

            <p className="text-lg lg:text-xl pt-4">
              Ausbildung an der <strong>Sigmund Freud Universität Wien</strong> ·
              Notfallsanitäter mit <strong>NKA/NKV</strong> Qualifikation
            </p>
          </div>

          {/* Key Points */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid md:grid-cols-3 gap-8 pt-12"
          >
            <div className="p-8 rounded-2xl bg-primary-beige/50 space-y-3">
              <div className="text-4xl">🎯</div>
              <h3 className="font-serif text-xl font-semibold text-dark-brown">
                Lösungsorientiert
              </h3>
              <p className="text-text-medium">
                Konkrete Strategien für Ihren Alltag
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-primary-beige/50 space-y-3">
              <div className="text-4xl">🤝</div>
              <h3 className="font-serif text-xl font-semibold text-dark-brown">
                Auf Augenhöhe
              </h3>
              <p className="text-text-medium">
                Transparente Zusammenarbeit
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-primary-beige/50 space-y-3">
              <div className="text-4xl">⚡</div>
              <h3 className="font-serif text-xl font-semibold text-dark-brown">
                Krisenkompetenz
              </h3>
              <p className="text-text-medium">
                Auch in akuten Situationen
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
