export type ContactMessage = {
  id: string
  name: string
  email: string
  phone: string
  company: string
  interest: string
  budget: string
  message: string
  createdAt: string
  read: boolean
}

const STORAGE_KEY = 'med_messages'

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7)
}

export function getMessages(): ContactMessage[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch {}
  return []
}

export function getUnreadCount(): number {
  return getMessages().filter((m) => !m.read).length
}

export function addMessage(
  msg: Omit<ContactMessage, 'id' | 'createdAt' | 'read'>,
): ContactMessage {
  const messages = getMessages()
  const newMsg: ContactMessage = {
    ...msg,
    id: generateId(),
    createdAt: new Date().toISOString(),
    read: false,
  }
  messages.unshift(newMsg)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
  return newMsg
}

export function markAsRead(id: string): void {
  const messages = getMessages()
  const msg = messages.find((m) => m.id === id)
  if (msg) {
    msg.read = true
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
  }
}

export function markAsUnread(id: string): void {
  const messages = getMessages()
  const msg = messages.find((m) => m.id === id)
  if (msg) {
    msg.read = false
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
  }
}

export function deleteMessage(id: string): void {
  const messages = getMessages().filter((m) => m.id !== id)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
}
