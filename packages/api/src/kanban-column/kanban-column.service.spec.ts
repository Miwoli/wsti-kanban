import { Test, TestingModule } from '@nestjs/testing';
import { KanbanColumnService } from './kanban-column.service';

describe('KanbanColumnService', () => {
  let service: KanbanColumnService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KanbanColumnService],
    }).compile();

    service = module.get<KanbanColumnService>(KanbanColumnService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
