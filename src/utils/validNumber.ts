export function validNumber(input: any, question: () => void) {
  if (!input.trim().length || isNaN(input)) {
    console.log(`
    Invalid value. Please enter a valid number.
    `);
    question()
    return false
  }
  return true
}