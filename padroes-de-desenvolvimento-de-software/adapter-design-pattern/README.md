## 🚀 Desafio Design Pattern Adapter
- Crie um adaptador que permita que um objeto do tipo Pato seja usado como se fosse um objeto do tipo Galinha

- Crie as classes AdaptadorPato e AdaptadorPatoDemo para demonstrar o uso da classe AdaptadorPato


```ts
./src/index.ts

// Trecho do Código
import { DuckAdapterDemo } from "./entities/DuckAdapterDemo";

DuckAdapterDemo.testAdapter()



./src/entities/DuckAdapter.ts

// Trecho do Código
import { IChicken } from "../interfaces/IChicken";
import { Duck } from "./Duck";

export class DuckAdapter implements IChicken {
  private duck: Duck;

  constructor(duck: Duck) {
    this.duck = duck;
  }

  shortDistanceFlight(): void {
    console.log("Duck behaving like Chicken");
    this.duck.longDistanceFlight()
  }
}



./src/entities/DuckAdapterDemo.ts

// Trecho do Código
import { Duck } from "./Duck";
import { DuckAdapter } from "./DuckAdapter";

export class DuckAdapterDemo {
  static testAdapter(): void {
    const duck = new Duck();
    const adapter = new DuckAdapter(duck);

    console.log("\nDuck Adapter:");
    adapter.shortDistanceFlight();

    console.log("\nOriginal Duck:");
    duck.longDistanceFlight()
  }
}
```

## 🧱 Estrutura do Projeto <a name="estrutura"></a>
```
src      
└───entities
      └───Chicken.ts
      └───Duck.ts      
      └───DuckAdapter.ts
      └───DuckAdapterDemo.ts  
└───interfaces
      └───IChicken.ts
      └───IDuck.ts
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

cd padroes-de-desenvolvimento-de-software/adapter-design-pattern

yarn install

yarn dev
```

## 📝 Licença <a name="license"></a>
MIT License

## 🤖Autor 
Feito por Matheus Campos

[![Linkedin Badge](https://img.shields.io/badge/-devcodecampos-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/devcodecampos/)](https://www.linkedin.com/in/devcodecampos/) 
[![Gmail Badge](https://img.shields.io/badge/-devcodecampos-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:devcodecampos@gmail.com)](mailto:devcodecampos@gmail.com)