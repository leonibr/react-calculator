import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { addOperation } from './model/addOperation';
import { subtractOperation } from './model/subtractOperation';
import Calculator from './Calculator';

test('renders learn react link', () => {
  const { getByText } = render(<Calculator />);
 // const acButton = getByText(/c/i);
  expect(getByText).toBeTruthy();
});


/// Unit test operation functions



