import { Module } from '@nestjs/common'
import { KanbanNoteService } from './kanban-note.service'
import { KanbanNoteController } from './kanban-note.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { KanbanNote } from './entities/kanban-note.entity'

@Module({
  imports: [TypeOrmModule.forFeature([KanbanNote])],
  controllers: [KanbanNoteController],
  providers: [KanbanNoteService],
})
export class KanbanNoteModule {}
