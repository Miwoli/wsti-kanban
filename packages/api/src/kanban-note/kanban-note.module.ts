import { Module } from '@nestjs/common'
import { KanbanNoteService } from './kanban-note.service'
import { KanbanNoteController } from './kanban-note.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { KanbanNote } from './entities/kanban-note.entity'
import { UsersModule } from 'src/users/users.module'
import { UsersService } from 'src/users/users.service'
import { User } from 'src/users/entities/user.entity'

@Module({
  imports: [TypeOrmModule.forFeature([KanbanNote, User]), UsersModule],
  controllers: [KanbanNoteController],
  providers: [KanbanNoteService, UsersService],
})
export class KanbanNoteModule {}
