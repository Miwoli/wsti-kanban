import { ApiProperty } from '@nestjs/swagger'
import { KanbanColumn } from 'src/kanban-column/entities/kanban-column.entity'
import { User } from 'src/users/entities/user.entity'

export class CreateKanbanNoteDto {
  @ApiProperty()
  readonly title: string
  @ApiProperty()
  readonly description?: string
  @ApiProperty()
  readonly kanbanColumn: KanbanColumn
  @ApiProperty()
  readonly createdBy: User
}
