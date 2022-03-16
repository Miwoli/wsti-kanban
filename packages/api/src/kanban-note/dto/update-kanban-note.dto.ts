import { PartialType } from '@nestjs/mapped-types'
import { KanbanColumn } from 'src/kanban-column/entities/kanban-column.entity'
import { CreateKanbanNoteDto } from './create-kanban-note.dto'

export class UpdateKanbanNoteDto extends PartialType(CreateKanbanNoteDto) {
  readonly title?: string
  readonly description?: string
  readonly kanbanColumn?: KanbanColumn
}
