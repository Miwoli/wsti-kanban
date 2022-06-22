import { User } from "./user"

export interface Note {
  id?: number
  title: string
  description?: string
  kanbanColumn: number
  createdBy?: User
}
