import { Module } from '@nestjs/common'
import { KanbanColumnService } from './kanban-column.service'
import { KanbanColumnController } from './kanban-column.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { KanbanColumn } from './entities/kanban-column.entity'

@Module({
  imports: [TypeOrmModule.forFeature([KanbanColumn])],
  controllers: [KanbanColumnController],
  providers: [KanbanColumnService],
})
export class KanbanColumnModule {}
