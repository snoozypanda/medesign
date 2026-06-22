import type { ComponentType, SVGProps } from 'react'
import { Heart, Users, Award, Share, Check } from '@/components/ui/Icon'

export type ValueItem = {
  title: string
  description: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

export const VALUES: ValueItem[] = [
  {
    title: 'Our Mission',
    description:
      'To empower healthcare organizations with innovative digital solutions that enhance their brand presence and patient engagement.',
    icon: Award,
  },
  {
    title: 'Patient-Centered',
    description:
      'We design with patients in mind, creating experiences that build trust and make healthcare more accessible.',
    icon: Heart,
  },
  {
    title: 'Excellence',
    description:
      'We maintain the highest standards in every project, delivering quality that exceeds expectations.',
    icon: Check,
  },
  {
    title: 'Collaboration',
    description:
      'We work closely with our clients as partners, ensuring every solution reflects a shared vision and goals.',
    icon: Users,
  },
]

export type Reason = {
  title: string
  description: string
}

export const WHY_CHOOSE: Reason[] = [
  {
    title: 'Healthcare Expertise',
    description:
      'Deep specialization in the medical field means we understand your audience, compliance, and goals.',
  },
  {
    title: 'Local Market Knowledge',
    description:
      'We know the Ethiopian healthcare market and what resonates with patients across the region.',
  },
  {
    title: 'End-to-End Solutions',
    description:
      'From strategy to execution, we handle everything so you can focus on patient care.',
  },
  {
    title: 'Measurable Results',
    description:
      'Data-driven approaches that deliver real, trackable returns and reporting you can trust.',
  },
]

export const STORY_STATS = [
  { value: '5+', label: 'Years of experience', icon: Award },
  { value: 'Healthcare', label: 'Industry focused', icon: Heart },
] as const

export { Share }
