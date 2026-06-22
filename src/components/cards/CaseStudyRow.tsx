import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'
import { Placeholder } from '@/components/ui/Placeholder'
import { Tag } from '@/components/ui/Tag'
import { ArrowCircleButton } from '@/components/ui/ArrowCircleButton'
import { fadeInUp } from '@/lib/motion'
import type { Project } from '@/data/projects'

type Props = {
  project: Project
  /** Alternate the image to the right on odd rows for visual rhythm. */
  flip?: boolean
}

/** Stacked case-study row: image panel + dark content panel (page 5). */
export function CaseStudyRow({ project, flip = false }: Props) {
  return (
    <motion.article
      variants={fadeInUp}
      className="overflow-hidden rounded-4xl bg-ink shadow-card"
    >
      <div className={cn('grid items-stretch gap-0 lg:grid-cols-2', flip && 'lg:[direction:rtl]')}>
        {/* Image panel */}
        <div className="p-5 lg:[direction:ltr]">
          <Placeholder
            tone="light"
            label={project.category}
            className="h-56 w-full rounded-3xl sm:h-72 lg:h-full lg:min-h-[20rem]"
          />
        </div>

        {/* Content panel */}
        <div className="flex flex-col gap-5 p-7 lg:[direction:ltr] lg:p-10">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl font-extrabold text-white">{project.title}</h3>
            <ArrowCircleButton ariaLabel={`Open ${project.category}`} />
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <Tag key={i}>{tag}</Tag>
            ))}
          </div>
          <p className="text-sm leading-relaxed text-white/65">{project.description}</p>
        </div>
      </div>
    </motion.article>
  )
}
