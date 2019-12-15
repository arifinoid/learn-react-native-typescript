import React from 'react';
import renderer from 'react-test-renderer';

import CounterComponent from '../../components/Counter';

it('renders correctly with defaults', () => {
  const button = renderer
    .create(<CounterComponent name="Matt" enthusiasmLevel={1} />)
    .toJSON();
  expect(button).toMatchSnapshot();
});
