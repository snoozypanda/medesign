import type { Project } from '@/backend/features/projects/projects'
import { PROJECTS as STATIC_PROJECTS } from '@/backend/features/projects/projects'

export type StoredProject = Project & {
  id: string
}

const STORAGE_KEY = 'med_projects'
const INIT_KEY = 'med_projects_init'

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7)
}

function ensureInitialized(): void {
  if (localStorage.getItem(INIT_KEY)) return
  const existing: StoredProject[] = STATIC_PROJECTS.map((p, i) => ({
    ...p,
    id: `static-${i}`,
  }))
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing))
  localStorage.setItem(INIT_KEY, '1')
}

export function getProjects(): StoredProject[] {
  ensureInitialized()
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch {}
  return STATIC_PROJECTS.map((p, i) => ({ ...p, id: `static-${i}` }))
}

export function getProject(id: string): StoredProject | undefined {
  return getProjects().find((p) => p.id === id)
}

export function saveProject(
  project: Omit<StoredProject, 'id'> & { id?: string },
): StoredProject {
  const projects = getProjects()

  if (project.id) {
    const idx = projects.findIndex((p) => p.id === project.id)
    if (idx !== -1) {
      projects[idx] = { ...projects[idx], ...project }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(projects))
      return projects[idx]
    }
  }

  const newProject: StoredProject = {
    ...project,
    id: generateId(),
  }
  projects.push(newProject)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects))
  return newProject
}

export function deleteProject(id: string): void {
  const projects = getProjects().filter((p) => p.id !== id)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects))
}
