import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

export function countVowels(sentence: string): number {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;

  for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      vowelCount++;
    }
  }

  return vowelCount;
}

const vowelCounterQuestion = () => {
  rl.question("Enter a sentence: ", (input) => {
    if (input.trim() === "") {
      console.log("Invalid value");
      return vowelCounterQuestion()
    }
    const sentence = input;

    const vowelCount = countVowels(sentence);
    console.log(`The sentence has ${vowelCount} vowels.`);

    rl.close();
  });
};

export const mainVowelCounter = () => {
  console.log(`
  VOLWEL COUNTER APP
  `)
  vowelCounterQuestion()
}
