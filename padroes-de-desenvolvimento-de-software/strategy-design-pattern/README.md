## 🚀 Desafio Design Pattern Strategy
### Aplique o padrão de projeto Strategy para criar uma simples calculadora. Os requisitos para avaliar o projeto são: 
- implementar uma interface Strategy com o método abstrato execute(). Deve haver três classes concretas que implementam a Strategy para realizar as operações de Soma, Subtração e Multiplicação de números inteiros
- o método execute() deve receber dois números inteiros como parâmetros e retornar o resultado também como número inteiro
- como input do usuário, a aplicação deve receber o primeiro valor, depois o segundo e, por último, a operação matemática que deve realizar
- no final, a aplicação deve definir qual Strategy será usada, com base na operação informada, e imprimir o resultado da operação

```ts
./src/index.ts

// Trecho do Código
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



./src/entities/CalculatorStrategy.ts

// Trecho do Código
import { IStrategy } from "../interfaces/IStrategy";

export class CalculatorStrategy {
  private calculatorStrategy: IStrategy;

  constructor(calculatorStrategy: IStrategy) {
    this.calculatorStrategy = calculatorStrategy;
  }
  
  setCalculatorStrategy(calculatorStrategy: IStrategy) {
    this.calculatorStrategy = calculatorStrategy;
  }

  executeCalculatorStrategy(a: number, b: number): number {
    return this.calculatorStrategy.execute(a, b);
  }
}
```

## 🧱 Estrutura do Projeto <a name="estrutura"></a>
```
src      
└───entities
      └───Addition.ts
      └───CalculatorStrategy.ts      
      └───Multiplication.ts
      └───Subtraction.ts  
└───interfaces
      └───IStrategy.ts
└───index.ts
.eslintrc.json
package.json
README.md
tsconfig.json
yarn.lock
```

## 📚 Dependencias
[Typescript](https://www.typescriptlang.org/download)
```
yarn add -D typescript
```
[ts-node-dev](https://www.npmjs.com/package/ts-node-dev)
```
yarn add -D ts-node-dev
```
[ESLint](https://eslint.org/docs/latest/use/getting-started)
```
yarn add -D eslint
yarn run eslint --init
```
[prompt-sync](https://www.npmjs.com/package/prompt-sync) 
```
yarn add -D prompt-sync
```

## 🕹️ Execução do Projeto
``` 
git clone https://github.com/devcodecampos/javascript-training-fap-joyclass.git

cd padroes-de-desenvolvimento-de-software/strategy-design-pattern

yarn install

yarn dev
```

## 📝 Licença <a name="license"></a>
MIT License

## 🤖Autor 
Feito por Matheus Campos

[![Linkedin Badge](https://img.shields.io/badge/-devcodecampos-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/devcodecampos/)](https://www.linkedin.com/in/devcodecampos/) 
[![Gmail Badge](https://img.shields.io/badge/-devcodecampos-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:devcodecampos@gmail.com)](mailto:devcodecampos@gmail.com)