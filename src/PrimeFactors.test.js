import {PrimeFactors} from './PrimeFactors.js';

test('should calculate prime factors of 1', () => {
  const primeFactors = new PrimeFactors();
  expect(primeFactors.calc(1)).toEqual([]);
});

// test('should calculate prime factors of 2', () => {
//   const primeFactors = new PrimeFactors();
//   expect(primeFactors.calc(2)).toEqual([2]);
// });
//
// test('should calculate prime factors of 3', () => {
//   const primeFactors = new PrimeFactors();
//   expect(primeFactors.calc(3)).toEqual([3]);
// });
//
// test('should calculate prime factors of 4', () => {
//   const primeFactors = new PrimeFactors();
//   expect(primeFactors.calc(4)).toEqual([2, 2]);
// });
