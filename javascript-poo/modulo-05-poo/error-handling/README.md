## 🚀 Desafio Tratamento de Exceções
### Utilizando a linguagem JavaScript, crie uma situação matemática na qual os números precisam ser informados pelo usuário. Além disso, deve ocorrer uma exceção dentro do código. Utilize os métodos try(), catch() e finally() para realizar a captura e o tratamento dessa exceção. 

```ts
./src/index.js

// Trecho do Código
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

cd javascript-poo/modulo-05-poo/error-handling

yarn install

yarn dev
```

## 📝 Licença <a name="license"></a>
MIT License

## 🤖Autor 
Feito por Matheus Campos

[![Linkedin Badge](https://img.shields.io/badge/-devcodecampos-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/devcodecampos/)](https://www.linkedin.com/in/devcodecampos/) 
[![Gmail Badge](https://img.shields.io/badge/-devcodecampos-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:devcodecampos@gmail.com)](mailto:devcodecampos@gmail.com)