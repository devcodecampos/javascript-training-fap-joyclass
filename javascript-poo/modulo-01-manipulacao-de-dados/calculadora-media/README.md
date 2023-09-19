## 🚀 Desafio Calculadora de Média
### Criar um programa JavaScript que calcule a média de três notas inseridas pelo usuário e exiba o resultado no console.

### Primeiro, solicite que o usuário insira três notas (entre 0 e 10) usando a função prompt(). Elas devem ser armazenadas em variáveis adequadas, por exemplo, nota1 , nota2 e nota3, com o tipo de dado Number. Depois, some-as e divida por três. O resultado deste cálculo será o valor da média, que deve ser armazenado em uma variável chamada media. Por fim, exiba esse valor no console usando a função console.log().Realize essa atividade, suba esse arquivo em um drive com link público e compartilhe o link no campo ao lado para que outros desenvolvedores possam analisá-lo.


```ts
// Trecho do Código
import promptSync from "prompt-sync";

const prompt = promptSync();

console.log(`
AVERAGE CALCULATOR\n
*Enter the values ​​of the three notes between 0 and 10*
`);

let firstValue: string = prompt("First Value: ");
let secondValue: string = prompt("Second Value: ");
let thirdValue: string = prompt("Third Value: ");
let average: number = (parseFloat(firstValue) + parseFloat(secondValue) + parseFloat(thirdValue)) / 3;

console.log(`\nAverage: ${average.toFixed(2)}`);
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

cd javascript-poo/modulo-01-manipulacao-de-dados/calculadora-media

yarn install

yarn dev
```

## 📝 Licença <a name="license"></a>
MIT License

## 🤖Autor 
Feito por Matheus Campos

[![Linkedin Badge](https://img.shields.io/badge/-devcodecampos-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/devcodecampos/)](https://www.linkedin.com/in/devcodecampos/) 
[![Gmail Badge](https://img.shields.io/badge/-devcodecampos-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:devcodecampos@gmail.com)](mailto:devcodecampos@gmail.com)