import { KanbanColumn } from 'src/kanban-column/entities/kanban-column.entity'

export class CreateKanbanNoteDto {
  readonly title: string
  readonly description?: string
  readonly kanbanColumn: KanbanColumn
}
