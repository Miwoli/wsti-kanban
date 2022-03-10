import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class KanbanNote {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  description: string

  @Column()
  kanbanColumn: number
}
