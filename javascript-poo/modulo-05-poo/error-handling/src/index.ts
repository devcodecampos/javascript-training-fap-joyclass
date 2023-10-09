import promptSync from "prompt-sync";

const prompt = promptSync();

try {
  const firstNumber: number = parseInt(prompt("Enter the first number:"));
  const secondNumber: number = parseInt(prompt("Enter the second number:"));

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    throw new Error("Invalid input. Please make sure to enter numbers.");
  }
  
  if (secondNumber === 0) {
    throw new Error("Error: Division by zero is not allowed.");
  }

  const result: number = firstNumber / secondNumber;
  console.log(`Division result: ${result}`);
} catch (error: any) {
  console.error(error.message);
} finally {
  console.log("End of execution!");
}