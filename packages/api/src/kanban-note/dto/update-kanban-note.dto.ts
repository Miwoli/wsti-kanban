import { PartialType } from '@nestjs/mapped-types'
import { ApiProperty } from '@nestjs/swagger'
import { KanbanColumn } from 'src/kanban-column/entities/kanban-column.entity'
import { CreateKanbanNoteDto } from './create-kanban-note.dto'

export class UpdateKanbanNoteDto extends PartialType(CreateKanbanNoteDto) {
  @ApiProperty()
  readonly title?: string
  @ApiProperty()
  readonly description?: string
  @ApiProperty()
  readonly kanbanColumn?: KanbanColumn
}
