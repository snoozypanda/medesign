import { motion } from 'framer-motion'
import { Container } from '@/frontend/shared/components/Container'
import { Placeholder } from '@/frontend/shared/components/Placeholder'
import { Eyebrow } from '@/frontend/shared/components/Tag'
import { Logo } from '@/frontend/shared/components/Logo'
import { ArrowCircleButton } from '@/frontend/shared/components/ArrowCircleButton'
import { fadeInUp, revealOnce, slideInLeft, slideInRight } from '@/frontend/shared/lib/motion'
import { PROJECTS } from '@/backend/features/projects/projects'

export default function Blog() {
  return (
    <>
      <BlogHero />
      <LatestProjects />
    </>
  )
}

function BlogHero() {
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

      <div className="relative z-10 px-6 pb-24 pt-32 sm:px-12 sm:pb-28 sm:pt-40 lg:px-16 lg:pb-32 lg:pt-48">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <Logo variant="light" className="text-5xl" />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 max-w-2xl text-sm leading-relaxed text-white/70"
          >
            We're not just another marketing agency—we specialize in the medical field. With deep industry understanding and creative excellence, MEDesign delivers results that elevate your brand, attract patients, and strengthen your digital presence in the competitive healthcare market.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

function LatestProjects() {
  const projects = PROJECTS.slice(0, 4)

  return (
    <Container className="pb-20 lg:pb-28">
      <Eyebrow className="mb-8 block">Latest</Eyebrow>

      <div className="space-y-8">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0

          return (
            <motion.div
              key={project.slug}
              variants={fadeInUp}
              {...revealOnce}
              className={`grid gap-8 lg:grid-cols-2 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}
            >
              {/* Image */}
              <motion.div
                variants={isEven ? slideInLeft : slideInRight}
                className={`flex justify-center ${!isEven ? 'lg:col-start-2' : ''}`}
              >
                <div className="relative w-full">
                  <Placeholder
                    tone="dark"
                    label={project.title}
                    className="aspect-[4/3] w-full rounded-3xl"
                  />
                </div>
              </motion.div>

              {/* Text Content */}
              <motion.div
                variants={isEven ? slideInRight : slideInLeft}
                className={`flex flex-col gap-6 ${!isEven ? 'lg:col-start-1' : ''}`}
              >
                <div className="flex items-center gap-2">
                  <Eyebrow>Top Rates</Eyebrow>
                  <Eyebrow>Top Rates</Eyebrow>
                </div>

                <h3 className="text-2xl font-extrabold text-ink lg:text-3xl">
                  {project.title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-body max-w-lg">
                  {project.excerpt}
                </p>

                <div className="flex gap-3">
                  <ArrowCircleButton to={`/work/${project.slug}`} />
                </div>
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </Container>
  )
}
