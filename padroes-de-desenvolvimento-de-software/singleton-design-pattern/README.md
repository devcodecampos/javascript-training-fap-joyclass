## 🚀 Desafio Design Pattern Singleton
### Você é um agente secreto altamente treinado da organização inglesa MI7 e recebeu uma missão crítica: proteger a Base Secreta contra invasões inimigas. O local contém informações vitais para a segurança mundial e só pode ser acessado por um único sistema de segurança confiável.

A sua tarefa é implementar um sistema de segurança para a Base Secreta usando o padrão Singleton em TypeScript. A ideia é que apenas uma instância do sistema de segurança possa ser criada, garantindo que o local esteja bem protegido

Instruções: 
- Crie uma classe chamada SistemaSeguranca. Ela deve implementar o padrão Singleton. Certifique-se de que apenas uma instância da classe possa ser criada
- A classe SistemaSeguranca deve ter um método chamado acessarBaseSecreta. Ele verifica se a senha inserida pelo agente coincide com a da Base Secreta. Se estiver correta, o acesso é concedido. Caso contrário, é negado
- Crie um programa principal que demonstre o uso do Singleton SistemaSeguranca. No programa, um agente secreto tentará acessar a Base Secreta inserindo uma senha. Se a senha estiver correta, o acesso será concedido. Caso contrário, será negado

```ts
./src/entities/SecuritySystem.ts

// Trecho do Código
export class SecuritySystem {
  private static instance: SecuritySystem;
  private password = "783ri21";

  private constructor() {}

  static getInstance(): SecuritySystem {
    if (!SecuritySystem.instance) {
      SecuritySystem.instance = new SecuritySystem();
    }

    return SecuritySystem.instance;
  }

  accessSecretBase(password: string): string {
    if (this.password !== password) {
      return "Permission Denied";
    }

    SecuritySystem.getInstance();
    return "Secret Base Successfully Accessed";
  }
}
```

## 🧱 Estrutura do Projeto <a name="estrutura"></a>
```
src      
└───entities
      └───SecuritySystem.ts
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

cd padroes-de-desenvolvimento-de-software/singleton-design-pattern

yarn install

yarn dev
```

## 📝 Licença <a name="license"></a>
MIT License

## 🤖Autor 
Feito por Matheus Campos

[![Linkedin Badge](https://img.shields.io/badge/-devcodecampos-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/devcodecampos/)](https://www.linkedin.com/in/devcodecampos/) 
[![Gmail Badge](https://img.shields.io/badge/-devcodecampos-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:devcodecampos@gmail.com)](mailto:devcodecampos@gmail.com)