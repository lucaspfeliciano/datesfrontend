import { type User } from './User'

export interface Post {
  id: string
  timestamp: number
  companyId: string
  type: 'poll' | 'high-five' | 'announcement'
  viewers: 'all' | string
  message: string
  owner: User
  options?: string[]
  time?: number // in days
  votes?: Record<string, string>
  image?: string
  createdAt: string
  updatedAt: string
}
