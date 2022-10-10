import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {TraceableTaskEntity} from "./traceable-task.entity";
import {Repository} from "typeorm";
import {TraceableTaskDto} from "./traceable-task.dto";

@Injectable()
export class PersonalTaskService {
  constructor(@InjectRepository(TraceableTaskEntity) private tasksRepository: Repository<TraceableTaskEntity>) {}
  findAll(): Promise<TraceableTaskEntity[]> {
    return this.tasksRepository.find();
  }
  create(record: TraceableTaskDto) {
    return this.tasksRepository.save(record);
  }
}
