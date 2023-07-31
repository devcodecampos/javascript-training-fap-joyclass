import PromptSync from "prompt-sync";
import { calculator } from "./utils/calculator.mjs";

const prompt = PromptSync()

console.log(`
CALCULADORA
(1) Soma
(2) Subtração
(3) Multiplicação
(4) Divisão`)

let operationNumber = +prompt('Escolha a operação: ')
let firstNumber = +prompt('Informe o primeiro valor: ')
let secondNumber = +prompt('Informe o secundo valor: ')

console.log('Resultado: ' + calculator(firstNumber, secondNumber, operationNumber))