import { calculateFinalValue } from './investmentCalculator';

describe('calculateFinalValue', () => {
  it('should calculate the final value for the investment', () => {
    expect(calculateFinalValue(1000, 5, 12)).toBeCloseTo(1051.16, 2);
    expect(calculateFinalValue(2000, 3.5, 24)).toBeCloseTo(2144.8, 2);
  });

  it('should handle zero initial capital', () => {
    expect(calculateFinalValue(0, 10, 6)).toBe(0);
  });

  it('should handle zero interest rate', () => {
    expect(calculateFinalValue(1500, 0, 9)).toBe(1500);
  });

  it('should handle zero months', () => {
    expect(calculateFinalValue(500, 8, 0)).toBe(500);
  });

  it('should handle negative values', () => {
    expect(calculateFinalValue(-1000, 7.5, 18)).toBeCloseTo(-1118.68, 2);
  });
});
