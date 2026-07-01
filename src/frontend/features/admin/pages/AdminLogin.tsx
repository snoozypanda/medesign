import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '@/frontend/features/admin/auth'
import { Logo } from '@/frontend/shared/components/Logo'

export default function AdminLogin() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    const user = login(email, password)
    if (user) {
      navigate('/admin/dashboard', { replace: true })
    } else {
      setError('Invalid email or password')
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-ink p-6">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <Logo variant="light" className="mx-auto text-4xl" />
          <p className="mt-2 text-sm text-white/50">Admin Dashboard</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/10 bg-ink/80 p-6 backdrop-blur-sm"
        >
          <div className="mb-4">
            <label className="mb-1.5 block text-sm font-medium text-white" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-ink/40 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/20"
              placeholder="admin@medesign.com"
              required
            />
          </div>

          <div className="mb-6">
            <label className="mb-1.5 block text-sm font-medium text-white" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-ink/40 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/20"
              placeholder="Enter password"
              required
            />
          </div>

          {error && (
            <p className="mb-4 text-sm text-red-400">{error}</p>
          )}

          <button
            type="submit"
            className="w-full rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-accent-hover"
          >
            Sign in
          </button>

          <p className="mt-4 text-center text-xs text-white/30">
            Demo: admin@medesign.com / admin123
          </p>
        </form>
      </div>
    </div>
  )
}
