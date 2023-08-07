import { guessAge } from "./utils/guess-age.mjs";
import PromptSync from "prompt-sync";

const prompt = PromptSync();

let fullName = prompt("Informe seu nome completo: ");
let age = +prompt("Informe o ano de nascimento: ");

while (isNaN(age) || age < 1922 || age > 2021) {
  console.log("Erro, informe os valores corretammente!");
  fullName = prompt("Informe seu nome completo: ");
  age = +prompt("Informe o ano de nascimento: ");
}

console.log(
  `Nome: ${fullName} - Idade que Completou/Completará: ${guessAge(age)}`
);
