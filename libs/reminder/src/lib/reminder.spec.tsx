import { render } from '@testing-library/react';

import Reminder from './reminder';

describe('Reminder', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reminder />);
    expect(baseElement).toBeTruthy();
  });
});
