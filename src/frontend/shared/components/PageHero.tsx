import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/frontend/shared/lib/cn'
import { Container } from '@/frontend/shared/components/Container'
import { fadeInUp, staggerContainer } from '@/frontend/shared/lib/motion'

type Props = {
  /** Title nodes — wrap part of the text in <span className="text-accent"> for the green accent. */
  title: ReactNode
  subtitle?: ReactNode
  children?: ReactNode
  /** Smaller hero for inner pages vs. the tall home hero. */
  size?: 'md' | 'lg'
}

/**
 * Masked display page hero matching the design pattern from the mockup.
 * Used across inner pages (Services, About, Work, Contact, Blog).
 */
export function PageHero({ title, subtitle, children, size = 'md' }: Props) {
  return (
    <section className="relative mx-auto w-full max-w-container px-2 sm:px-3 lg:px-4 pt-4">
      {/* Masked Background Container */}
      <div className="hero-mask absolute inset-x-2 top-4 bottom-0 z-0 bg-ink sm:inset-x-3 lg:inset-x-4">
        <img
          src="/hero-bg.png"
          alt=""
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-ink/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-ink/30" />
      </div>

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate="show"
          className={cn(
            "flex flex-col items-center justify-center text-center",
            size === 'lg'
              ? 'pb-24 pt-32 sm:pb-28 sm:pt-40 lg:pb-32 lg:pt-48'
              : 'pb-20 pt-28 sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-44'
          )}
        >
          <motion.h1
            variants={fadeInUp}
            className="max-w-4xl text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
          >
            {title}
          </motion.h1>
          {subtitle ? (
            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 mx-auto"
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

