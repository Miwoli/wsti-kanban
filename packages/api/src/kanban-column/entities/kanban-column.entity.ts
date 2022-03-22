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
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number

  @ApiProperty({
    example: 'Lorem ipsum',
    description: 'The name of the column',
  })
  @Column()
  name: string

  @OneToMany(() => KanbanNote, (notes) => notes.kanbanColumn, {
    cascade: ['remove'],
    eager: true,
  })
  @JoinColumn({ name: 'kanbanColumn' })
  notes: KanbanNote[]
}
