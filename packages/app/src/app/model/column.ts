import { Note } from './note'

export interface Column {
  id?: number
  name: string
  notes?: Note[]
}
