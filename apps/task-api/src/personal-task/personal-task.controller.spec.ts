import { Test, TestingModule } from '@nestjs/testing';
import { PersonalTaskController } from './personal-task.controller';

describe('PersonalTaskController', () => {
  let controller: PersonalTaskController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonalTaskController],
    }).compile();

    controller = module.get<PersonalTaskController>(PersonalTaskController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
