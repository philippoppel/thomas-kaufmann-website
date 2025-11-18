// Professional animation configurations inspired by Apple
// Elegant, smooth, and refined animations across the entire website

export const easing = {
  // Apple's signature easing - smooth deceleration
  apple: [0.22, 1, 0.36, 1] as const,
  // Gentle ease for subtle movements
  gentle: [0.25, 0.46, 0.45, 0.94] as const,
  // Elegant entrance with slight overshoot feel
  elegant: [0.34, 1.56, 0.64, 1] as const,
}

export const duration = {
  fast: 0.5,
  normal: 0.7,
  slow: 0.9,
  verySlow: 1.2,
}

// Fade in from below - elegant entrance
export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 24
  },
  animate: {
    opacity: 1,
    y: 0
  },
  transition: {
    duration: duration.normal,
    ease: easing.apple,
  }
}

// Fade in with scale - for hero images
export const fadeInScale = {
  initial: {
    opacity: 0,
    scale: 0.92
  },
  animate: {
    opacity: 1,
    scale: 1
  },
  transition: {
    duration: duration.verySlow,
    ease: easing.apple,
  }
}

// Simple fade in
export const fadeIn = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  },
  transition: {
    duration: duration.slow,
    ease: easing.gentle,
  }
}

// Stagger children animations - elegant cascade
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    }
  }
}

// For items in a staggered container
export const staggerItem = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.normal,
      ease: easing.apple,
    }
  }
}

// Viewport animation hook settings
export const viewportOnce = {
  once: true,
  margin: "-80px",
  amount: 0.15,
} as const

export const viewportMultiple = {
  once: false,
  margin: "-100px",
  amount: 0.25,
} as const
