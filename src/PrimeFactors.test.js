import { PrimeFactors } from './PrimeFactors.js';

test('should calculate prime factors of 1', () => {
  const primeFactors = new PrimeFactors();
  expect(primeFactors.calc(1)).toEqual([]);
});
