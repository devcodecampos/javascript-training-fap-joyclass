import PromptSync from "prompt-sync";
import { calculator } from "./utils/calculator.mjs";

const prompt = PromptSync();

let optionMenu;
do {
  console.log(`
CALCULADORA
(1) Soma
(2) Subtração
(3) Multiplicação
(4) Divisão
(0) Sair`);

  let firstNumber = +prompt("Informe o primeiro valor: ");
  let secondNumber = +prompt("Informe o secundo valor: ");
  optionMenu = +prompt("Escolha a opção: ");

  switch (optionMenu) {
    case 1:
      console.log("Resultado: " + calculator(firstNumber, secondNumber, 1));
      break;
    case 2:
      console.log("Resultado: " + calculator(firstNumber, secondNumber, 2));
      break;
    case 3:
      console.log("Resultado: " + calculator(firstNumber, secondNumber, 3));
      break;
    case 4:
      console.log("Resultado: " + calculator(firstNumber, secondNumber, 4));
      break;
    case 0:
      break;
    default:
      console.log("Essa opção não existe");
  }
} while (optionMenu !== 0);
