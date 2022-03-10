import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateKanbanColumnDto } from './dto/create-kanban-column.dto'
import { UpdateKanbanColumnDto } from './dto/update-kanban-column.dto'
import { KanbanColumn } from './entities/kanban-column.entity'

@Injectable()
export class KanbanColumnService {
  constructor(
    @InjectRepository(KanbanColumn)
    private kanbanColumnRepository: Repository<KanbanColumn>,
  ) {}

  create(createKanbanColumnDto: CreateKanbanColumnDto) {
    return 'This action adds a new kanbanColumn'
  }

  findAll(): Promise<KanbanColumn[]> {
    return this.kanbanColumnRepository.find()
  }

  findOne(id: number): Promise<KanbanColumn> {
    return this.kanbanColumnRepository.findOne(id)
  }

  update(id: number, updateKanbanColumnDto: UpdateKanbanColumnDto) {
    return `This action updates a #${id} kanbanColumn`
  }

  async remove(id: number): Promise<void> {
    await this.kanbanColumnRepository.delete(id)
  }
}
