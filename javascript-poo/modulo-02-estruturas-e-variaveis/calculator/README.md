## 🚀 Desafio Calculadora
### Crie um programa de calculadora que:
- receba dois valores, que devem ser salvos em variáveis
- o usuário deve colocar qual operador ele vai utilizar por meio dos símbolos aritméticos
- com os dois valores e o operador definido, o programa deve fazer a operação e retornar o resultado
- se houver divisão, você deve retornar o resultado e a sobra, caso haja alguma.


```ts
// Trecho do Código
const calculator = (firstValue: number, secondValue: number, operator: string): number => {
  let result = 0;
  switch (operator) {
    case "+":
      result = firstValue + secondValue;
      break;
    case "-":
      result = firstValue - secondValue;
      break;
    case "*":
      result = firstValue * secondValue;
      break;
    case "/":
      if (secondValue === 0) {
        result = 0;
        break;
      }
      result = firstValue / secondValue;
      break;
    default:
      result = 0;
  }
  return result;
};

export default calculator;
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

cd javascript-poo/modulo-02-estruturas-e-variaveis/calculator

yarn install

yarn dev
```

## 📝 Licença <a name="license"></a>
MIT License

## 🤖Autor 
Feito por Matheus Campos

[![Linkedin Badge](https://img.shields.io/badge/-devcodecampos-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/devcodecampos/)](https://www.linkedin.com/in/devcodecampos/) 
[![Gmail Badge](https://img.shields.io/badge/-devcodecampos-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:devcodecampos@gmail.com)](mailto:devcodecampos@gmail.com)