export type BlogPost = {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  author: string
  image: string
  publishedAt: string
  tags: string[]
}

const STORAGE_KEY = 'med_blog_posts'

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7)
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

export function getBlogPosts(): BlogPost[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch {}
  return []
}

export function getBlogPost(id: string): BlogPost | undefined {
  return getBlogPosts().find((p) => p.id === id)
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return getBlogPosts().find((p) => p.slug === slug)
}

export function saveBlogPost(
  post: Omit<BlogPost, 'id' | 'slug' | 'publishedAt'> & { id?: string; slug?: string },
): BlogPost {
  const posts = getBlogPosts()
  const now = new Date().toISOString()

  if (post.id) {
    const idx = posts.findIndex((p) => p.id === post.id)
    if (idx !== -1) {
      posts[idx] = { ...posts[idx], ...post, slug: post.slug || slugify(post.title) }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(posts))
      return posts[idx]
    }
  }

  const newPost: BlogPost = {
    id: generateId(),
    slug: slugify(post.title),
    publishedAt: now,
    ...post,
  }
  posts.unshift(newPost)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts))
  return newPost
}

export function deleteBlogPost(id: string): void {
  const posts = getBlogPosts().filter((p) => p.id !== id)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts))
}
