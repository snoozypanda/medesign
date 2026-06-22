import { Avatar } from '@/components/ui/Avatar'
import { Quote } from '@/components/ui/Icon'
import type { Testimonial } from '@/data/team'

/** Light testimonial card with quote glyph + avatar (page 1 Partnerships). */
export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col gap-5 rounded-3xl border border-slate-100 bg-white p-7 shadow-card">
      <Quote className="h-7 w-7 text-accent/40" />
      <blockquote className="flex-1 text-sm leading-relaxed text-slate-body">
        {testimonial.quote}
      </blockquote>
      <figcaption className="flex items-center gap-3 border-t border-slate-100 pt-5">
        <Avatar name={testimonial.name} />
        <div>
          <p className="text-sm font-bold text-ink">{testimonial.name}</p>
          <p className="text-xs text-slate-muted">{testimonial.title}</p>
        </div>
      </figcaption>
    </figure>
  )
}
