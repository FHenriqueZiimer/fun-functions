import * as readline from "readline";
import { validNumber } from '../utils/validNumber';


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function calculateMultiplicationTable(number: number): string[] | null {
 
  const table: string[] = [];
  for (let i = 1; i <= 10; i++) {
    const result = number * i;
    table.push(`${number} x ${i} = ${result}`);
  }

  return table;
}

const tableQuestion = () => {
  rl.question("Enter a number: ", (input) => {
    if(validNumber(input, tableQuestion)) {
      const number = parseInt(input);
  
      const table = calculateMultiplicationTable(number);
      if (table === null) {
        console.log("Please enter a valid number.");
      } else {
        console.log(`Multiplication table for ${number}:`);
        table.forEach((item) => console.log(item));
      }
  
      rl.close();
    }
  });
};

export const mainTable = () => {
  console.log(`
  TABLE APP
  `)
  tableQuestion()
}
