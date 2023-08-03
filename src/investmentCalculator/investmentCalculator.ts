import * as readline from "readline";
import { validNumber } from "../utils/validNumber";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

export function calculateFinalValue(initialCapital: number, interestRate: number, months: number): number {
  const monthlyInterestRate = interestRate / 100 / 12;
  const finalValue = initialCapital * Math.pow(1 + monthlyInterestRate, months);
  return Number(finalValue.toFixed(2));
}

const investmentCalculatorQuestion = () => {
  rl.question("Enter initial capital: ", (input1) => {
    if (validNumber(input1, investmentCalculatorQuestion)) {
      const initialCapital = parseFloat(input1);

      rl.question("Enter interest rate (in %): ", (input2) => {
        if (validNumber(input2, investmentCalculatorQuestion)) {
          const interestRate = parseFloat(input2);

          rl.question("Enter investment time (in months): ", (input3) => {
            if (validNumber(input3, investmentCalculatorQuestion)) {
              const months = parseInt(input3);

              const finalValue = calculateFinalValue(initialCapital, interestRate, months);
              console.log(
                `The final value of the investment is: ${finalValue.toFixed(2)}`
              );

              rl.close();
            }
          });
        }
      });
    }
  });
};

export const mainInvestmentCalculator = () => {
  console.log(`
  INTEREST CALCULATION APP
  `);

  investmentCalculatorQuestion();
};
