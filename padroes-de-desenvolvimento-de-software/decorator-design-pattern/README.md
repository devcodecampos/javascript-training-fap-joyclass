## 🚀 Desafio Design Pattern Decorator
### Aplique o padrão de projeto decorator para criar um sanduíche de frango assado com pepperoni e queijo mussarela ralado. 
O projeto deve seguir os seguintes critérios:
- deve imprimir no console: Sanduíche de Carne, Bacon, QueijoMussarelaRalado custa $7,49
- o sanduíche de frango assado custa $4,50.
- o ingrediente adicional pepperoni custa $0,99.&nbsp
- o ingrediente adicional queijo mussarela ralado custa $2,00
- crie as classes necessárias: FrangoAssado, Pepperoni e QueijoMussarelaRalado


```ts
./src/index.ts

// Trecho do Código
import { MozzarellaCheeseDecorator } from "./entities/MozzarellaCheeseDecorator";
import { PepperoniDecorator } from "./entities/PepperoniDecorator";
import { RoastChicken } from "./entities/RoastChicken";
import { Sandwich } from "./entities/Sandwich";

let sandwich: Sandwich = new RoastChicken();

sandwich = new PepperoniDecorator(sandwich);
sandwich = new MozzarellaCheeseDecorator(sandwich);
console.log(`ORDER: {
${sandwich.description}, cost: $${sandwich.cost.toFixed(2)}}`);
```

## 🧱 Estrutura do Projeto <a name="estrutura"></a>
```
src      
└───entities
      └───MozzarellaCheeseDecorator.ts
      └───PepperoniDecorator.ts      
      └───RoastChicken.ts
      └───Sandwich.ts  
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

## 🕹️ Execução do Projeto
``` 
git clone https://github.com/devcodecampos/javascript-training-fap-joyclass.git

cd padroes-de-desenvolvimento-de-software/decorator-design-pattern

yarn install

yarn dev
```

## 📝 Licença <a name="license"></a>
MIT License

## 🤖Autor 
Feito por Matheus Campos

[![Linkedin Badge](https://img.shields.io/badge/-devcodecampos-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/devcodecampos/)](https://www.linkedin.com/in/devcodecampos/) 
[![Gmail Badge](https://img.shields.io/badge/-devcodecampos-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:devcodecampos@gmail.com)](mailto:devcodecampos@gmail.com)