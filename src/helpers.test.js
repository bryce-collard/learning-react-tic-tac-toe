import { calculateWinner } from './helpers';

test('should return X as the winner if it has the top row', () => {
   const squares = ['X', 'X', 'X', 'O', null, 'O', null, null, null];
   
   const winner = calculateWinner(squares);
 
   expect(winner).toBe('X');
 });

 test('should return O as the winner if it has the middle column', () => {
   const squares = ['X', 'O', 'X', 'O', 'O', null, 'X', 'O', null];
   
   const winner = calculateWinner(squares);
 
   expect(winner).toBe('O');
 });

 test('should return null as the winner if noone has won yet', () => {
   const squares = ['X', null, 'X', 'O', 'O', null, 'X', 'O', null];
   
   const winner = calculateWinner(squares);
 
   expect(winner).toBe(null);
 });