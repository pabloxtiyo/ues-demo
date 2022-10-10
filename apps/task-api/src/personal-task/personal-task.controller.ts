import {Body, Controller, Get, Post} from '@nestjs/common';
import {PersonalTaskService} from "./personal-task.service";
import {TraceableTaskDto} from "./traceable-task.dto";

@Controller('/personal-task')
export class PersonalTaskController {
  constructor(private service: PersonalTaskService) {
  }

  @Post()
  async save(@Body() payload: TraceableTaskDto): Promise<TraceableTaskDto> {
    return this.service.create(payload);
  }

  @Get()
  async all(): Promise<TraceableTaskDto[]> {
    return this.service.findAll();
  }
}
