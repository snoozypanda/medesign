import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { StatsCard } from '@/frontend/features/admin/components/StatsCard'
import { getBlogPosts } from '@/backend/features/admin/blogStore'
import { getProjects } from '@/backend/features/admin/projectStore'
import { getMessages, getUnreadCount } from '@/backend/features/admin/messageStore'
import { FileText, Briefcase, MessageSquare, Eye } from '@/frontend/shared/components/Icon'

export default function Dashboard() {
  const stats = useMemo(() => {
    const blogs = getBlogPosts()
    const projects = getProjects()
    const messages = getMessages()
    const unread = getUnreadCount()
    return { blogCount: blogs.length, projectCount: projects.length, messageCount: messages.length, unreadCount: unread }
  }, [])

  const recentMessages = useMemo(() => getMessages().slice(0, 5), [])
  const recentBlogs = useMemo(() => getBlogPosts().slice(0, 5), [])

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-ink">Dashboard</h1>

      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard label="Blog Posts" value={stats.blogCount} icon={<FileText className="h-6 w-6" />} />
        <StatsCard label="Projects" value={stats.projectCount} icon={<Briefcase className="h-6 w-6" />} />
        <StatsCard label="Messages" value={stats.messageCount} icon={<MessageSquare className="h-6 w-6" />} />
        <StatsCard
          label="Unread"
          value={stats.unreadCount}
          icon={<Eye className="h-6 w-6" />}
          accent
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-ink">Recent Messages</h2>
            <Link to="/admin/messages" className="text-sm font-medium text-accent hover:underline">
              View all
            </Link>
          </div>
          {recentMessages.length === 0 ? (
            <p className="text-sm text-slate-body">No messages yet.</p>
          ) : (
            <div className="space-y-3">
              {recentMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-center justify-between rounded-xl border p-3 ${
                    !msg.read ? 'border-accent/30 bg-accent/5' : 'border-slate-100'
                  }`}
                >
                  <div>
                    <p className="text-sm font-medium text-ink">{msg.name}</p>
                    <p className="text-xs text-slate-body">{msg.email}</p>
                  </div>
                  <span className="text-xs text-slate-muted">
                    {new Date(msg.createdAt).toLocaleDateString()}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-ink">Recent Blog Posts</h2>
            <Link to="/admin/blog" className="text-sm font-medium text-accent hover:underline">
              View all
            </Link>
          </div>
          {recentBlogs.length === 0 ? (
            <p className="text-sm text-slate-body">No blog posts yet.</p>
          ) : (
            <div className="space-y-3">
              {recentBlogs.map((post) => (
                <div
                  key={post.id}
                  className="flex items-center justify-between rounded-xl border border-slate-100 p-3"
                >
                  <div>
                    <p className="text-sm font-medium text-ink">{post.title}</p>
                    <p className="text-xs text-slate-body">{post.category}</p>
                  </div>
                  <span className="text-xs text-slate-muted">
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
