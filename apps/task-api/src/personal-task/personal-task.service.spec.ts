import { Test, TestingModule } from '@nestjs/testing';
import { PersonalTaskService } from './personal-task.service';

describe('PersonalTaskService', () => {
  let service: PersonalTaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonalTaskService],
    }).compile();

    service = module.get<PersonalTaskService>(PersonalTaskService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
