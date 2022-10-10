export class TraceableTaskDto {
  id?: number;
  task: string;
  state: string;
  constructor() {
    this.task = '';
    this.state = '';
  }
}
