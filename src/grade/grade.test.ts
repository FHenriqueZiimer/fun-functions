import { calculateAverage } from './grade';

describe('calculateAverage', () => {
  it('should calculate the average of grades', () => {
    expect(calculateAverage([65, 75, 85])).toBe(75);
  });

  it('should handle negative grades', () => {
    expect(calculateAverage([-10, -20, -30])).toBe(-20);
  });

  it('should handle decimal grades', () => {
    expect(calculateAverage([55.5, 67.2, 72.9])).toBe(65.2);
  });
});