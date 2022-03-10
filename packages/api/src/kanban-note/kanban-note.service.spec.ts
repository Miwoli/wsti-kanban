import { Test, TestingModule } from '@nestjs/testing';
import { KanbanNoteService } from './kanban-note.service';

describe('KanbanNoteService', () => {
  let service: KanbanNoteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KanbanNoteService],
    }).compile();

    service = module.get<KanbanNoteService>(KanbanNoteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
