'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface SignatureLogoProps {
  className?: string
}

export default function SignatureLogo({ className = '' }: SignatureLogoProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Reveal animation container */}
      <motion.div
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        animate={{ clipPath: 'inset(0 0% 0 0)' }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        {/* Beige tinted signature using sepia and hue-rotate filters */}
        <Image
          src="/images/logo.png"
          alt="Thomas Kaufmann Psychotherapist Signature"
          width={280}
          height={140}
          className="w-full h-auto sepia-[0.3] hue-rotate-[10deg] brightness-[0.85] contrast-[1.1]"
          priority
        />
      </motion.div>
    </div>
  )
}
