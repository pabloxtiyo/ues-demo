
import { useState } from 'react';
import Add from './add/add';
import Display from './display/display';
import styles from './reminder.module.css';
import {STATES, TraceableTask} from "../index";

/* eslint-disable-next-line */
export interface ReminderProps {}

export function Reminder(props: ReminderProps) {
  const [tasks, setTasks] = useState(Array<TraceableTask>);
  const appendTask = (task: TraceableTask) => {
    setTasks([...tasks, task]);
  }
  return (
    <div className={styles['container']}>
      <div><Add append={appendTask}/></div>
      <div><Display key={STATES.PENDING} items={tasks} state={STATES.PENDING} /></div>
      <div><Display key={STATES.IN_PROGRESS} items={tasks} state={STATES.IN_PROGRESS} /></div>
      <div><Display key={STATES.DONE} items={tasks} state={STATES.DONE} /></div>
    </div>
  );
}

export default Reminder;
