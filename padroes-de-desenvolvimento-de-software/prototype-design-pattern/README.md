## 🚀 Desafio Design Pattern Prototype
### Crie uma fábrica de veículos utilizando o padrão Prototype. Os requisitos do projeto devem ser:

- implemente uma classe abstrata Veículo com um construtor padrão e os métodos clone e represent
- o construtor da classe Veículo deve receber modelo, marca, cor e numeroRodas como parâmetros
- crie pelo menos duas subclasses da classe Veículo, que acrescentem um ou mais atributos, por exemplo: carro que tem dois campos a mais, como numeroRodas e numeroPortas
- desenvolva uma classe Aplicação que deve criar um array com seis veículos com dois tipos de veículos diferentes (subclasses), utilizando o método clone dos objetos para preencher o array
- na classe Aplicação, implemente um método que retorne um array com o mesmo tamanho do array de veículos, onde cada elemento deve ser um clone dos elementos do array veículos
- no final, deve imprimir na tela o retorno da função represent de cada elemento desse novo array de clones de veículos

```ts
./src/entities/Application.ts

// Trecho do Código
import { Vehicle } from "./Vehicle";
import { Car } from "./Car";
import { Motorcycle } from "./Motorcycle";

export class Application {
  private vehicles: Vehicle[] = [];

  constructor() {
    const car = new Car("dodge", "dodge charger", "black", 4, 2);
    this.vehicles.push(car);

    const car2 = car.clone();
    this.vehicles.push(car2);

    const car3 = car.clone();
    this.vehicles.push(car3);

    const motorcycle = new Motorcycle(
      "yamaha",
      "mt-07",
      "black",
      2,
      "sport handlebars"
    );
    this.vehicles.push(motorcycle);

    const motorcycle2 = motorcycle.clone();
    this.vehicles.push(motorcycle2);

    const motorcycle3 = motorcycle.clone();
    this.vehicles.push(motorcycle3);
  }

  getVehicles(): Vehicle[] {
    return this.vehicles;
  }

  makeCopiesOfVehicles(): Vehicle[] {
    const vehiclesCopy: Vehicle[] = [];

    this.vehicles.forEach((vehicle) => {
      vehiclesCopy.push(vehicle.clone());
    });

    return vehiclesCopy;
  }
}


./src/index.ts

// Trecho do Código
import { Application } from "./entities/Application";

const app = new Application();

app.makeCopiesOfVehicles().forEach((vehicle) => {
  console.log(vehicle.represent());
});
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

cd padroes-de-desenvolvimento-de-software/prototype-design-pattern

yarn install

yarn dev
```

## 📝 Licença <a name="license"></a>
MIT License

## 🤖Autor 
Feito por Matheus Campos

[![Linkedin Badge](https://img.shields.io/badge/-devcodecampos-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/devcodecampos/)](https://www.linkedin.com/in/devcodecampos/) 
[![Gmail Badge](https://img.shields.io/badge/-devcodecampos-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:devcodecampos@gmail.com)](mailto:devcodecampos@gmail.com)