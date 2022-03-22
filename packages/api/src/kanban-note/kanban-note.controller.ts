import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { KanbanNoteService } from './kanban-note.service'
import { CreateKanbanNoteDto } from './dto/create-kanban-note.dto'
import { UpdateKanbanNoteDto } from './dto/update-kanban-note.dto'

@Controller('kanban-note')
export class KanbanNoteController {
  constructor(private readonly kanbanNoteService: KanbanNoteService) {}

  @Post()
  create(@Body() createKanbanNoteDto: CreateKanbanNoteDto) {
    console.log(createKanbanNoteDto)
    return this.kanbanNoteService.save(createKanbanNoteDto)
  }

  @Get()
  findAll() {
    return this.kanbanNoteService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.kanbanNoteService.findOne(+id)
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateKanbanNoteDto: UpdateKanbanNoteDto,
  ) {
    return this.kanbanNoteService.update(+id, updateKanbanNoteDto)
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.kanbanNoteService.remove(+id)
  }
}
