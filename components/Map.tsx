'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeInUp, viewportOnce } from '@/lib/animations'

export default function Map() {
  const ref = useRef(null)
  const isInView = useInView(ref, viewportOnce)

  return (
    <section
      id="map"
      ref={ref}
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          {...fadeInUp}
          animate={isInView ? fadeInUp.animate : fadeInUp.initial}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Praxisstandort
          </h2>
          <p className="text-lg text-neutral-600">
            Domgasse 14, 4020 Linz · 2. Stock (Lift vorhanden)
          </p>
          <p className="text-neutral-500 mt-2">
            Zentrale Lage am Hauptplatz · Gute Erreichbarkeit mit öffentlichen Verkehrsmitteln
          </p>
        </motion.div>

        <motion.div
          {...fadeInUp}
          animate={isInView ? fadeInUp.animate : fadeInUp.initial}
          transition={{ ...fadeInUp.transition, delay: 0.1 }}
          className="rounded-2xl overflow-hidden shadow-soft-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2654.842!2d14.2864!3d48.3065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4773986e7c4e7f9b%3A0x3c0a9f9f9f9f9f9f!2sDomgasse%2014%2C%204020%20Linz%2C%20Austria!5e0!3m2!1sde!2sat!4v1703800000000!5m2!1sde!2sat"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Praxisstandort Domgasse 14, 4020 Linz"
            className="w-full h-[250px] sm:h-[350px] md:h-[450px]"
          />
        </motion.div>

        <motion.div
          {...fadeInUp}
          animate={isInView ? fadeInUp.animate : fadeInUp.initial}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
          className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
        >
          <div className="bg-primary-50 rounded-xl p-6">
            <h4 className="font-semibold text-neutral-900 mb-2">Öffentliche Verkehrsmittel</h4>
            <p className="text-sm text-neutral-600">
              Haltestellen Taubenmarkt und Mozartkreuzung in wenigen Gehminuten erreichbar.
            </p>
          </div>
          <div className="bg-primary-50 rounded-xl p-6">
            <h4 className="font-semibold text-neutral-900 mb-2">Mit dem Auto</h4>
            <p className="text-sm text-neutral-600">
              Parkmöglichkeiten in Kurzparkzonen und Parkgaragen (z.B. City-Parkhaus, Tiefgarage Hauptplatz).
            </p>
          </div>
          <div className="bg-primary-50 rounded-xl p-6">
            <h4 className="font-semibold text-neutral-900 mb-2">Barrierefreiheit</h4>
            <p className="text-sm text-neutral-600">
              Die Praxis befindet sich im 2. Stock. Ein Lift ist vorhanden.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
