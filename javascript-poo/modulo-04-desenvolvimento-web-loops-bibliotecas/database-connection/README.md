## 🚀 Desafio Conexão com o Banco de dados
### Implemente e trate uma conexão com o seu banco de dados, usando JavaScript. Caso a conexão com o banco tenha sucesso, ele deve retornar uma frase positiva. Se isso não ocorrer, retorne uma frase informando o erro. 

```ts
./src/server.js

// Trecho do Código
import "reflect-metadata";
import { AppDataSource } from "./database/data-source";

const initApp = async () => {
  try {
    await AppDataSource.initialize();
    console.log("Data Source has been initialized!")

  } catch (error: any) {
    console.log({ message: "Error when trying to init App" });
    console.log({ error: error.message });
  }
};

initApp();
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
[TypeORM](https://typeorm.io/)
```
yarn add typeorm 
yarn add reflect-metadata
```
[Postgres](https://www.postgresql.org/)
```
yarn add pg pg-hstore
```
[Dotenv](https://www.npmjs.com/package/dotenv)
```
yarn add -D dotenv
```

## 🕹️ Execução do Projeto
``` 
git clone https://github.com/devcodecampos/javascript-training-fap-joyclass.git

cd javascript-poo/modulo-04-desenvolvimento-web-loops-bibliotecas/database-connection

yarn install

yarn dev
```
Criar arquivo .env na raiz do projeto com as seguintes variáveis de ambiente, lembrando que são apenas exemplos, configure de acordo com seu ambiente
```ts
TYPEORM_HOST = localhost "O endereço do host do seu banco"
TYPEORM_USERNAME = postgres "O nome de usuário usado para autenticar no banco"
TYPEORM_PASSWORD = 123456 "A senha associada ao usuário do banco"
TYPEORM_DATABASE = softex "O nome do banco ao qual deseja se conectar"
TYPEORM_PORT = 5432 "A porta na qual o seu banco está configurado"
```

## 📝 Licença <a name="license"></a>
MIT License

## 🤖Autor 
Feito por Matheus Campos

[![Linkedin Badge](https://img.shields.io/badge/-devcodecampos-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/devcodecampos/)](https://www.linkedin.com/in/devcodecampos/) 
[![Gmail Badge](https://img.shields.io/badge/-devcodecampos-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:devcodecampos@gmail.com)](mailto:devcodecampos@gmail.com)