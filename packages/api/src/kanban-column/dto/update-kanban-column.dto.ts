import { PartialType } from '@nestjs/mapped-types'
import { KanbanNote } from 'src/kanban-note/entities/kanban-note.entity'
import { CreateKanbanColumnDto } from './create-kanban-column.dto'

export class UpdateKanbanColumnDto extends PartialType(CreateKanbanColumnDto) {
  readonly name: string
  readonly kanbanNote: KanbanNote[]
}
