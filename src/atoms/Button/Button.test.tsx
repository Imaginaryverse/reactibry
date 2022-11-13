import React, { FC } from 'react';
import { render } from '@testing-library/react';
import { Button } from './Button';

describe.skip('Button', () => {
  test('renders Button component', () => {
    render(<Button label='Test' />);
  });
});
