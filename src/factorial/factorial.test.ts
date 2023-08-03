import { calculateFactorial } from './factorial'; 

describe('calculateFactorial', () => {
  it('should return 1 for input 0', () => {
    expect(calculateFactorial(0)).toBe(1);
  });

  it('should return 1 for input 1', () => {
    expect(calculateFactorial(1)).toBe(1);
  });

  it('should calculate factorial for positive integers', () => {
    expect(calculateFactorial(5)).toBe(120);
    expect(calculateFactorial(7)).toBe(5040);
    expect(calculateFactorial(10)).toBe(3628800);
  });
});