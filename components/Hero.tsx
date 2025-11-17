'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeInUp, fadeInScale, fadeIn, easing, duration } from '@/lib/animations'

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
      className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-32 pb-20 bg-gradient-to-b from-primary-100 via-primary-50 to-white"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-10">
            {/* Eyebrow */}
            <motion.div
              initial={fadeIn.initial}
              animate={fadeIn.animate}
              transition={{ delay: 0, duration: duration.normal }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent-100 rounded-full"
            >
              <div className="w-2 h-2 bg-accent-600 rounded-full animate-pulse" />
              <span className="text-accent-800 text-sm font-medium tracking-wide">
                Psychotherapie in Linz
              </span>
            </motion.div>

            {/* Heading */}
            <div className="space-y-6">
              <motion.h1
                initial={fadeInUp.initial}
                animate={fadeInUp.animate}
                transition={{ delay: 0.1, duration: duration.slow, ease: easing.apple }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 tracking-tight"
              >
                Thomas Kaufmann
              </motion.h1>

              <motion.p
                initial={fadeInUp.initial}
                animate={fadeInUp.animate}
                transition={{ delay: 0.2, duration: duration.slow, ease: easing.apple }}
                className="text-lg md:text-xl text-neutral-600 font-light"
              >
                BA pth. · Psychotherapeut in Ausbildung unter Supervision
              </motion.p>
            </div>

            {/* Subheading */}
            <motion.p
              initial={fadeInUp.initial}
              animate={fadeInUp.animate}
              transition={{ delay: 0.3, duration: duration.slow, ease: easing.apple }}
              className="text-2xl md:text-3xl lg:text-4xl text-neutral-700 font-light leading-snug max-w-2xl text-balance"
            >
              Professionelle Begleitung in Phasen der Veränderung durch{' '}
              <span className="text-accent-700 font-normal">Verhaltenstherapie</span> und{' '}
              <span className="text-accent-700 font-normal">Krisenintervention</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={fadeInUp.initial}
              animate={fadeInUp.animate}
              transition={{ delay: 0.4, duration: duration.slow, ease: easing.apple }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a
                href="#contact"
                onClick={handleContactClick}
                className="group inline-flex items-center justify-center px-8 py-4 bg-neutral-900 text-white rounded-2xl font-medium hover:bg-neutral-800 transition-all duration-300 ease-out hover:shadow-soft-lg hover:-translate-y-0.5"
              >
                Termin vereinbaren
                <svg className="ml-2 w-5 h-5 transition-transform duration-300 ease-out group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-neutral-300 text-neutral-900 rounded-2xl font-medium hover:border-neutral-900 hover:bg-neutral-50 transition-all duration-300 ease-out"
              >
                Mehr erfahren
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={fadeIn.initial}
              animate={fadeIn.animate}
              transition={{ delay: 0.5, duration: duration.slow, ease: easing.apple }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-neutral-200"
            >
              <div className="space-y-1">
                <p className="text-xs text-neutral-500 uppercase tracking-wider">Methode</p>
                <p className="text-sm font-medium text-neutral-900">Verhaltenstherapie</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-neutral-500 uppercase tracking-wider">Erfahrung</p>
                <p className="text-sm font-medium text-neutral-900">Notfallsanitäter</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-neutral-500 uppercase tracking-wider">Ausbildung</p>
                <p className="text-sm font-medium text-neutral-900">SFU Wien</p>
              </div>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={fadeInScale.initial}
            animate={fadeInScale.animate}
            transition={{ delay: 0.2, duration: duration.verySlow, ease: easing.apple }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-soft-lg">
              <Image
                src="/images/IMG_1186.JPG"
                alt="Thomas Kaufmann - Psychotherapeut"
                fill
                className="object-cover"
                priority
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/5 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={fadeInUp.initial}
              animate={fadeInUp.animate}
              transition={{ delay: 0.6, duration: duration.slow, ease: easing.apple }}
              className="absolute -bottom-6 -left-6 right-6 lg:right-auto lg:w-auto bg-white rounded-2xl shadow-soft-lg p-6 backdrop-blur-sm"
            >
              <p className="text-sm text-neutral-600 mb-1">Schwerpunkt</p>
              <p className="font-semibold text-neutral-900">
                Krisenintervention & Verhaltenstherapie
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
