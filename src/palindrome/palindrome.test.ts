import { isPalindrome } from './palindrome';

describe('isPalindrome', () => {
  it('should return true for palindromic words', () => {
    expect(isPalindrome('radar')).toBe(true);
    expect(isPalindrome('level')).toBe(true);
    expect(isPalindrome('deified')).toBe(true);
  });

  it('should return false for non-palindromic words', () => {
    expect(isPalindrome('hello')).toBe(false);
    expect(isPalindrome('world')).toBe(false);
    expect(isPalindrome('programming')).toBe(false);
  });

  it('should handle case-insensitive palindromic words', () => {
    expect(isPalindrome('Racecar')).toBe(true);
    expect(isPalindrome('Madam')).toBe(true);
  });

  it('should handle case-insensitive non-palindromic words', () => {
    expect(isPalindrome('OpenAI')).toBe(false);
    expect(isPalindrome('Machine')).toBe(false);
  });
});
