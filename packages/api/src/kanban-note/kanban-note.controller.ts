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
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'
import { UsersService } from 'src/users/users.service'

@Controller('kanban-note')
export class KanbanNoteController {
  constructor(
    private readonly kanbanNoteService: KanbanNoteService,
    private _userService: UsersService,
  ) {}

  @Post()
  async create(
    @Body() createKanbanNoteDto: CreateKanbanNoteDto,
    @Request() req: any,
  ) {
    const user = await this._userService.findOne(req.user.login)
    const created = { ...createKanbanNoteDto, createdBy: user }
    return this.kanbanNoteService.save(created)
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
