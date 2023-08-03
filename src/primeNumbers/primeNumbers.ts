import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

export function isPrime(number: number): boolean {
  if (number <= 1) {
    return false;
  }
  
  if (number <= 3) {
    return true;
  }
  
  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }
  
  let i = 5;
  while (i * i <= number) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  
  return true;
}

export function printFirstNPrimes(n: number): void {
  let count = 0;
  let num = 2;
  
  while (count < n) {
    if (isPrime(num)) {
      console.log(num);
      count++;
    }
    num++;
  }
}

export const showPrimeNumbers =  () => {
  console.log(`
  PRIME NUMBERS APP

the first 10 prime numbers:
  `)
  
  printFirstNPrimes(10);
  rl.close()
  
}
