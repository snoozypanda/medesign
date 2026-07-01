import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { getProjects, deleteProject } from '@/backend/features/admin/projectStore'
import { Plus, Edit, Trash2, Eye, Search } from '@/frontend/shared/components/Icon'

export default function ProjectList() {
  const [search, setSearch] = useState('')
  const [refresh, setRefresh] = useState(0)

  const projects = useMemo(() => {
    const all = getProjects()
    if (!search.trim()) return all
    const q = search.toLowerCase()
    return all.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)),
    )
  }, [search, refresh])

  function handleDelete(id: string) {
    if (window.confirm('Delete this project?')) {
      deleteProject(id)
      setRefresh((n) => n + 1)
    }
  }

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-ink">Projects</h1>
        <Link
          to="/admin/projects/new"
          className="inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-accent-hover"
        >
          <Plus className="h-4 w-4" />
          New Project
        </Link>
      </div>

      <div className="mb-6">
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-muted" />
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-ink placeholder:text-slate-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          />
        </div>
      </div>

      {projects.length === 0 ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center">
          <p className="text-slate-body">No projects found.</p>
          <Link
            to="/admin/projects/new"
            className="mt-2 inline-block text-sm font-medium text-accent hover:underline"
          >
            Create your first project
          </Link>
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-100 bg-slate-50">
              <tr>
                <th className="px-5 py-3 font-semibold text-ink">Title</th>
                <th className="px-5 py-3 font-semibold text-ink">Category</th>
                <th className="px-5 py-3 font-semibold text-ink">Tags</th>
                <th className="px-5 py-3 font-semibold text-ink">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {projects.map((project) => (
                <tr key={project.id} className="hover:bg-slate-50/50">
                  <td className="px-5 py-4 font-medium text-ink">{project.title}</td>
                  <td className="px-5 py-4 text-slate-body">{project.category}</td>
                  <td className="px-5 py-4">
                    <div className="flex flex-wrap gap-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <Link
                        to={`/work/${project.slug}`}
                        target="_blank"
                        className="rounded-lg p-2 text-slate-muted transition-colors hover:bg-slate-100 hover:text-ink"
                        title="View on site"
                      >
                        <Eye className="h-4 w-4" />
                      </Link>
                      <Link
                        to={`/admin/projects/${project.id}/edit`}
                        className="rounded-lg p-2 text-slate-muted transition-colors hover:bg-slate-100 hover:text-ink"
                        title="Edit"
                      >
                        <Edit className="h-4 w-4" />
                      </Link>
                      <button
                        onClick={() => handleDelete(project.id)}
                        className="rounded-lg p-2 text-slate-muted transition-colors hover:bg-red-50 hover:text-red-500"
                        title="Delete"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
