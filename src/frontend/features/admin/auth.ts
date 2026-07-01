const AUTH_KEY = 'med_admin_auth'

export type AdminUser = {
  email: string
  name: string
}

const ADMIN_CREDENTIALS = {
  email: 'admin@medesign.com',
  password: 'admin123',
}

export function login(email: string, password: string): AdminUser | null {
  if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
    const user: AdminUser = { email, name: 'Admin' }
    localStorage.setItem(AUTH_KEY, JSON.stringify(user))
    return user
  }
  return null
}

export function logout(): void {
  localStorage.removeItem(AUTH_KEY)
}

export function getCurrentUser(): AdminUser | null {
  try {
    const raw = localStorage.getItem(AUTH_KEY)
    if (raw) return JSON.parse(raw)
  } catch {}
  return null
}

export function isAuthenticated(): boolean {
  return getCurrentUser() !== null
}
