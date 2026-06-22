import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { fadeInUp, staggerContainer } from '@/lib/motion'

type Props = {
  /** Title nodes — wrap part of the text in <span className="text-accent"> for the green accent. */
  title: ReactNode
  subtitle?: ReactNode
  children?: ReactNode
  /** Smaller hero for inner pages vs. the tall home hero. */
  size?: 'md' | 'lg'
}

/**
 * Dark, image-backed hero used across inner pages (Services, About, Work,
 * Contact). The home page uses its own taller hero variant.
 */
export function PageHero({ title, subtitle, children, size = 'md' }: Props) {
  return (
    <section className="relative overflow-hidden bg-ink pt-28 lg:pt-32">
      {/* Ambient background imagery + gradient veil */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,rgba(102,199,151,0.16),transparent_45%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,28,38,0.4),rgba(23,35,45,0.95))]" />
      </div>

      <Container className="relative">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate="show"
          className={size === 'lg' ? 'py-20 lg:py-28' : 'py-16 lg:py-20'}
        >
          <motion.h1
            variants={fadeInUp}
            className="max-w-4xl text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h1>
          {subtitle ? (
            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-2xl text-base leading-relaxed text-white/70"
            >
              {subtitle}
            </motion.p>
          ) : null}
          {children ? (
            <motion.div variants={fadeInUp} className="mt-8">
              {children}
            </motion.div>
          ) : null}
        </motion.div>
      </Container>
    </section>
  )
}
