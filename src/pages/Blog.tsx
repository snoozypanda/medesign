import { motion } from 'framer-motion'
import { PageHero } from '@/components/shared/PageHero'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Placeholder } from '@/components/ui/Placeholder'
import { Eyebrow } from '@/components/ui/Tag'
import { fadeInUp } from '@/lib/motion'

// Placeholder articles — the Blog appears in the nav but has no mockup page,
// so this is an on-brand stub ready for real content.
const POSTS = Array.from({ length: 3 }, (_, i) => ({
  id: i + 1,
  title: 'Healthcare branding insights',
  excerpt: 'Strategies, trends, and ideas to help your medical brand grow with purpose.',
  category: ['Strategy', 'Design', 'Marketing'][i],
}))

export default function Blog() {
  return (
    <>
      <PageHero
        title={<span className="text-accent">Blog</span>}
        subtitle="Insights, ideas, and updates from the MEDesign team on healthcare branding, design, and digital marketing."
      />

      <Section>
        <Eyebrow className="mb-8 block">Coming soon</Eyebrow>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <motion.article
              key={post.id}
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover"
            >
              <Placeholder tone="dark" label={post.category} className="aspect-[16/10] w-full" />
              <div className="flex flex-col gap-3 p-6">
                <Eyebrow>{post.category}</Eyebrow>
                <h3 className="text-lg font-bold text-ink">{post.title}</h3>
                <p className="text-sm leading-relaxed text-slate-body">{post.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button to="/contact">Work with us</Button>
        </div>
      </Section>
    </>
  )
}
