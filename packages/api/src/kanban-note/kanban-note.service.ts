import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateKanbanNoteDto } from './dto/create-kanban-note.dto'
import { UpdateKanbanNoteDto } from './dto/update-kanban-note.dto'
import { KanbanNote } from './entities/kanban-note.entity'

@Injectable()
export class KanbanNoteService {
  constructor(
    @InjectRepository(KanbanNote)
    private kanbanNoteRepository: Repository<KanbanNote>,
  ) {}

  create(createKanbanNoteDto: CreateKanbanNoteDto) {
    return 'This action adds a new kanbanNote'
  }

  findAll() {
    return this.kanbanNoteRepository.find()
  }

  findOne(id: number): Promise<KanbanNote> {
    return this.kanbanNoteRepository.findOne(id)
  }

  update(id: number, updateKanbanNoteDto: UpdateKanbanNoteDto) {
    return `This action updates a #${id} kanbanNote`
  }

  async remove(id: number): Promise<void> {
    await this.kanbanNoteRepository.delete(id)
  }
}
