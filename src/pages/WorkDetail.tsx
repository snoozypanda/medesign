import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'
import { Eyebrow } from '@/components/ui/Tag'
import { CaseStudyRow } from '@/components/cards/CaseStudyRow'
import { ArrowRight } from '@/components/ui/Icon'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import { PROJECTS, getProject } from '@/data/projects'

export default function WorkDetail() {
  const { slug } = useParams()
  const project = slug ? getProject(slug) : undefined

  // Show the focused project first, then the remaining case studies.
  const rows = project
    ? [project, ...PROJECTS.filter((p) => p.slug !== project.slug)].slice(0, 4)
    : PROJECTS.slice(0, 4)

  return (
    <>
      <DetailHero />

      <Section className="bg-slate-50">
        <Eyebrow className="mb-8 block">Leatest</Eyebrow>
        <div className="flex flex-col gap-8">
          {rows.map((p, i) => (
            <CaseStudyRow key={p.slug} project={p} flip={i % 2 === 1} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button to="/work" variant="ghost">
            Back to all work
          </Button>
        </div>
      </Section>
    </>
  )
}

function DetailHero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-28 lg:pt-32">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(102,199,151,0.18),transparent_45%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,28,38,0.4),rgba(23,35,45,0.95))]" />
      </div>

      <Container className="relative">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center py-16 text-center lg:py-24"
        >
          <motion.div variants={fadeInUp}>
            <Logo className="text-5xl sm:text-6xl" withDot />
          </motion.div>
          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/70"
          >
            We’re not just another marketing agency—we specialize in the medical field, delivering
            results that elevate your brand in the competitive healthcare market.
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-8">
            <Button to="/contact" variant="pill" size="lg">
              Start your project
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
