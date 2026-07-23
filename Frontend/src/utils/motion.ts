export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
    },
  },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

export const hoverLift = {
  whileHover: {
    y: -6,
    scale: 1.01,
    transition: { duration: 0.22, ease: 'easeOut' },
  },
}
