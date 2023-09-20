## 🚀 Desafio Funções
### Crie um programa que contenha os seguintes tipos de funções:
- uma função tradicional com a palavra reservada “Function” e sem nenhum parâmetro
- uma função tradicional com parâmetros e um retorno de valor
- uma arrow function com parâmetros e que retorne um valor

```ts
// Trecho do Código
import promptSync from "prompt-sync";
const prompt = promptSync();

function celsiusToFahrenheit(celsius: number): number {
  const fahrenheit: number = celsius * 1.8 + 32;
  return fahrenheit;
}

const celsiusToKelvin = (celsius: number): number => {
  const kelvin: number = celsius + 273;
  return kelvin;
};

function app(): void {
  console.log("\n* Temperature Conversion *\n");

  const celsius: string = prompt("Temperature in celsius: ");
  const fahrenheit: number = celsiusToFahrenheit(parseFloat(celsius));
  const kelvin: number = celsiusToKelvin(parseFloat(celsius));

  console.log(`Fahrenheit: ${fahrenheit.toFixed(2)}F \nKelvin: ${kelvin}K`);
}

app();
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

cd javascript-poo/modulo-03-utilizando-padroes/functions

yarn install

yarn dev
```

## 📝 Licença <a name="license"></a>
MIT License

## 🤖Autor 
Feito por Matheus Campos

[![Linkedin Badge](https://img.shields.io/badge/-devcodecampos-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/devcodecampos/)](https://www.linkedin.com/in/devcodecampos/) 
[![Gmail Badge](https://img.shields.io/badge/-devcodecampos-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:devcodecampos@gmail.com)](mailto:devcodecampos@gmail.com)