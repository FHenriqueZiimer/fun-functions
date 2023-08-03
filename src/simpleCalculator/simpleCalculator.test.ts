import { simpleCalculator } from './simpleCalculator'

describe('testing simple Calculator', () => {
  it('should correctly add two numbers', () => {
    expect(simpleCalculator(2, 3, '+')).toBe(5);
  });

  it('should correctly subtract two numbers', () => {
    expect(simpleCalculator(5, 3, '-')).toBe(2);
  });

  it('should correctly multiply two numbers', () => {
    expect(simpleCalculator(4, 6, '*')).toBe(24);
  });

  it('should correctly divide two numbers', () => {
    expect(simpleCalculator(10, 2, '/')).toBe(5);
  });

  it('should handle division by zero', () => {
    expect(simpleCalculator(8, 0, '/')).toBe('Cannot divide by zero');
  });

  it('should return message for invalid operator', () => {
    expect(simpleCalculator(5, 3, '&')).toBe('Invalid operator');
  });
})