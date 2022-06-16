import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common'
import { KanbanNoteService } from './kanban-note.service'
import { CreateKanbanNoteDto } from './dto/create-kanban-note.dto'
import { UpdateKanbanNoteDto } from './dto/update-kanban-note.dto'
import { Public } from 'src/auth/public.decorator'
import { request } from 'express'
import { AuthGuard } from '@nestjs/passport'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'

@Controller('kanban-note')
export class KanbanNoteController {
  constructor(private readonly kanbanNoteService: KanbanNoteService) {}

  @Post()
  create(@Body() createKanbanNoteDto: CreateKanbanNoteDto) {
    return this.kanbanNoteService.save(createKanbanNoteDto)
  }

  @Public()
  @Get()
  findAll() {
    return this.kanbanNoteService.findAll()
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.kanbanNoteService.findOne(+id)
  }

  @UseGuards(JwtAuthGuard)
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
