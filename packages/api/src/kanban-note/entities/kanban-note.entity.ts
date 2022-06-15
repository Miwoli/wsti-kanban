import { ApiProperty } from '@nestjs/swagger'
import { KanbanColumn } from 'src/kanban-column/entities/kanban-column.entity'
import { User } from 'src/users/entities/user.entity'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class KanbanNote {
  @PrimaryGeneratedColumn()
  id: number

  @ApiProperty({
    example: 'Lorem Ipsum',
    description: 'The title of the note',
  })
  @Column()
  title: string

  @ApiProperty({
    example: 'Lorem ipsum dolor sit amet',
    description: 'The content of the note',
  })
  @Column()
  description?: string

  @ApiProperty({
    example: 1,
    description: 'ID of the column the note belongs to',
  })
  @ManyToOne(() => KanbanColumn, (column) => column.id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  kanbanColumn: KanbanColumn

  @ApiProperty({
    example: 1,
    description: 'ID of the user the note was created by',
  })
  @ManyToOne(() => User, (user) => user.id, {
    onDelete: 'CASCADE',
  })
  createdBy: User
}
