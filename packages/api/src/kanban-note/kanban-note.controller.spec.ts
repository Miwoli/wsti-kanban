import { Test, TestingModule } from '@nestjs/testing';
import { KanbanNoteController } from './kanban-note.controller';
import { KanbanNoteService } from './kanban-note.service';

describe('KanbanNoteController', () => {
  let controller: KanbanNoteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KanbanNoteController],
      providers: [KanbanNoteService],
    }).compile();

    controller = module.get<KanbanNoteController>(KanbanNoteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
