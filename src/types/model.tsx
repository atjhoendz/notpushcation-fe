export type User = {
  id: number
  username: string
}

export type Community = {
  id: number
  name: string
}

export type Thread = {
  id: number
  title: string
  content: string
  community: Community
  created_by: User
  created_at: string
  lead_media?: string
  is_live_blog?: boolean
}
