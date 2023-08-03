import { countVowels } from './vowelCounter';

describe('countVowels', () => {
  it('should return 0 for a sentence with no vowels', () => {
    expect(countVowels('rhythms')).toBe(0);
  });

  it('should count the vowels in a sentence', () => {
    expect(countVowels('Hello, world!')).toBe(3);
    expect(countVowels('Programming is fun')).toBe(5);
  });

  it('should handle an empty sentence', () => {
    expect(countVowels('')).toBe(0);
  });

  it('should handle all uppercase vowels', () => {
    expect(countVowels('AEIOU')).toBe(5);
  });

  it('should handle mixed case sentence', () => {
    expect(countVowels('eLePhAnT')).toBe(3);
  });
});