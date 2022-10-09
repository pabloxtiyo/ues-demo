export * from './lib/display/display';
export * from './lib/add/add';
export * from './lib/reminder';

export enum STATES {
  PENDING = 'Pending',
  IN_PROGRESS ='In Progress',
  DONE ='Done'
}
export interface TraceableTask {
  task: string;
  state: STATES
}

export class PersonalTask implements TraceableTask {
  task: string;
  state: STATES;
  constructor(value: string){
    this.task = value;
    this.state = STATES.PENDING;
  }
}
