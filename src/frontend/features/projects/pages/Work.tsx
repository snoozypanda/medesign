import { PageHero } from '@/frontend/shared/components/PageHero'
import { Section } from '@/frontend/shared/components/Section'
import { ProjectCard } from '../components/ProjectCard'
import { PROJECTS } from '@/backend/features/projects/projects'

export default function Work() {
  return (
    <>
      <PageHero
        title={<span className="text-accent">Work</span>}
        subtitle="We’re not just another marketing agency—we specialize in the medical field. With deep industry understanding and creative excellence, MEDesign delivers results that elevate your brand, attract patients, and strengthen your digital presence in the competitive healthcare market."
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>
    </>
  )
}
