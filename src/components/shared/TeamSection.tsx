import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TeamCard } from '@/components/cards/TeamCard'
import { TEAM } from '@/data/team'

const INTRO =
  'At MEDesign, we combine creative design, strategy, and data-driven marketing to help healthcare brands grow with purpose.'

/** "Meet our team" section shared between Home and About pages. */
export function TeamSection() {
  return (
    <Section>
      <SectionHeading title="Meet our team" description={INTRO} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM.map((member, i) => (
          <TeamCard key={i} member={member} />
        ))}
      </div>
    </Section>
  )
}
