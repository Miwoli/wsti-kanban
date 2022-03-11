import { ApiProperty } from '@nestjs/swagger'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { KanbanNote } from '../../kanban-note/entities/kanban-note.entity'

@Entity()
export class KanbanColumn {
  @PrimaryGeneratedColumn()
  id: number

  @ApiProperty({
    example: 'Lorem ipsum',
    description: 'The name of the column',
  })
  @Column()
  name: string

  @OneToMany((type) => KanbanNote, (note) => note.kanbanColumn, {
    cascade: ['remove'],
  })
  notes: KanbanNote[]
}
