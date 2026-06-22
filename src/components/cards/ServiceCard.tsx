import { motion } from 'framer-motion'
import { IconChip } from '@/components/ui/IconChip'
import { fadeInUp } from '@/lib/motion'
import type { Service } from '@/data/services'

/** Light service card with icon chip, title, description (page 2). */
export function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.article
      variants={fadeInUp}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className="group flex h-full flex-col gap-4 rounded-3xl border border-slate-100 bg-white p-7 shadow-card transition-shadow duration-300 hover:shadow-card-hover"
    >
      <IconChip
        icon={service.icon}
        className="transition-colors duration-300 group-hover:bg-accent group-hover:text-ink"
      />
      <h3 className="text-lg font-bold text-ink">{service.title}</h3>
      <p className="text-sm leading-relaxed text-slate-body">{service.description}</p>
    </motion.article>
  )
}
