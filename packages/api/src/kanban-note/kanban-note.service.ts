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
    return this.kanbanNoteRepository.create(createKanbanNoteDto)
  }

  findAll() {
    return this.kanbanNoteRepository.find()
  }

  findOne(id: number): Promise<KanbanNote> {
    return this.kanbanNoteRepository.findOne(id)
  }

  update(id: number, updateKanbanNoteDto: UpdateKanbanNoteDto) {
    return this.kanbanNoteRepository.update(id, updateKanbanNoteDto)
  }

  async remove(id: number): Promise<void> {
    await this.kanbanNoteRepository.delete(id)
  }
}
