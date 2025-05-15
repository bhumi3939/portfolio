'use client'

import { motion } from 'framer-motion'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  initial?: any
  animate?: any
  transition?: any
  whileHover?: any
}

export default function AnimatedSection({
  children,
  className = '',
  initial,
  animate,
  transition,
  whileHover
}: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
      whileHover={whileHover}
    >
      {children}
    </motion.div>
  )
} 