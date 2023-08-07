## 🚀 Desafio Advinhar Idade
- ### Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021. A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2022). Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.

    ```js
      // Trecho do Código
      export function guessAge(birthYear) {
        let currentYear = 2022;
        let age = currentYear - birthYear;
        return age;
      }
    ```

- ### Dependencias
  [prompt-sync](https://www.npmjs.com/package/prompt-sync) 📝🔗
   ```
  npm install prompt-sync
   ```

  [ESLint](https://eslint.org/docs/latest/use/getting-started) 📝🔗
   ```
  npm init @eslint/config
   ```

- ### Execução do Projeto
    ```
    git clone https://github.com/devcodecampos/javascript-training-fap-joyclass.git

    cd modulo-02-intro-programacao/guess-age

    npm install

    npm run dev
    ```
