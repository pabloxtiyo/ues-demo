import { render } from '@testing-library/react';

import Reminder from './reminder';

describe('Reminder', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reminder />);
    expect(baseElement).toBeTruthy();
  });
  it('All components', () => {
    const { baseElement, getByTestId } = render(<Reminder />);
    expect(baseElement.childElementCount).toEqual(1);
    const container = getByTestId('container');
    expect(container.childElementCount).toEqual(4);
  })
});
