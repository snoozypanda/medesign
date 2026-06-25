export type Project = {
  slug: string
  title: string
  excerpt: string
  category: string
  tags: string[]
  description: string
}

const LOREM =
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.'

export const PROJECTS: Project[] = [
  {
    slug: 'project-1',
    title: 'Brand Strategy & Identity',
    excerpt: 'Crafting modern identity guidelines for medical providers.',
    category: 'Branding',
    tags: ['Branding', 'Design System'],
    description: LOREM,
  },
  {
    slug: 'project-2',
    title: 'Responsive Medical Portal',
    excerpt: 'Designing patient-first digital experiences on web & mobile.',
    category: 'Web Design',
    tags: ['Web Design', 'UI/UX Design'],
    description: LOREM,
  },
  {
    slug: 'project-3',
    title: 'Targeted Patient Acquisition',
    excerpt: 'Driving appointments via Google & social PPC campaigns.',
    category: 'Marketing',
    tags: ['Marketing', 'PPC Campaigns'],
    description: LOREM,
  },
  {
    slug: 'project-4',
    title: 'Clinic Logo & Collateral',
    excerpt: 'Custom logo design for specialized clinics.',
    category: 'Branding',
    tags: ['Logo Design', 'Branding'],
    description: LOREM,
  },
  {
    slug: 'project-5',
    title: 'Custom Telehealth Platform',
    excerpt: 'Secure portal development for medical communications.',
    category: 'Web Design',
    tags: ['Web Design', 'Development'],
    description: LOREM,
  },
  {
    slug: 'project-6',
    title: 'Social Media Growth Campaign',
    excerpt: 'Growing brand awareness and engagement across channels.',
    category: 'Marketing',
    tags: ['Marketing', 'Social Media'],
    description: LOREM,
  },
  {
    slug: 'project-7',
    title: 'Visual Brand Guidelines',
    excerpt: 'Establishing cohesive styles and color schemes.',
    category: 'Branding',
    tags: ['Branding', 'Identity'],
    description: LOREM,
  },
  {
    slug: 'project-8',
    title: 'Dental Practice Website',
    excerpt: 'Modern responsive designs built for dentists and patients.',
    category: 'Web Design',
    tags: ['Web Design', 'UI/UX Design'],
    description: LOREM,
  },
  {
    slug: 'project-9',
    title: 'Local Healthcare SEO',
    excerpt: 'Optimizing visibility for local search and discovery.',
    category: 'Marketing',
    tags: ['Marketing', 'SEO'],
    description: LOREM,
  },
]

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug)
}

