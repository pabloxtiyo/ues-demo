import { useEffect, useState } from 'react';
import Add from './add/add';
import Display from './display/display';
import styles from './reminder.module.css';
import { PersonalTask, STATES, TraceableTask } from '../index';
import axios from 'axios';

/* eslint-disable-next-line */
export interface ReminderProps {}

export function Reminder(props: ReminderProps) {
  const [tasks, setTasks] = useState(Array<TraceableTask>);
  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get('/api/personal-task');
      setTasks(data.map((e: TraceableTask) => new PersonalTask(e.task)));
    };
    fetch();
  }, []);
  const appendTask = (task: TraceableTask) => {
    const fetch = async () => {
      const { data } = await axios.post('/api/personal-task', task);
      setTasks([...tasks, data]);
    };
    fetch();
  };
  return (
    <div className={styles['container']} data-testid="container">
      <div>
        <Add append={appendTask} />
      </div>
      <div>
        <Display key={STATES.PENDING} items={tasks} state={STATES.PENDING} />
      </div>
      <div>
        <Display
          key={STATES.IN_PROGRESS}
          items={tasks}
          state={STATES.IN_PROGRESS}
        />
      </div>
      <div>
        <Display key={STATES.DONE} items={tasks} state={STATES.DONE} />
      </div>
    </div>
  );
}

export default Reminder;
