import {fireEvent, render} from '@testing-library/react';

import Add from './add';
import {TraceableTask} from "../../index";

describe('Add', () => {
  it('should render successfully', () => {
    const elements: Array<TraceableTask> = [];
    const appendElement = (value: TraceableTask) => {
      elements.push(value)
    }
    const {baseElement, getByLabelText, getByRole } = render(<Add append={appendElement}/>);
    expect(baseElement).toBeTruthy();
    const input = getByLabelText('Add new task');
    fireEvent.change(input, {
      target: {
        value: 'my new task'
      }
    });
    const button = getByRole('button');
    // @ts-ignore
    expect(input.value).toBe('my new task');
    fireEvent.click(button);
    expect(elements.length).toEqual(1);
  });
});
