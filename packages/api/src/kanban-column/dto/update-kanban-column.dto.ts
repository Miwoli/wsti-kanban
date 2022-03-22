import { PartialType } from '@nestjs/mapped-types'
import { ApiProperty } from '@nestjs/swagger'
import { KanbanNote } from 'src/kanban-note/entities/kanban-note.entity'
import { CreateKanbanColumnDto } from './create-kanban-column.dto'

export class UpdateKanbanColumnDto extends PartialType(CreateKanbanColumnDto) {
  @ApiProperty()
  readonly name: string
  @ApiProperty()
  readonly kanbanNote: KanbanNote[]
}
