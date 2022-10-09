import { PersonalTask, TraceableTask } from '@ues-demo/types';
import { useState } from 'react';
import styles from './add.module.css';

/* eslint-disable-next-line */
export interface AddProps {
  append: (task: TraceableTask) => void;
}

export function Add(props: AddProps) {
  const { append } = props;
  const [task, setTask] = useState('');
  return (
    <form className={styles['container']}>
      <h2>My Tasks</h2>
      <label>Add new task</label>
      <input 
        type='text' 
        placeholder='New Task'
        onChange={({target}) => setTask( target.value )}
        value={task}
      />
      <button type='button'
      onClick={(e) => {
        e.preventDefault();
        append(new PersonalTask(task));
        setTask('');
      }}> Add </button>
    </form>
  );
}

export default Add;
