import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Carousel } from '@/components/ui/Carousel'
import { Logo } from '@/components/ui/Logo'
import { ProjectCard } from '@/components/cards/ProjectCard'
import { TestimonialCard } from '@/components/cards/TestimonialCard'
import { TeamSection } from '@/components/shared/TeamSection'
import { ArrowRight } from '@/components/ui/Icon'
import { fadeInUp, revealOnce, staggerContainer } from '@/lib/motion'
import { PROJECTS } from '@/data/projects'
import { TESTIMONIALS } from '@/data/team'

const INTRO =
  'At MEDesign, we combine creative design, strategy, and data-driven marketing to help healthcare brands grow with purpose.'

export default function Home() {
  return (
    <>
      <HomeHero />
      <LatestProjects />
      <Partnerships />
      <TeamSection />
    </>
  )
}

/* ────────────────────────────────────────────────────────────────────── */
/*  Hero — full-width background image with left-aligned text            */
/* ────────────────────────────────────────────────────────────────────── */
function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="/hero-bg.png"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/30" />
      </div>

      <Container className="relative">
        <motion.div
          variants={staggerContainer(0.14)}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start pb-6 pt-36 text-left lg:pb-8 lg:pt-44"
        >
          <motion.h1
            variants={fadeInUp}
            className="max-w-3xl text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-[3.75rem]"
          >
            Transform Healthcare
            <br />
            Brands With Creative
            <br />
            <span className="text-accent">Digital Solutions.</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-xl text-sm leading-relaxed text-white/70"
          >
            {INTRO}
          </motion.p>
        </motion.div>
      </Container>

      {/* Bottom bar: dots pattern left + Get Started button right */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="relative mx-5 mb-5 flex items-center gap-4 sm:mx-6 lg:mx-8"
        style={{ maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '1.25rem', paddingRight: '0' }}
      >
        {/* Dots / circles pattern from Asset 4 */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="h-10 w-10 rounded-full bg-accent" />
          <span className="h-10 w-10 rounded-full bg-ink-deep" />
          <span className="h-10 w-10 rounded-full bg-accent/40" />
        </div>

        {/* Wide green bar with "Get Started" */}
        <a
          href="/contact"
          className="flex flex-1 items-center justify-end rounded-full bg-accent px-8 py-4 text-sm font-bold text-ink transition-colors hover:bg-accent-hover"
        >
          Get Started
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </motion.div>

      {/* Tiny spacer */}
      <div className="h-4" />
    </section>
  )
}

/* ────────────────────────────────────────────────────────────────────── */
/*  Latest Projects — left text + right carousel cards                   */
/* ────────────────────────────────────────────────────────────────────── */
function LatestProjects() {
  // Carousel state for the 2-card view
  const [page, setPage] = useState(0)
  const projects = PROJECTS.slice(0, 6)
  const perView = 2
  const pages = Math.ceil(projects.length / perView)

  const go = useCallback(
    (dir: number) => setPage((p) => Math.min(pages - 1, Math.max(0, p + dir))),
    [pages],
  )

  const trackRef = useRef<HTMLDivElement>(null)
  const [trackWidth, setTrackWidth] = useState(0)

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const compute = () => setTrackWidth(el.clientWidth)
    compute()
    const ro = new ResizeObserver(compute)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const gap = 24
  const cardWidth = useMemo(
    () => (trackWidth > 0 ? (trackWidth - gap) / perView : 0),
    [trackWidth],
  )

  return (
    <Section>
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
        {/* Left column — label, heading, description, CTA */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-start lg:w-[38%] lg:shrink-0"
        >
          <motion.span
            variants={fadeInUp}
            className="mb-5 inline-block rounded-full border border-ink/15 px-4 py-1.5 text-xs font-medium text-ink"
          >
            latest projects
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="text-2xl font-extrabold leading-tight text-ink sm:text-3xl lg:text-[2.2rem]"
          >
            Every project we deliver is more than design it's measurable impact.
            From building patient trust through rebranding to increasing
            appointments through marketing, we turn ideas into results.
          </motion.h2>

          <motion.div variants={fadeInUp} className="mt-8">
            <Button to="/work" size="sm" variant="outline" className="!border-ink/20 !text-ink hover:!bg-ink hover:!text-white">
              More Works
            </Button>
          </motion.div>
        </motion.div>

        {/* Right column — project cards carousel */}
        <div className="flex-1 min-w-0">
          <div ref={trackRef} className="overflow-hidden">
            <motion.div
              className="flex"
              style={{ gap }}
              animate={{ x: -page * (trackWidth + gap) }}
              transition={{ type: 'spring', stiffness: 260, damping: 32 }}
            >
              {projects.map((p, i) => (
                <div
                  key={p.slug}
                  className="shrink-0"
                  style={{ width: cardWidth > 0 ? cardWidth : undefined }}
                >
                  <LatestProjectCard project={p} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Carousel arrows */}
          {pages > 1 && (
            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => go(-1)}
                disabled={page === 0}
                aria-label="Previous"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent text-accent transition-colors duration-200 hover:bg-accent hover:text-ink disabled:opacity-30"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                disabled={page === pages - 1}
                aria-label="Next"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent text-accent transition-colors duration-200 hover:bg-accent hover:text-ink disabled:opacity-30"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </Section>
  )
}

/** Dark card with image area + descriptive text at bottom (matches the mockup screenshot). */
function LatestProjectCard({ project }: { project: import('@/data/projects').Project }) {
  return (
    <motion.article variants={fadeInUp} className="group">
      <div className="overflow-hidden rounded-2xl bg-ink shadow-card transition-shadow duration-300 group-hover:shadow-card-hover">
        {/* Dark image area */}
        <div className="aspect-[4/3] w-full bg-gradient-to-br from-ink to-ink-deep" />
        {/* Text below */}
        <div className="p-5">
          <p className="text-sm leading-relaxed text-white/70">
            Professional marketing materials that communicate your brand&apos;s message
          </p>
        </div>
      </div>
    </motion.article>
  )
}

/* ────────────────────────────────────────────────────────────────────── */
/*  Partnerships                                                         */
/* ────────────────────────────────────────────────────────────────────── */
function Partnerships() {
  return (
    <Section className="bg-slate-50">
      <SectionHeading
        align="center"
        title={
          <>
            Partner<span className="text-accent">ships</span>
          </>
        }
        description={INTRO}
      />

      {/* Logo marquee */}
      <div className="relative mb-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-16">
          {Array.from({ length: 10 }).map((_, i) => (
            <Logo key={i} variant="dark" className="text-2xl opacity-60" />
          ))}
        </div>
      </div>

      <motion.div variants={staggerContainer()} {...revealOnce}>
        <Carousel
          itemsPerView={3}
          items={TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        />
      </motion.div>
    </Section>
  )
}
