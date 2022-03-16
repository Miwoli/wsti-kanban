import { ApiProperty } from '@nestjs/swagger'
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
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

  @OneToMany((type) => KanbanNote, (notes) => notes.kanbanColumn, {
    // cascade: ['remove', 'update'],
    eager: true,
  })
  @JoinColumn({ name: 'kanbanColumn' })
  notes: KanbanNote[]
}
