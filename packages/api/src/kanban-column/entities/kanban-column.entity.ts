import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { KanbanNote } from '../../kanban-note/entities/kanban-note.entity'

@Entity()
export class KanbanColumn {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @OneToMany((type) => KanbanNote, (note) => note.kanbanColumn, {
    cascade: ['remove'],
  })
  notes: KanbanNote[]
}
