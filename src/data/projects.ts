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

// Nine portfolio entries to fill the 3×3 Work grid (page 4); the first four
// also drive the stacked case-study detail rows (page 5).
export const PROJECTS: Project[] = Array.from({ length: 9 }, (_, i) => ({
  slug: `project-${i + 1}`,
  title: 'About',
  excerpt: 'We’re not just another',
  category: ['Branding', 'Web Design', 'Marketing'][i % 3],
  tags: ['Top Rates', 'Top Rates'],
  description: LOREM,
}))

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug)
}
