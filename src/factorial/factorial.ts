import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

export function calculateFactorial(number: number): number {
  if (number === 0 || number === 1) {
    return 1;
  }

  let factorial = 1;
  for (let i = 2; i <= number; i++) {
    factorial *= i;
  }

  return factorial;
}

const factorialQuestion = () => {
  
  rl.question("Enter a number: ", (input) => {
    const number = parseInt(input);

    if (isNaN(number) || number < 0) {
      console.log("Please enter a valid non-negative number.");
      factorialQuestion()
    } else {
      const factorial = calculateFactorial(number);
      console.log(`The factorial of ${number} is: ${factorial}`);
      rl.close()
    }

  });
};

export const mainFactorial = () => {
  console.log(`
  FACTORIAL APP
  `)
  factorialQuestion();
};
