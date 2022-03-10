import { PartialType } from '@nestjs/mapped-types';
import { CreateKanbanNoteDto } from './create-kanban-note.dto';

export class UpdateKanbanNoteDto extends PartialType(CreateKanbanNoteDto) {}
