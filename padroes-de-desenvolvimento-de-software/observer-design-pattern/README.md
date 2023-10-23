## 🚀 Desafio Design Pattern Observer
### Aplique o padrão de projeto observer para criar um simples editor de texto. Os requisitos para avaliar o projeto são:
- implementar uma subclasse da classe Editor chamada TextEditor
- aplicar o método insertLine, que recebe os parâmetros lineNumber e text
- inserir o texto na ordem correspondente a lineNumber e deslocar as linhas posteriores se necessário
- aplicar o método removeLine, que recebe lineNumber como parâmetro, deleta o texto da linha correspondente e desloca as linhas posteriores se necessário
- instanciar um TextEditor e disparar o evento “open”
- receber as linhas de texto, que serão inseridas no objeto textEditor, do usuário até que ele envie o texto “EOF”, que não deve ser inserido no objeto textEditor
- por fim, o textEditor deve disparar o evento “save” para que o conteúdo seja salvo no arquivo configurado e imprimir todo o conteúdo do arquivo na tela

```ts
./src/index.ts

// Trecho do Código
import { Application } from "./entities/Application";

const app = new Application();
app.config();



./src/entities/Application.ts

// Trecho do Código
import { EmailAlertsListener } from "./EmailAlertsListener";
import { LoggingListener } from "./LoggingListener ";
import { TextEditor } from "./TextEditor";

export class Application {
  config(): void {
    const textEditor = new TextEditor();
    textEditor.openFile(
      "C:/Users/matheuscampos/Desktop/project/javascript-training-fap-joyclass/padroes-de-desenvolvimento-de-software/observer-design-pattern/src/example.txt"
    );
    textEditor.getEvents().subscribe("open", {
      update: (filename) => {
        console.log(`Opened file: ${filename}`);
      },
    });

    textEditor.getEvents().subscribe("save", {
      update: (filename) => {
        console.log(`Saved file: ${filename}`);
      },
    });

    textEditor.processUserInput();

    const logger = new LoggingListener(
      "C:/Users/matheuscampos/Desktop/project/javascript-training-fap-joyclass/padroes-de-desenvolvimento-de-software/observer-design-pattern/src/log.txt",
      "Someone has changed the file: %s"
    );
    textEditor.getEvents().subscribe("save", logger);

    const emailAlerts = new EmailAlertsListener(
      "devcodecampos@gmail.com",
      "Someone has changed the file: %s"
    );
    textEditor.getEvents().subscribe("save", emailAlerts);
  }
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

## 🕹️ Execução do Projeto
``` 
git clone https://github.com/devcodecampos/javascript-training-fap-joyclass.git

cd padroes-de-desenvolvimento-de-software/observer-design-pattern

yarn install

yarn dev
```

## 📝 Licença <a name="license"></a>
MIT License

## 🤖Autor 
Feito por Matheus Campos

[![Linkedin Badge](https://img.shields.io/badge/-devcodecampos-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/devcodecampos/)](https://www.linkedin.com/in/devcodecampos/) 
[![Gmail Badge](https://img.shields.io/badge/-devcodecampos-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:devcodecampos@gmail.com)](mailto:devcodecampos@gmail.com)