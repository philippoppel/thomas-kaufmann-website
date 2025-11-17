// Professional animation configurations inspired by Apple
// Consistent, smooth, and performant animations across the entire website

export const easing = {
  // Apple's signature easing curve
  apple: [0.16, 1, 0.3, 1] as const,
  smooth: [0.25, 0.1, 0.25, 1] as const,
  snappy: [0.4, 0, 0.2, 1] as const,
}

export const duration = {
  fast: 0.3,
  normal: 0.6,
  slow: 0.8,
  verySlow: 1.0,
}

// Fade in from below
export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 16
  },
  animate: {
    opacity: 1,
    y: 0
  },
  transition: {
    duration: duration.fast,
    ease: easing.apple,
  }
}

// Fade in with scale
export const fadeInScale = {
  initial: {
    opacity: 0,
    scale: 0.96
  },
  animate: {
    opacity: 1,
    scale: 1
  },
  transition: {
    duration: duration.slow,
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
    ease: easing.apple,
  }
}

// Stagger children animations
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0,
    }
  }
}

// For items in a staggered container
export const staggerItem = {
  initial: {
    opacity: 0,
    y: 12
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.fast,
      ease: easing.apple,
    }
  }
}

// Viewport animation hook settings
export const viewportOnce = {
  once: true,
  margin: "-50px",
  amount: 0.1,
} as const

export const viewportMultiple = {
  once: false,
  margin: "-80px",
  amount: 0.3,
} as const
