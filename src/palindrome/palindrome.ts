import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

export function isPalindrome(word: string): boolean {
  const cleanWord = word.replace(/\s/g, '').toLowerCase();
  return cleanWord === cleanWord.split('').reverse().join('');
}

const palindromeQuestion = () => {
 
  rl.question("Enter a word: ", (input) => {
    if (input.trim() === "") {
      console.log("Invalid value");
      return palindromeQuestion()
    }

    const word = input.toLowerCase();
    if (isPalindrome(word)) {
      console.log(`"${word}" is a palindrome.`);
    } else {
      console.log(`"${word}" is not a palindrome.`);
    }

    rl.close();
  });
};

export const mainPalindrome = () => {
  console.log(`
  PALINDROME APP
  `)
  palindromeQuestion();
};