import { ApiProperty } from '@nestjs/swagger'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

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
  @Column()
  kanbanColumn: number
}
