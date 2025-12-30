'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'Start', href: '#hero' },
  { label: 'Über mich', href: '#about' },
  { label: 'Schwerpunkte', href: '#focus' },
  { label: 'Methoden', href: '#methods' },
  { label: 'Erstgespräch', href: '#firstsession' },
  { label: 'Kontakt', href: '#contact' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!isHomePage) {
      // If not on home page, navigate to home page with hash
      return
    }
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const getHref = (href: string) => {
    if (!isHomePage) {
      return `/${href}`
    }
    return href
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-soft'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 md:h-24 lg:h-32">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center group"
            >
              <Image
                src="/images/logo.png"
                alt="Thomas Kaufmann - Psychotherapeut"
                width={400}
                height={400}
                className="h-14 sm:h-20 md:h-28 lg:h-36 w-auto object-contain transition-all duration-700 ease-out group-hover:scale-105 sepia-[0.3] saturate-[1.2] brightness-[0.85] hue-rotate-[350deg] drop-shadow-sm group-hover:drop-shadow-md"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={getHref(item.href)}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="px-4 py-2 text-neutral-700 hover:text-neutral-900 transition-all duration-500 ease-out font-medium relative group rounded-xl hover:bg-neutral-100"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a
              href={isHomePage ? '#contact' : '/#contact'}
              onClick={(e) => isHomePage && handleNavClick(e, '#contact')}
              className="hidden lg:inline-flex items-center px-6 py-2.5 bg-primary-700 text-white rounded-xl font-medium hover:bg-primary-800 transition-all duration-500 ease-out hover:shadow-soft"
            >
              Termin
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-neutral-100 transition-all duration-300 ease-out"
              aria-label="Menu"
            >
              <span
                className={`w-5 h-0.5 bg-neutral-900 transition-all duration-500 ease-out ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-neutral-900 transition-all duration-500 ease-out ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-neutral-900 transition-all duration-500 ease-out ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-white lg:hidden"
          >
            <div className="pt-20 px-4 sm:px-6 pb-6 h-full flex flex-col">
              <ul className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    <a
                      href={getHref(item.href)}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="block text-xl sm:text-2xl font-semibold text-neutral-900 hover:text-accent-700 transition-all duration-500 ease-out py-3 hover:translate-x-3"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile FAQ & Impressum Links */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 pt-8 border-t border-primary-200 flex gap-6"
              >
                <Link
                  href="/faq"
                  className="text-neutral-600 hover:text-neutral-900 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
                <Link
                  href="/impressum"
                  className="text-neutral-600 hover:text-neutral-900 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Impressum
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mt-auto pt-8 border-t border-primary-200"
              >
                <a
                  href={isHomePage ? '#contact' : '/#contact'}
                  onClick={(e) => {
                    if (isHomePage) {
                      handleNavClick(e, '#contact')
                    } else {
                      setIsMobileMenuOpen(false)
                    }
                  }}
                  className="block w-full text-center px-6 sm:px-8 py-3 sm:py-4 bg-primary-700 text-white rounded-2xl font-medium hover:bg-primary-800 transition-all duration-500 ease-out"
                >
                  Termin vereinbaren
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
