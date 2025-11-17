'use client'

import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { XIcon } from './Icons'
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from '@/lib/animations'

const images = [
  {
    src: '/images/IMG_1186.JPG',
    alt: 'Thomas Kaufmann - Psychotherapeut',
    category: 'Portrait'
  },
  {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    alt: 'Beruhigende Berglandschaft',
    category: 'Atmosphäre'
  },
  {
    src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80',
    alt: 'Ruhiger Wald',
    category: 'Natur'
  },
  {
    src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80',
    alt: 'Friedliche Naturszene',
    category: 'Natur'
  },
  {
    src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&q=80',
    alt: 'Sanfte Hügellandschaft',
    category: 'Atmosphäre'
  },
  {
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80',
    alt: 'Beruhigender Naturpfad',
    category: 'Natur'
  },
]

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, viewportOnce)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <>
      <section
        id="gallery"
        ref={ref}
        className="py-32 px-6 lg:px-8 bg-primary-50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeInUp}
            animate={isInView ? fadeInUp.animate : fadeInUp.initial}
            className="text-center space-y-6 mb-16"
          >
            <p className="text-accent-600 text-sm font-medium uppercase tracking-wider">
              Eindrücke
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight">
              Atmosphäre & Umgebung
            </h2>

            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Ein Ort der Ruhe und Klarheit
            </p>
          </motion.div>

          {/* Gallery Grid with Stagger Animation */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                onClick={() => setSelectedImage(index)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-soft hover:shadow-soft-lg transition-all duration-300 ease-out hover:-translate-y-1"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2Y1ZjNmMCIvPjwvc3ZnPg=="
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-neutral-900/0 to-neutral-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white text-sm font-medium">{image.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-neutral-900/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-6xl aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                fill
                className="object-contain rounded-2xl"
                loading="eager"
              />

              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-14 right-0 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 ease-out"
              >
                <XIcon className="w-6 h-6" />
              </button>

              {/* Image Info */}
              <div className="absolute -bottom-14 left-0 text-white">
                <p className="text-sm text-white/60">{images[selectedImage].category}</p>
                <p className="text-lg font-medium">{images[selectedImage].alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
