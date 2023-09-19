import promptSync from "prompt-sync";
import calculator from "./utils";

const prompt = promptSync();

console.log(`
CALCULATOR\n
(+) Addition
(-) Subtraction
(*) Multiplication
(/) Division
`);

let operator: string = prompt("Choose an operator: ");
let firstValue: string = prompt("First Value: ");
let secondValue: string = prompt("Second Value: ");

let calculate: number = calculator(
  parseFloat(firstValue),
  parseFloat(secondValue),
  operator
);

console.log(`\nResult: ${calculate.toFixed(2)}`);