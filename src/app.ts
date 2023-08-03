import * as readline from 'readline';
import { mainSimpleCalculator } from './simpleCalculator/simpleCalculator';
import { showPrimeNumbers } from './primeNumbers/primeNumbers'; 
import { mainFactorial } from './factorial/factorial';
import { mainPalindrome } from './palindrome/palindrome';
import { mainTable } from './table/table';
import { mainVowelCounter } from './vowelCounter/vowelCounter';
import { mainGrade } from './grade/grade';
import { mainInvestmentCalculator } from './investmentCalculator/investmentCalculator'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

function showMenu() {
  console.log('select the APP:');
  console.log('1. Simple Calculator');
  console.log('2. Prime Numbers');
  console.log('3. Factorial');
  console.log('4. Palindrome');
  console.log('5. Table');
  console.log('6. Vowel Counter');
  console.log('7. Grade Average');
  console.log('8. Interest Calculation');
  console.log('9. Exit');
}

export function main() {
  showMenu();

  rl.question('Enter your choice: ', (choice) => {
    if (choice === '1') {
      mainSimpleCalculator()
    } else if (choice === '2') {
      showPrimeNumbers()
    } else if (choice === '3') {
      mainFactorial()
    } else if (choice === '4') {
      mainPalindrome()
    } else if (choice === '5') {
      mainTable()
    } else if (choice === '6') {
      mainVowelCounter()
    } else if (choice === '7') {
      mainGrade()
    } else if (choice === '8') {
      mainInvestmentCalculator()
    } else if (choice === '9') {
      rl.close();
    } else {
      console.clear()
      console.log('Invalid choice. Please choose again.');
      main();
    }
  });
}

main();
