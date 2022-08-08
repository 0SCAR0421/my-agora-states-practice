import React from 'react'
import {render, screen} from '@testing-library/react'
import Check from './Check';

// it('render App', () => {
//   const { getByText } = render(<App></App>)
//   const target = getByText(/^My Agora States!/)
//   expect(target).toHaveTextContent('My Agora States!')
// })

it('renders', () => {
  render(<Check />)
  screen.getByText(/^Checkdd/);
})