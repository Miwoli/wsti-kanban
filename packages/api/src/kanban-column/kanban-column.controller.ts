import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { KanbanColumnService } from './kanban-column.service'
import { CreateKanbanColumnDto } from './dto/create-kanban-column.dto'
import { UpdateKanbanColumnDto } from './dto/update-kanban-column.dto'
import { KanbanColumn } from './entities/kanban-column.entity'
import { ApiResponse } from '@nestjs/swagger'

@Controller('kanban-column')
export class KanbanColumnController {
  constructor(private readonly kanbanColumnService: KanbanColumnService) {}

  @Post()
  create(@Body() createKanbanColumnDto: CreateKanbanColumnDto) {
    return this.kanbanColumnService.save(createKanbanColumnDto)
  }

  @Get()
  @ApiResponse({ type: [KanbanColumn] })
  findAll(): Promise<KanbanColumn[]> {
    return this.kanbanColumnService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kanbanColumnService.findOne(+id)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateKanbanColumnDto: UpdateKanbanColumnDto,
  ) {
    return this.kanbanColumnService.update(+id, updateKanbanColumnDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kanbanColumnService.remove(+id)
  }
}
