import * as readline from "readline";
import { validNumber } from "../utils/validNumber";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

export function calculateAverage(grades: number[]): number {
  const total = grades.reduce((sum, grade) => sum + grade, 0);
  return total / grades.length;
}

const gradeQuestion = () => {
  rl.question("Enter the grade for subject 1: ", (input1) => {
    if (validNumber(input1, gradeQuestion)) {
      const grade1 = parseFloat(input1);

      rl.question("Enter the grade for subject 2: ", (input2) => {
        if (validNumber(input2, gradeQuestion)) {
          const grade2 = parseFloat(input2);

          rl.question("Enter the grade for subject 3: ", (input3) => {
            if (validNumber(input3, gradeQuestion)) {
              const grade3 = parseFloat(input3);

              const grades = [grade1, grade2, grade3];
              const average = calculateAverage(grades);

              console.log(`The average grade is: ${average.toFixed(2)}`);

              rl.close();
            }
          });
        }
      });
    }
  });
};

export const mainGrade = () => {
  console.log(`
  GRADE APP
  `);
  gradeQuestion();
};
