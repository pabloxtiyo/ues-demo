import {render} from '@testing-library/react';

import Display from './display';
import {STATES, TraceableTask} from "../../index";


const mockData: Array<TraceableTask> = [
  {
    task: 'todo 1',
    state: STATES.PENDING
  },
  {
    task: 'todo 2',
    state: STATES.IN_PROGRESS
  },
  {
    task: 'todo 3',
    state: STATES.DONE
  },
  {
    task: 'todo 4',
    state: STATES.PENDING
  }
]
describe('Display', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<Display items={mockData} state={STATES.PENDING}/>);
    expect(baseElement).toBeTruthy();
  });
  it('should display only pending items', () => {
    const {baseElement} = render(<Display items={mockData} state={STATES.PENDING} />);
    expect(baseElement).toBeTruthy();
    expect(baseElement.getElementsByTagName('li').length).toEqual(2);
  })
});
