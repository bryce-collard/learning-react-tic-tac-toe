import { render, fireEvent } from '@testing-library/react';
import Board from './Board';

test('should render alternating Xs and Os on clicks', () => {
  const board = render(<Board />);
  const buttons = board.queryAllByRole('button');
  
  buttons.forEach(b => {
    expect(b.innerHTML).toBe("")
  })
  
  fireEvent.click(buttons[2]);
  expect(buttons[2].innerHTML).toBe("X");

  fireEvent.click(buttons[0]);
  expect(buttons[0].innerHTML).toBe("O");

  fireEvent.click(buttons[0]);
  expect(buttons[0].innerHTML).toBe("X");
});

test('status should correctly signal next player', () => {
  const board = render(<Board />);
  const buttons = board.queryAllByRole('button');
  const status = board.getByText("Next player: X");

  expect(status.innerHTML).toBe("Next player: X");

  fireEvent.click(buttons[5]);
  expect(status.innerHTML).toBe("Next player: O");

  fireEvent.click(buttons[6]);
  expect(status.innerHTML).toBe("Next player: X");
})