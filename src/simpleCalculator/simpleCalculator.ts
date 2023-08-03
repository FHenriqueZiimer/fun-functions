import * as readline from 'readline';
import { validNumber } from '../utils/validNumber';


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let number1: number;
let number2: number;
let operatorSelected: string;

export function simpleCalculator(
  num1: number,
  num2: number,
  operator: string
): number | string {
  let fn: () => number | string;
  const operators: Record<number | string, () => number | string> = {
    "+": () => num1 + num2,
    "-": () => num1 - num2,
    "*": () => num1 * num2,
    "/": () => {
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        return "Cannot divide by zero";
      }
    },
    default: function () {
      return "Invalid operator";
    },
  };

  if (operators[operator]) {
    fn = operators[operator];
  } else {
    fn = operators["default"];
  }
  return fn();
}

const questionNumber1 = () => {
  rl.question(
    `
  Enter the first number: `, (input) => {
      if(validNumber(input, questionNumber1)) {
        number1 = Number(input);
        questionOperator();
      }
    }
  );
};

const questionNumber2 = () => {
  rl.question(
    `
  Enter the second number: `, (input: string) => {
      if(validNumber(input, questionNumber2)) {
        number2 = Number(input);
        console.log(
        `
        Result: ${simpleCalculator(number1, number2, operatorSelected)} `
        );
        rl.close()
      }
    }
  );
};

const questionOperator = () => {
  
  rl.question(
    `
  Enter the operator (+, -, *, /): `, (input: string) => {
      operatorSelected = input;
      questionNumber2()
    }
  );
};

export const mainSimpleCalculator = () => {
  console.log(`
  SIMPLE CALCULATOR APP
  `)
  questionNumber1();
};
