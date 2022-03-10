import { Test, TestingModule } from '@nestjs/testing';
import { KanbanColumnController } from './kanban-column.controller';
import { KanbanColumnService } from './kanban-column.service';

describe('KanbanColumnController', () => {
  let controller: KanbanColumnController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KanbanColumnController],
      providers: [KanbanColumnService],
    }).compile();

    controller = module.get<KanbanColumnController>(KanbanColumnController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
