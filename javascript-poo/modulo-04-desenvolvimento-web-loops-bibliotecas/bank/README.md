## 🚀 Desafio Objetos
### Crie um código com um objeto chamado “Banco”. Ele deverá ter propriedades que incluem conta, saldo, tipo de conta e agência e os seus métodos devem ser: buscar saldo, depósito, saque e número da conta. 
Observações: 
- buscar saldo: deve retornar o valor atual do saldo
- para o depósito, você deverá passar um valor como parâmetro e adicioná-lo no saldo final do objeto
- para o saque, você deverá passar um valor como parâmetro e subtraí-lo no saldo final do objeto
- o número da conta deve retornar o número da conta.

```ts
// Trecho do Código
import { Bank } from "./entities/Bank";

const bank = new Bank({
  accountNumber: 1254,
  accountBalance: 1000,
  accountType: "salary account",
  accountAgency: 2354,
});

console.log(`
BANK

Account Number: ${bank.getAccountNumber()}
Acount Balance: ${bank.getBalance()}`);

console.log("\nDeposit (300)");
bank.deposit(300);

console.log(`Acount Balance: ${bank.getBalance()}`);

console.log("\nWithdraw (200)");
bank.withdraw(200);

console.log(`Acount Balance: ${bank.getBalance()}`);
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

cd javascript-poo/modulo-04-desenvolvimento-web-loops-bibliotecas/bank

yarn install

yarn dev
```

## 📝 Licença <a name="license"></a>
MIT License

## 🤖Autor 
Feito por Matheus Campos

[![Linkedin Badge](https://img.shields.io/badge/-devcodecampos-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/devcodecampos/)](https://www.linkedin.com/in/devcodecampos/) 
[![Gmail Badge](https://img.shields.io/badge/-devcodecampos-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:devcodecampos@gmail.com)](mailto:devcodecampos@gmail.com)