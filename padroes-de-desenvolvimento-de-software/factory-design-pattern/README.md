## 🚀 Desafio Design Pattern
### Considere que:
- os produtos devem implementar uma interface comum
- o cliente deve utilizar apenas a fábrica para criar instâncias do tipo abstrato da interface
- todo computador deve ter, com getters, os atributos: ram, hdd, cpu, type
- há dois tipos de computadores: pc e server
- RAM e HD devem estar em GB
- CPU deve estar em GHz
- através do tipo informado, a fábrica decide qual tipo de computador irá instanciar
- quando o método .toString() for aplicado a um computador, ele deve imprimir seus atributos

```ts
./src/entities/ComputerFactory.js

// Trecho do Código
import { IComputer } from "../interfaces/IComputer";
import { Desktop } from "../../Desktop";
import { Server } from "./Server";

export class ComputerFactory {
  static createComputer(
    ram: number,
    hdd: number,
    cpu: number,
    type: string
  ): IComputer {
    if (type === "server") {
      return new Server(ram, hdd, cpu);
    } else if (type === "desktop") {
      return new Desktop(ram, hdd, cpu);
    } else {
      throw new Error("Computer type not supported");
    }
  }
}

./src/index.js

// Trecho do Código
import { ComputerFactory } from "./entities/ComputerFactory";

console.log("FACTORY DESIGN PATTERN")

const server = ComputerFactory.createComputer(32, 512, 4.5, "server");
console.log(`
SERVER
${server.toString()}`);

const desktop = ComputerFactory.createComputer(32, 512, 4.5, "desktop");

console.log(`
DESKTOP
${desktop.toString()}`);
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

cd padroes-de-desenvolvimento-de-software/factory-design-pattern

yarn install

yarn dev
```

## 📝 Licença <a name="license"></a>
MIT License

## 🤖Autor 
Feito por Matheus Campos

[![Linkedin Badge](https://img.shields.io/badge/-devcodecampos-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/devcodecampos/)](https://www.linkedin.com/in/devcodecampos/) 
[![Gmail Badge](https://img.shields.io/badge/-devcodecampos-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:devcodecampos@gmail.com)](mailto:devcodecampos@gmail.com)