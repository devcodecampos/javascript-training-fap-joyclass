import promptSync from "prompt-sync";
import { CalculatorStrategy } from "./entities/CalculatorStrategy";
import { Addition } from "./entities/Addition";
import { Subtraction } from "./entities/Subtraction";
import { Multiplication } from "./entities/Multiplication";

const prompt = promptSync();

console.log("CALCULATOR\n");

const firstNumber: number = parseInt(prompt("Enter the first number: "));
const secondNumber: number = parseInt(prompt("Enter the second number: "));
const operator: string = prompt("Enter the operator (+, - ou *): ");

const calculatorStrategy = new CalculatorStrategy(new Addition());

if (operator === "+") {
  calculatorStrategy.executeCalculatorStrategy(firstNumber, secondNumber);
} else if (operator === "-") {
  calculatorStrategy.setCalculatorStrategy(new Subtraction());
} else if (operator === "*") {
  calculatorStrategy.setCalculatorStrategy(new Multiplication());
}

const result = calculatorStrategy.executeCalculatorStrategy(
  firstNumber,
  secondNumber
);

console.log(result);