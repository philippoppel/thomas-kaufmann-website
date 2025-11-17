'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20 bg-gradient-to-br from-primary-beige/30 via-light-cream to-white"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-accent-olive uppercase tracking-widest text-sm font-medium"
              >
                Psychotherapie in Linz
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-serif text-5xl lg:text-7xl font-bold text-dark-brown leading-tight"
              >
                Thomas Kaufmann
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-text-medium font-light"
              >
                BA pth. · Psychotherapeut in Ausbildung unter Supervision
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-2xl lg:text-3xl text-text-dark font-light leading-relaxed max-w-2xl"
            >
              Begleitung in Phasen der Veränderung mit Verhaltenstherapie und Krisenintervention.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                onClick={handleContactClick}
                className="px-8 py-4 bg-primary-terracotta text-white rounded-full font-medium hover:bg-primary-terracotta/90 transition-all hover:scale-105 shadow-lg"
              >
                Termin vereinbaren
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-8 py-4 border-2 border-accent-olive text-accent-olive rounded-full font-medium hover:bg-accent-olive hover:text-white transition-all"
              >
                Mehr erfahren
              </a>
            </motion.div>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-6 justify-center lg:justify-start pt-8"
            >
              <div className="flex items-center gap-2 text-text-medium">
                <span className="text-2xl">🧠</span>
                <span className="text-sm">Verhaltenstherapie</span>
              </div>
              <div className="flex items-center gap-2 text-text-medium">
                <span className="text-2xl">🚑</span>
                <span className="text-sm">Notfallsanitäter</span>
              </div>
              <div className="flex items-center gap-2 text-text-medium">
                <span className="text-2xl">🎓</span>
                <span className="text-sm">SFU Wien</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/IMG_1186.JPG"
                alt="Thomas Kaufmann - Psychotherapeut"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-accent-olive text-white px-8 py-4 rounded-full shadow-xl whitespace-nowrap"
            >
              <p className="text-sm font-medium">
                Krisenintervention · Verhaltenstherapie
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
