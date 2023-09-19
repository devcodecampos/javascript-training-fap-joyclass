import promptSync from "prompt-sync";

const prompt = promptSync();

console.log(`
AVERAGE CALCULATOR\n
*Enter the values ​​of the three notes between 0 and 10*
`);

let firstValue: string = prompt("First Value: ");
let secondValue: string = prompt("Second Value: ");
let thirdValue: string = prompt("Third Value: ");
let average: number =
  (parseFloat(firstValue) + parseFloat(secondValue) + parseFloat(thirdValue)) /
  3;

console.log(`\nAverage: ${average.toFixed(2)}`);